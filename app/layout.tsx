import "./globals.css";

export const metadata = {
  title: "Johnny Love AI — Reactivate. Rebook. Scale.",
  description: "Automation systems that recover revenue you already paid for.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}