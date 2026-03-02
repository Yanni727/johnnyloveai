import "./globals.css";

export const metadata = {
  title: "Johnny Love AI — Reactivate. Rebook. Scale.",
  description:
    "Automation systems that recover revenue you already paid for.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Johnny Love AI — Reactivate. Rebook. Scale.",
    description:
      "Automation systems that recover revenue you already paid for.",
    url: "https://johnnyloveai.com",
    siteName: "Johnny Love AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johnny Love AI — Reactivate. Rebook. Scale.",
    description:
      "Automation systems that recover revenue you already paid for.",
    images: ["/og-image.png"],
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