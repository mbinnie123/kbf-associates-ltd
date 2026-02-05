import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-zinc-50/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/kbf-logo.svg"
            alt="KBF Associates Ltd"
            width={140}
            height={36}
            priority
            className="h-9 w-auto"
            style={{ transform: "translate3d(0, 0, 0)" }}
          />
          <span className="sr-only">KBF Associates Ltd</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          <a
            href="#services"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
          >
            Services
          </a>
          <a
            href="#products"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
          >
            Products
          </a>
          <a
            href="#approach"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
          >
            Approach
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}