import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function HomePage() {
  return (
    <div>
      <Nav />

      <main className="mx-auto max-w-6xl px-4">
        <section className="pt-12 pb-10 md:pt-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-white/70 text-sm">Johnny Love AI • Florida-First</p>

              <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                <span className="neon-blue">Automation systems</span>{" "}
                that recover revenue you already paid for.
              </h1>

              <p className="mt-4 text-white/75 text-lg">
                We install automation that revives missed calls, reactivates old leads, and turns dormant pipelines into booked appointments.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/lead-reactivation"
                  className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 glow-border hover:bg-white/10 transition text-center"
                >
                  See Lead Reactivation Offer
                </Link>
                <Link
                  href="/book"
                  className="px-5 py-3 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/10 hover:bg-white/10 transition text-center"
                >
                  Book a Call to Qualify
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-white/70">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">Lead Recovery</div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">Booking</div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">Ops Automation</div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-white/10 glow-border bg-white/5">
              <div className="absolute inset-0 grid-hud opacity-40" />
              <Image
                src="/brand/banner.png"
                alt="Johnny Love AI banner"
                width={1200}
                height={700}
                className="relative w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Lead Reactivation",
                desc: "Turn old leads + missed calls into booked calls automatically.",
                href: "/lead-reactivation",
              },
              {
                title: "Inbound Capture",
                desc: "Forms, routing, follow-up sequences, pipeline handoff.",
                href: "/book",
              },
              {
                title: "Ops Automation",
                desc: "Reduce admin time: scheduling, updates, reminders, reporting.",
                href: "/book",
              },
            ].map((c) => (
              <div key={c.title} className="p-6 rounded-3xl bg-white/5 border border-white/10 glow-border">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-white/75">{c.desc}</p>
                <Link className="mt-4 inline-block text-sm text-white hover:underline" href={c.href}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Johnny Love AI •{" "}
        <Link className="hover:underline" href="/privacy">Privacy</Link> •{" "}
        <Link className="hover:underline" href="/terms">Terms</Link>
      </footer>
    </div>
  );
}