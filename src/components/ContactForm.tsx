"use client";

import { FocusEvent, FormEvent, useState } from "react";
import { SectionHeading } from "./SectionHeading";

const MAX_MESSAGE_LENGTH = 1000;
const DNS_LOOKUP_TIMEOUT_MS = 5000;

type DnsValidationResult = {
  ok: boolean;
  message: string;
};

async function resolveDnsRecord(domain: string, type: "MX" | "A" | "AAAA") {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), DNS_LOOKUP_TIMEOUT_MS);

  try {
    const response = await fetch(
      `https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=${type}`,
      {
        cache: "no-store",
        signal: controller.signal,
      },
    );

    if (!response.ok) {
      return false;
    }

    const payload = (await response.json()) as { Answer?: unknown[] };
    return Array.isArray(payload.Answer) && payload.Answer.length > 0;
  } catch {
    return false;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function validateEmailDomain(email: string): Promise<DnsValidationResult> {
  const atIndex = email.lastIndexOf("@");
  if (atIndex <= 0 || atIndex === email.length - 1) {
    return {
      ok: false,
      message: "メールアドレスの形式を確認してください。",
    };
  }

  const domain = email.slice(atIndex + 1).toLowerCase();
  if (!domain || domain.includes("..") || !domain.includes(".")) {
    return {
      ok: false,
      message: "メールアドレスのドメイン形式が不正です。",
    };
  }

  const hasMx = await resolveDnsRecord(domain, "MX");
  if (hasMx) {
    return { ok: true, message: "" };
  }

  const [hasA, hasAaaa] = await Promise.all([
    resolveDnsRecord(domain, "A"),
    resolveDnsRecord(domain, "AAAA"),
  ]);

  if (hasA || hasAaaa) {
    return { ok: true, message: "" };
  }

  return {
    ok: false,
    message: "メールアドレスを確認できませんでした。入力に誤りがないかご確認ください。",
  };
}

export function ContactForm() {
  const [isCheckingDomain, setIsCheckingDomain] = useState(false);
  const [messageLength, setMessageLength] = useState(0);

  const runEmailDnsValidation = async (emailInput: HTMLInputElement) => {
    if (!emailInput.value || emailInput.validity.typeMismatch) {
      emailInput.setCustomValidity("");
      return true;
    }

    setIsCheckingDomain(true);
    const result = await validateEmailDomain(emailInput.value.trim());
    setIsCheckingDomain(false);

    emailInput.setCustomValidity(result.message);
    return result.ok;
  };

  const validateMessageRequired = (messageInput: HTMLTextAreaElement) => {
    const hasContent = messageInput.value.trim().length > 0;
    messageInput.setCustomValidity(
      hasContent ? "" : "問合せ内容を入力してください。",
    );
    return hasContent;
  };

  const handleEmailBlur = async (event: FocusEvent<HTMLInputElement>) => {
    const emailInput = event.currentTarget;
    const isValid = await runEmailDnsValidation(emailInput);
    if (!isValid) {
      emailInput.reportValidity();
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    const emailInput = form.elements.namedItem("email");
    if (!(emailInput instanceof HTMLInputElement)) {
      return;
    }
    const messageInput = form.elements.namedItem("message");
    if (!(messageInput instanceof HTMLTextAreaElement)) {
      return;
    }

    const isMessageValid = validateMessageRequired(messageInput);
    if (!isMessageValid) {
      messageInput.reportValidity();
      return;
    }

    const isValid = await runEmailDnsValidation(emailInput);
    if (!isValid) {
      emailInput.reportValidity();
      return;
    }

    form.submit();
  };

  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-5xl scroll-mt-28 px-6 py-24"
    >
      <SectionHeading
        eyebrow="問い合わせ"
        eyebrowEn="Contact"
        title="ご連絡フォーム。"
      />

      <form
        action="/inquiries"
        method="post"
        onSubmit={handleSubmit}
        className="glass-strong space-y-6 rounded-2xl p-6 sm:p-8"
      >
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-xs font-semibold tracking-[0.14em] text-sky-700"
          >
            氏名
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-sky-100 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-200/70"
            placeholder="山田 太郎"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-xs font-semibold tracking-[0.14em] text-sky-700"
          >
            メールアドレス
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            onBlur={handleEmailBlur}
            className="w-full rounded-xl border border-sky-100 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-200/70"
            placeholder="example@mail.com"
          />
          {isCheckingDomain ? (
            <p className="text-xs text-slate-500">ドメインのDNSを確認しています...</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-xs font-semibold tracking-[0.14em] text-sky-700"
          >
            問合せ内容
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            maxLength={MAX_MESSAGE_LENGTH}
            onBlur={(event) => {
              validateMessageRequired(event.currentTarget);
              event.currentTarget.reportValidity();
            }}
            onChange={(event) => {
              const textarea = event.currentTarget;
              setMessageLength(textarea.value.length);
              validateMessageRequired(textarea);
            }}
            className="w-full rounded-xl border border-sky-100 bg-white px-4 py-3 text-sm leading-relaxed text-slate-700 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-200/70"
            placeholder="お問い合わせ内容をご記入ください。"
          />
          <p className="text-right text-xs text-slate-500">
            {messageLength}/{MAX_MESSAGE_LENGTH}
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-[color:var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            送信する
          </button>
        </div>
      </form>

    </section>
  );
}
