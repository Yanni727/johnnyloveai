import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { siteConfig } from "@/lib/config";

export default function AboutPage() {
  return (
    <div>
      <Nav />

      <main className="mx-auto max-w-6xl px-4 pt-16 pb-24">
        <section className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm text-white/60">
              {siteConfig.brand.name} • {siteConfig.brand.region}
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Operator-built automation for <span className="neon-blue">contractor revenue</span>.
            </h1>

            <p className="mt-6 text-white/75 text-lg">
              Johnny Love AI builds practical automation frameworks that help HVAC and remodeling companies recover
              missed opportunities, revive old estimates, and convert dormant leads into booked appointments.
            </p>

            <div className="mt-8 grid gap-3 text-sm text-white/75">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 glow-border">
                <div className="font-semibold text-white">What we install</div>
                <div className="mt-1">
                  Follow-up sequences, missed call recovery, lead routing, appointment reminders, and pipeline reactivation.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 glow-border">
                <div className="font-semibold text-white">Why it matters</div>
                <div className="mt-1">
                  Most companies pay to generate leads — then lose money from slow response time and inconsistent follow-up.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 glow-border">
                <div className="font-semibold text-white">The promise</div>
                <div className="mt-1">
                  The <span className="neon-green">{siteConfig.brand.supportMechanism}</span> closes the leak and turns
                  your existing lead flow into consistent booked calls.
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/lead-reactivation"
                className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 glow-border hover:bg-white/10 transition text-center"
              >
                View the Offer
              </Link>
              <Link
                href="/book"
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/10 hover:bg-white/10 transition text-center"
              >
                Book a Call
              </Link>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 glow-border bg-white/5">
            <Image
              src="/brand/headshot.png"
              alt="Johnny Love"
              width={900}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
        </section>
      </main>
    </div>
  );
}