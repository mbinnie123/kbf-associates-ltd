import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 bg-zinc-50 dark:border-white/10 dark:bg-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/kbf-logo.svg"
            alt="KBF Associates Ltd"
            width={120}
            height={32}
            className="h-8 w-auto opacity-90"
          />
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            Consulting • Delivery • Improvement
          </p>
        </div>

        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} KBF Associates Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}