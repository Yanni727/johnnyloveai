import { Nav } from "@/components/Nav";
import { siteConfig } from "@/lib/config";

export default function TermsPage() {
  return (
    <div>
      <Nav />
      <main className="mx-auto max-w-4xl px-4 pt-16 pb-24 text-white/80">
        <h1 className="text-3xl font-semibold">Terms of Service</h1>

        <p className="mt-6 text-white/70">
          These Terms govern your use of this website and services provided by {siteConfig.brand.name}. By using this
          website, you agree to these Terms.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">Use of website</h2>
        <p className="mt-3 text-white/70">
          You agree not to misuse the website, attempt unauthorized access, or disrupt normal operation.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">No guarantees</h2>
        <p className="mt-3 text-white/70">
          Results may vary by business. We do not guarantee specific revenue outcomes.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">Limitation of liability</h2>
        <p className="mt-3 text-white/70">
          To the maximum extent permitted by law, {siteConfig.brand.name} is not liable for damages arising from use of
          this website or services.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">Changes</h2>
        <p className="mt-3 text-white/70">
          We may update these Terms at any time. Continued use of the website indicates acceptance of the updated Terms.
        </p>
      </main>
    </div>
  );
}