import Image from "next/image";
import { Nav } from "@/components/Nav";
import { siteConfig } from "@/lib/config";

export default function LeadReactivationPage() {
  return (
    <div>
      <Nav />

      <main className="mx-auto max-w-5xl px-4 pt-16 pb-24">
        {/* Hero */}
        <div className="text-center">
          <p className="text-sm text-white/60">{siteConfig.brand.mechanism}</p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Reactivate dormant leads.
            <br />
            <span className="neon-blue">Recover revenue you already paid for.</span>
          </h1>

          <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">
            HVAC and remodeling companies are sitting on unworked leads and missed calls.
            We install automated follow-up systems that revive them and convert them into booked appointments.
          </p>
        </div>

        {/* Mechanism blocks */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Database Reactivation",
              desc: "SMS + email sequences that re-engage cold leads automatically.",
            },
            {
              title: "Missed Call Recovery",
              desc: "Instant text-back automation so no inbound opportunity dies.",
            },
            {
              title: "Pipeline Resurrection",
              desc: "Revive old estimates and stalled jobs back into conversation.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 glow-border"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-white/75">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Credibility block */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 glow-border bg-white/5">
            <Image
              src="/brand/headshot.png"
              alt="Johnny Love"
              width={700}
              height={700}
              className="w-full h-auto"
              priority
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Built for Florida HVAC + remodeling companies.
            </h2>

            <p className="mt-4 text-white/75">
              The <span className="neon-green">{siteConfig.brand.supportMechanism}</span> installs
              structured follow-up that turns missed calls, old estimates, and dormant leads into booked
              appointments — automatically.
            </p>

            <p className="mt-4 text-white/75">
              If you’re spending on ads, referrals, or lead vendors, but your follow-up is inconsistent,
              this closes the revenue leak.
            </p>
          </div>
        </div>

        {/* CTA + Tally form */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold">
            Install the {siteConfig.brand.mechanism}
          </h2>

          <p className="mt-4 text-white/70">{siteConfig.brand.region} Deployment Option</p>

          <div className="mt-8 max-w-3xl mx-auto rounded-3xl overflow-hidden border border-white/10 glow-border">
            <iframe
              src={siteConfig.intakeEmbedUrl}
              width="100%"
              height="650"
              frameBorder="0"
              className="bg-white"
            />
          </div>

          <p className="mt-4 text-xs text-white/55">
            Form submissions notify: {siteConfig.intakeEmail}
          </p>
        </div>
      </main>
    </div>
  );
}