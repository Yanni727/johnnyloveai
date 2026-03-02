import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

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
    images: ["/og-image.png"], // use relative + metadataBase
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Johnny Love AI — Reactivate. Rebook. Scale.",
    description: "Automation systems that recover revenue you already paid for.",
    images: ["/og-image.png"],
  },

  // ✅ This is the reliable way to get fb:app_id into <meta property="fb:app_id" ... />
  other: {
    "fb:app_id": "912812437820478",
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
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}