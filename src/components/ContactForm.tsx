import { SectionHeading } from "./SectionHeading";

export function ContactForm() {
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
        action="#"
        method="post"
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
            className="w-full rounded-xl border border-sky-100 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-200/70"
            placeholder="example@mail.com"
          />
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
            className="w-full rounded-xl border border-sky-100 bg-white px-4 py-3 text-sm leading-relaxed text-slate-700 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-200/70"
            placeholder="お問い合わせ内容をご記入ください。"
          />
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
