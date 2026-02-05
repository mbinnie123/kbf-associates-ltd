// @ts-nocheck
"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import boardroomBg from "./assets/boardroom-financial-services.png";

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const panels = useMemo(
    () => [
      {
        key: "wealth",
        strapline: "Bespoke wealth management • Retirement planning • Protection • Clear advice • Tailored plans • Long-term support",
        title: "Welcome to KBF Associates Ltd",
        logoAlt: "KBF Associates Ltd logo",
        body: [
          "At KBF Associates Ltd, we provide bespoke wealth management advice to private and corporate clients. Our approachable, friendly team of professional advisers, supported by an experienced support team, offers a truly personal service focused on you.",
          "If you want a trusted partner to help you plan ahead and stay on track, we’d love to talk.",
        ],
        ctas: [
          { href: "#contact", label: "Get a proposal", primary: true },
          { href: "#services", label: "Explore services", primary: false },
        ],
        expectTitle: "What you can expect",
        expectSubtitle:
          "A clear plan, measurable progress and a steady pace from week one.",
        expectItems: [
          {
            title: "Clarity on what matters now",
            desc: "Align on priorities, what’s changing, and where to focus effort for the best outcomes.",
          },
          {
            title: "A delivery roadmap that stands up to scrutiny",
            desc: "Turn intent into sequenced, owned work — with governance and evidence built in.",
          },
          {
            title: "Controls that hold up in practice",
            desc: "Design, remediate and embed controls so progress continues after handover.",
          },
        ],
        quickTitle: "Quick start",
        quickBody:
          "Share your goals — we’ll reply with a short plan, risks to watch, and next steps.",
        quickLink: "Start the conversation",
      },
      {
        key: "retirement",
        badgeLeft: "Plan your retirement",
        badgeRight: "Cashflow planning • Income strategy • Pension reviews",
        strapline: "Confidence in the timeline • Options explained • Simple next steps",
        title: "Retirement, made clear",
        logoAlt: "KBF Associates Ltd logo",
        body: [
          "We’ll help you understand what you have, what you need, and how to close any gaps — with a plan you can act on.",
          "Expect straight answers, scenario modelling, and regular check-ins as life changes.",
        ],
        ctas: [
          { href: "#contact", label: "Request a retirement review", primary: true },
          { href: "#services", label: "See retirement planning", primary: false },
        ],
        expectTitle: "What we’ll build with you",
        expectSubtitle: "A retirement plan that’s realistic, flexible, and measurable.",
        expectItems: [
          {
            title: "Your retirement number & timeline",
            desc: "Translate goals into an income target and a practical timeline — with assumptions made explicit.",
          },
          {
            title: "A clear income strategy",
            desc: "Explore drawdown options, tax considerations, and sustainable withdrawal ranges.",
          },
          {
            title: "A review rhythm that keeps you on track",
            desc: "Checkpoints to adjust contributions, investments, and risk as markets and life evolve.",
          },
        ],
        quickTitle: "Quick start",
        quickBody:
          "Send your rough retirement goal and current pensions — we’ll outline scenarios and the next best moves.",
        quickLink: "Get started",
      },
      {
        key: "protection",
        badgeLeft: "Protect what matters",
        badgeRight: "Life cover • Income protection • Business protection",
        strapline: "Right-sized cover • Clear trade-offs • Peace of mind",
        title: "Protection without the hassle",
        logoAlt: "KBF Associates Ltd logo",
        body: [
          "We’ll help you put the right cover in place to protect your family, lifestyle, and business — without overcomplicating it.",
          "We focus on outcomes, budget, and what you actually need — then keep it reviewed.",
        ],
        ctas: [
          { href: "#contact", label: "Discuss protection", primary: true },
          { href: "#services", label: "Explore protection", primary: false },
        ],
        expectTitle: "What you can expect",
        expectSubtitle: "Simple recommendations you can understand and defend.",
        expectItems: [
          {
            title: "A needs-based cover check",
            desc: "Identify what to protect and for how long — with a clear rationale.",
          },
          {
            title: "Coverage that fits your budget",
            desc: "Make trade-offs visible so you can choose cover levels confidently.",
          },
          {
            title: "A plan that stays current",
            desc: "Review points after life events (new home, children, business changes) so cover keeps pace.",
          },
        ],
        quickTitle: "Quick start",
        quickBody:
          "Tell us what you want to protect and your monthly budget — we’ll suggest sensible options and next steps.",
        quickLink: "Start a protection check",
      },
    ],
    []
  );

  const pinnedRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  // Parallax state/refs
  const [parallaxY, setParallaxY] = useState(0);
  const parallaxYRef = useRef(0);
  const parallaxRafRef = useRef<number | null>(null);

  const clamp = (n: number, min: number, max: number) =>
    Math.min(Math.max(n, min), max);

  const scheduleParallaxCommit = () => {
    if (parallaxRafRef.current != null) return;
    parallaxRafRef.current = window.requestAnimationFrame(() => {
      parallaxRafRef.current = null;
      setParallaxY(parallaxYRef.current);
    });
  };

  useEffect(() => {
    const el = pinnedRef.current;
    if (!el) return;

    // Smooth, scroll-driven progress through the pinned section.
    // No scroll locking / preventDefault (those cause the "snap" jumps).
    const onScroll = () => {
      const vh = window.innerHeight || 1;
      const rect = el.getBoundingClientRect();
      const pageY = window.scrollY || window.pageYOffset || 0;
      const top = rect.top + pageY;
      const total = Math.max(1, el.offsetHeight - vh);

      // progress 0..1 while the pinned section scrolls past the viewport
      const raw = (pageY - top) / total;
      const progress = clamp(raw, 0, 1);

      // drive panel changes from scroll progress (snaps to nearest panel, but scroll remains smooth)
      const idx = Math.round(progress * (panels.length - 1));
      if (idx !== activeRef.current) {
        activeRef.current = idx;
        setActive(idx);
      }

      // parallax driven by scroll progress (smooth)
      // negative moves bg up as you scroll down; tweak range to taste
      const range = 180;
      parallaxYRef.current = (progress - 0.5) * -2 * range;
      scheduleParallaxCommit();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (parallaxRafRef.current != null) {
        window.cancelAnimationFrame(parallaxRafRef.current);
        parallaxRafRef.current = null;
      }
    };
  }, [panels.length]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased dark:bg-black dark:text-zinc-50">
      {/* Header */}
      <Header />

      {/* Hero (sticky scroll-driven) */}
      <main className="-mt-[4.5rem]">
<section
  ref={(node) => {
    pinnedRef.current = node;
  }}
  className="relative h-auto md:h-[var(--section-height)]"
  style={{ "--section-height": `${panels.length * 100}vh` } as React.CSSProperties}
>
  <div className="relative h-auto overflow-hidden md:sticky md:top-0 md:h-[100svh]">
    {/* Background layers */}
    <div className="absolute inset-0 z-0">
      {/* Soft glow accents */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-zinc-200/60 blur-3xl dark:bg-white/10" />
        <div className="absolute -bottom-32 right-0 h-72 w-[36rem] rounded-full bg-zinc-200/60 blur-3xl dark:bg-white/10" />
      </div>

      {/* Boardroom background image (parallax) */}
      <div
        className="absolute -top-[300px] -bottom-[300px] left-0 right-0"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <Image
          src={boardroomBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.18] dark:opacity-[0.12]"
        />
      </div>

      {/* Logo watermark (slower parallax) */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${parallaxY * 0.5}px)` }}
      >
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.2] dark:opacity-[0.08] sm:h-[44rem] sm:w-[44rem] md:h-[56rem] md:w-[56rem] lg:h-[68rem] lg:w-[68rem]">
          <Image src="/kbf-logo.svg" alt="" fill className="object-contain" />
        </div>
      </div>
    </div>

    {/* Content Panels */}
    <div className="relative z-10 h-full w-full flex flex-col md:block">
      {panels.map((p, i) => (
        <div
          key={p.key}
          className={`relative flex h-auto w-full items-center justify-center md:absolute md:inset-0 md:h-full md:items-end transition-all duration-700 ease-in-out ${
            active === i 
              ? "md:opacity-100 md:translate-y-0 md:z-10 md:pointer-events-auto"
              : "md:opacity-0 md:translate-y-8 md:z-0 md:pointer-events-none"
          } opacity-100 translate-y-0 z-10 pointer-events-auto`}
        >
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-32 pb-24 md:grid-cols-2 md:py-16">
            {/* LEFT: active panel */}
              <div className="relative">
                <div className="relative">
                  {p.badgeLeft?.trim() || p.badgeRight?.trim() ? (
                    <div className="mb-6 inline-flex items-center rounded-2xl border border-[#BB992C]/40 bg-white/40 px-5 py-4 shadow-sm backdrop-blur-sm dark:border-white/8 dark:bg-white/2">
                      {p.badgeLeft?.trim() ? (
                        <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
                          {p.badgeLeft}
                        </span>
                      ) : null}
                      {p.badgeLeft?.trim() && p.badgeRight?.trim() ? (
                        <span className="mx-3 h-4 w-px bg-zinc-200 dark:bg-white/10" />
                      ) : null}
                      {p.badgeRight?.trim() ? (
                        <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                          {p.badgeRight}
                        </span>
                      ) : null}
                    </div>
                  ) : null}

                  <p className="inline-flex items-center gap-2 rounded-full border border-[#BB992C]/40 bg-white/40 px-4 py-2 text-xs font-semibold text-zinc-700 shadow-sm backdrop-blur-md dark:border-[#BB992C]/35 dark:bg-white/5 dark:text-zinc-200">
                    {p.strapline}
                  </p>

                  <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
                    <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                      {p.title}
                    </h1>
                    <Image
                      src="/kbf-associates-ltd-logo.svg"
                      alt={p.logoAlt}
                      width={220}
                      height={70}
                      className="h-auto w-36 sm:w-40"
                      priority={i === 0}
                    />
                  </div>

                  <div className="mt-5 max-w-xl space-y-4 text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
                    {p.body.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    {p.ctas.map((c) => (
                      <a
                        key={c.href + c.label}
                        href={c.href}
                        className={
                          c.primary
                            ? "inline-flex h-11 items-center justify-center rounded-full bg-[#BB992C] px-6 text-sm font-semibold text-black shadow-sm transition hover:bg-[#A88522] dark:text-black"
                            : "inline-flex h-11 items-center justify-center rounded-full border border-[#BB992C] bg-white px-6 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-[#BB992C]/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                        }
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>

                  {i === 0 ? (
                    <div className="mt-8 text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                      Scroll to continue <span aria-hidden="true">↓</span>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* RIGHT: active panel card */}
              <div className="relative">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 shadow-sm backdrop-blur dark:border-white/40 dark:bg-white/40">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-zinc-900/10 dark:bg-white/10" />
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                        {p.expectTitle}
                      </p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        {p.expectSubtitle}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {p.expectItems.map((it) => (
                      <li key={it.title} className="flex gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#BB992C] text-black">
                          ✓
                        </span>
                        <div>
                          <p className="text-sm font-semibold">{it.title}</p>
                          <p className="text-sm text-zinc-600 dark:text-zinc-300">
                            {it.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 rounded-2xl bg-white/45 p-5 text-sm text-zinc-700 backdrop-blur-md dark:bg-black/40 dark:text-zinc-200">
                    <p className="font-semibold text-zinc-900 dark:text-white">
                      {p.quickTitle}
                    </p>
                    <p className="mt-1">{p.quickBody}</p>
                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center gap-2 font-semibold text-[#BB992C] hover:underline"
                    >
                      {p.quickLink} <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Services */}
        <section id="services" className="scroll-mt-24 relative bg-zinc-50 dark:bg-black py-16 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="flex flex-col gap-16 md:flex-row md:items-start">
              {/* Sticky Left Content */}
              <div className="md:sticky md:top-32 md:w-1/2 self-start">
                <FadeIn>
                  <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                    Services
                 </h2>
                  <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                    Clear, practical advice across wealth management, retirement planning and protection — built around your goals and reviewed as life changes.
                  </p>
                  <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                    Whether you’re building wealth, protecting what you’ve worked for, planning for retirement, or aligning personal and business finances, we’ll help you make confident decisions with a tailored plan and long‑term support.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="#contact"
                      className="inline-flex h-11 items-center justify-center rounded-full bg-[#BB992C] px-6 text-sm font-semibold text-black shadow-sm transition hover:bg-[#A88522]"
                    >
                      Request a proposal
                    </a>
                    <a
                      href="#approach"
                      className="inline-flex h-11 items-center justify-center rounded-full border border-[#BB992C] bg-white px-6 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-[#BB992C]/10 dark:bg-white/5 dark:text-white dark:hover:bg:white/10"
                    >
                      How we work
                    </a>
                  </div>

                  <dl className="mt-10 grid grid-cols-3 gap-4">
                    <div className="rounded-2xl border border-zinc-200 bg-white/50 p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                      <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Focus</dt>
                      <dd className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">Your goals</dd>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white/50 p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                      <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Approach</dt>
                      <dd className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">Clear & calm</dd>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white/50 p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                      <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Support</dt>
                      <dd className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">Long‑term</dd>
                    </div>
                  </dl>
                </FadeIn>
              </div>

              {/* Scrollable Right Cards */}
              <div className="flex flex-col gap-8 md:w-1/2 md:pt-20">
                <FadeIn delay={100}>
                  <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
                    <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">Bespoke wealth management</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      A structured plan for investing and growing wealth — aligned to your time horizon, risk comfort and priorities.
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
                      <li className="flex gap-2"><span className="text-[#BB992C]">✓</span> Goal-based planning and portfolio guidance</li>
                      <li className="flex gap-2"><span className="text-[#BB992C]">✓</span> Ongoing reviews and adjustments</li>
                      <li className="flex gap-2"><span className="text-[#BB992C]">✓</span> Tax-aware planning alongside your wider finances</li>
                    </ul>
                  </div>
                </FadeIn>

                <FadeIn delay={200}>
                  <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
                    <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">Retirement planning</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      Build confidence in your retirement timeline, income plan and options — with clear next steps.
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
                      <li className="flex gap-2"><span className="text-[#BB992C]">✓</span> Pension and retirement income planning</li>
                      <li className="flex gap-2"><span className="text-[#BB992C]">✓</span> Scenario modelling and cashflow planning</li>
                      <li className="flex gap-2"><span className="text-[#BB992C]">✓</span> Consolidation and contribution strategy</li>
                    </ul>
                  </div>
                </FadeIn>

                <FadeIn delay={300}>
                  <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
                    <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">Protection</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      Put the right cover in place to protect your family, lifestyle and business — without overcomplicating it.
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
                      <li className="flex gap-2"><span className="text-[#BB992C]">✓</span> Life cover and critical illness protection</li>
                      <li className="flex gap-2"><span className="text-[#BB992C]">✓</span> Income protection and family security</li>
                      <li className="flex gap-2"><span className="text-[#BB992C]">✓</span> Business protection and key person cover</li>
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="scroll-mt-24 relative border-y border-zinc-200/70 bg-white/70 dark:border-white/10 dark:bg-white/5 py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
             <div className="flex flex-col gap-16 md:flex-row md:items-start">
              <div className="md:sticky md:top-32 md:w-1/2 self-start">
                <FadeIn>
                  <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">A simple, effective approach</h2>
                  <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                    We keep things clear and actionable. Every engagement is designed to deliver value quickly — and to leave your team more confident and capable.
                  </p>
                </FadeIn>
              </div>

             <div className="flex flex-col gap-12 md:w-1/2 md:pt-20">
                <FadeIn delay={100}>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 h-full w-px bg-zinc-200 dark:bg-white/10"></div>
                    <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-[#BB992C]"></div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">1. Understand</h3>
                    <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
                      A focused discovery to map objectives, constraints, and reality. We listen before we advise, ensuring we solve the right problem.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={200}>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 h-full w-px bg-zinc-200 dark:bg-white/10"></div>
                    <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-[#BB992C]"></div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">2. Design</h3>
                    <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
                      A practical plan with owners, timelines, and clear measures. We build solutions that fit your business, not generic templates.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={300}>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-full w-px bg-zinc-200 dark:bg-white/10"></div>
                    <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-[#BB992C]"></div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">3. Deliver</h3>
                    <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
                      Hands-on support to land improvements and embed ways of working. We stay until the job is done and the results are visible.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 mx-auto w-full max-w-6xl px-6 py-16">
          <FadeIn>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">About KBF Associates Ltd</h2>
                <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  We work with financial services leaders who want clarity, traction and lasting improvements. If you’re navigating regulatory change, launching a programme or strengthening controls — we can help.
                </p>
                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  Our style is calm, structured, and transparent: no jargon, no fluff — just progress that stands up to scrutiny.
                </p>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
                <h3 className="text-base font-semibold">Ideal for</h3>
                <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
                  <li>• Teams delivering regulatory or risk change</li>
                  <li>• Organisations strengthening controls and MI</li>
                  <li>• Leaders preparing stakeholders and regulators for change</li>
                </ul>
                <div className="mt-8 rounded-2xl bg-zinc-50 p-5 dark:bg-black/40">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">Prefer to start small?</p>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                    Ask for a short discovery session — we&apos;ll recommend next steps, likely risks, and whether we&apos;re a good fit.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 mx-auto w-full max-w-6xl px-6 pb-20">
          <FadeIn>
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5 md:p-10">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">Let&apos;s talk</h2>
                  <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                    Tell us what you’re trying to achieve. We’ll respond with a short plan, likely risks to watch and the next best steps — with an honest view on what it will take.
                  </p>

                  <dl className="mt-8 space-y-4 text-sm">
                    <div>
                      <dt className="font-semibold text-zinc-900 dark:text-white">Email</dt>
                      <dd className="text-zinc-600 dark:text-zinc-300">hello@kbfassociatesltd.co.uk</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-zinc-900 dark:text-white">Based in</dt>
                      <dd className="text-zinc-600 dark:text-zinc-300">United Kingdom</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-zinc-900 dark:text-white">Response time</dt>
                      <dd className="text-zinc-600 dark:text-zinc-300">Typically within 1–2 working days (UK time)</dd>
                    </div>
                  </dl>
                </div>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-semibold">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="mt-2 h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none ring-0 transition focus:border-zinc-400 dark:border-white/10 dark:bg-black/30 dark:focus:border-white/30"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-semibold">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="mt-2 h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none ring-0 transition focus:border-zinc-400 dark:border-white/10 dark:bg-black/30 dark:focus:border-white/30"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-semibold">
                      What do you need help with?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="mt-2 w-full resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-zinc-400 dark:border-white/10 dark:bg-black/30 dark:focus:border-white/30"
                      placeholder="A few lines is perfect — goals, timelines, constraints."
                    />
                  </div>

                  <button
                    type="button"
                    className="inline-flex h-11 w-full items-center justify-center rounded-full bg-[#BB992C] px-6 text-sm font-semibold text-black shadow-sm transition hover:bg-[#A88522]"
                  >
                    Send enquiry
                  </button>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    This form is currently a design placeholder. Wire it up to email (e.g. Resend) or a CRM when you&apos;re ready.
                  </p>
                </form>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>


      {/* Footer */}
      <Footer />
    </div>
  );
}
