"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { siteConfig } from "@/constants/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, close]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-2 pt-2.5 sm:px-3 sm:pt-3">
        <div className="glass flex w-full max-w-5xl items-center justify-between gap-2.5 sm:gap-3 rounded-lg px-2 py-3 sm:px-3 sm:py-3.5 shadow-[0_2px_16px_rgba(11,61,92,0.05)]">
          <Link
            href="#top"
            className="inline-flex shrink-0 items-center leading-none transition-opacity hover:opacity-90"
            aria-label="トップへ"
            onClick={close}
          >
            <Image
              src="/header-title.png"
              alt="IDEA LOG"
              width={799}
              height={156}
              priority
              className="block h-5 w-auto sm:h-6"
            />
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="inline-flex items-center gap-0.5 sm:gap-1">
              {siteConfig.navigation.map((item) => (
                <li key={item.href} className="flex">
                  <a
                    href={item.href}
                    className="group flex w-full min-w-[3.75rem] max-w-[5.5rem] flex-col items-center justify-center gap-0.5 rounded-md px-2.5 py-1.5 text-center transition-[background-color,color] duration-200 hover:bg-sky-100/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500/50 sm:min-w-[4.25rem] sm:px-3 sm:py-2"
                  >
                    <span className="text-[12px] font-semibold leading-tight text-slate-800 transition-colors group-hover:text-[color:var(--color-primary)] sm:text-[13px]">
                      {item.label}
                    </span>
                    <span className="font-mono text-[9px] leading-none tracking-wide text-slate-500 transition-colors group-hover:text-sky-600 sm:text-[10px]">
                      {item.labelEn}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={toggle}
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-md text-[color:var(--color-primary)] transition-colors hover:bg-sky-100/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500/50 md:hidden"
          >
            <span className="sr-only">メニュー</span>
            <span
              aria-hidden
              className={`absolute block h-[2px] w-5 rounded-full bg-current transition-transform duration-300 ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              aria-hidden
              className={`absolute block h-[2px] w-5 rounded-full bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              aria-hidden
              className={`absolute block h-[2px] w-5 rounded-full bg-current transition-transform duration-300 ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="メニュー"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="メニューを閉じる"
          onClick={close}
          className="absolute inset-0 h-full w-full cursor-default bg-[color:var(--color-primary)]/15 backdrop-blur-xl"
        />

        <nav
          aria-label="モバイルメニュー"
          className={`relative flex h-full w-full flex-col items-center justify-center px-6 pt-20 pb-10 transition-transform duration-500 ease-out ${
            isOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <ul className="flex w-full max-w-sm flex-col items-stretch gap-3">
            {siteConfig.navigation.map((item, i) => (
              <li
                key={item.href}
                style={{ transitionDelay: isOpen ? `${80 + i * 60}ms` : "0ms" }}
                className={`transform transition-all duration-500 ease-out ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
              >
                <a
                  href={item.href}
                  onClick={close}
                  className="glass-strong group flex items-baseline justify-between gap-4 rounded-xl px-5 py-4 shadow-[0_6px_24px_rgba(11,61,92,0.08)] transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500/60"
                >
                  <span className="text-2xl font-semibold tracking-wide text-[color:var(--color-primary)]">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-sky-600/80 transition-colors group-hover:text-sky-700">
                    {item.labelEn}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-10 font-mono text-[10px] tracking-[0.3em] text-slate-500/80 uppercase">
            {siteConfig.subtitle}
          </p>
        </nav>
      </div>
    </>
  );
}
