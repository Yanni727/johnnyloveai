import Link from "next/link";
import { Nav } from "@/components/Nav";
import { siteConfig } from "@/lib/config";

export default function BookPage() {
  return (
    <div>
      <Nav />

      <main className="mx-auto max-w-6xl px-4 pt-14 pb-20">
        {/* Header */}
        <section className="text-center">
          <p className="text-sm text-white/60">
            {siteConfig.brand.mechanism} • {siteConfig.brand.region}
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Book a Call to <span className="neon-blue">Qualify</span>
          </h1>

          <p className="mt-5 text-white/75 text-lg max-w-2xl mx-auto">
            We’ll confirm fit, identify your biggest revenue leaks, and outline the fastest deployment path for the{" "}
            <span className="neon-green">{siteConfig.brand.supportMechanism}</span>.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/lead-reactivation"
              className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 glow-border hover:bg-white/10 transition text-center"
            >
              View the Offer Page
            </Link>
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/10 hover:bg-white/10 transition text-center"
            >
              Open Calendly in New Tab
            </a>
          </div>
        </section>

        {/* Two-column embed grid */}
        <section className="mt-12 grid lg:grid-cols-2 gap-6 items-start">
          {/* Calendly */}
          <div className="rounded-3xl overflow-hidden border border-white/10 glow-border bg-white/5">
            <div className="p-5 border-b border-white/10">
              <div className="font-semibold">Step 1 — Pick a time</div>
              <div className="text-sm text-white/70">
                Instant confirmation. If you can’t find a time, submit the intake form and we’ll reach out.
              </div>
            </div>

            <div className="h-[820px] bg-black/20">
              <iframe
                title="Calendly Booking"
                src={siteConfig.calendlyUrl}
                className="w-full h-full"
                frameBorder="0"
              />
            </div>
          </div>

          {/* Intake Form */}
          <div className="rounded-3xl overflow-hidden border border-white/10 glow-border bg-white/5">
            <div className="p-5 border-b border-white/10">
              <div className="font-semibold">Step 2 — Quick intake</div>
              <div className="text-sm text-white/70">
                Goes to <span className="text-white">{siteConfig.intakeEmail}</span>
              </div>
            </div>

            <div className="h-[820px] bg-black/20">
              <iframe
                title="Intake Form"
                src={siteConfig.intakeEmbedUrl}
                className="w-full h-full bg-white"
                frameBorder="0"
              />
            </div>
          </div>
        </section>

        {/* Bottom reassurance */}
        <section className="mt-10 text-center text-sm text-white/60">
          Prefer to start with the offer details?{" "}
          <Link href="/lead-reactivation" className="text-white hover:underline">
            Go to Lead Reactivation →
          </Link>
        </section>
      </main>
    </div>
  );
}