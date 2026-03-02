import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.johnnyloveai.com"),
  title: "Johnny Love AI — Reactivate. Rebook. Scale.",
  description: "Automation systems that recover revenue you already paid for.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://www.johnnyloveai.com/",
  },
  openGraph: {
    title: "Johnny Love AI — Reactivate. Rebook. Scale.",
    description: "Automation systems that recover revenue you already paid for.",
    url: "https://www.johnnyloveai.com/",
    siteName: "Johnny Love AI",
    images: ["https://www.johnnyloveai.com/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johnny Love AI — Reactivate. Rebook. Scale.",
    description: "Automation systems that recover revenue you already paid for.",
    images: ["https://www.johnnyloveai.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}