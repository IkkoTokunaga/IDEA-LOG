import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-2 pt-2.5 sm:px-3 sm:pt-3">
      <div className="glass flex w-full max-w-5xl items-center justify-between gap-2.5 sm:gap-3 rounded-lg px-2 py-3 sm:px-3 sm:py-3.5 shadow-[0_2px_16px_rgba(11,61,92,0.05)]">
        <Link
          href="#top"
          className="inline-flex shrink-0 items-center leading-none transition-opacity hover:opacity-90"
          aria-label="トップへ"
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
      </div>
    </header>
  );
}
