import { Nav } from "@/components/Nav";
import { siteConfig } from "@/lib/config";

export default function PrivacyPage() {
  return (
    <div>
      <Nav />
      <main className="mx-auto max-w-4xl px-4 pt-16 pb-24 text-white/80">
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>

        <p className="mt-6 text-white/70">
          This Privacy Policy describes how {siteConfig.brand.name} (“we,” “our,” “us”) collects and uses information
          when you visit this website.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">Information we collect</h2>
        <ul className="mt-3 list-disc ml-6 text-white/70 space-y-2">
          <li>Information you submit via forms (e.g., name, email, phone, business details).</li>
          <li>Scheduling information submitted via Calendly.</li>
          <li>Basic usage data collected by hosting/analytics tools (if enabled).</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-white">How we use information</h2>
        <ul className="mt-3 list-disc ml-6 text-white/70 space-y-2">
          <li>To respond to inquiries and provide requested services.</li>
          <li>To schedule and confirm calls.</li>
          <li>To improve website performance and customer experience.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-white">Third-party tools</h2>
        <p className="mt-3 text-white/70">
          We may use third-party tools such as Calendly and Tally to process form submissions and scheduling. These tools
          may collect and process your information under their own privacy policies.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">Contact</h2>
        <p className="mt-3 text-white/70">
          Questions? Email us at <span className="text-white">{siteConfig.intakeEmail}</span>.
        </p>
      </main>
    </div>
  );
}