import "./globals.css";
import Script from "next/script";

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
  appId: "912812437820478",
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

      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1119244633637458');
          fbq('track', 'PageView');
        `}
      </Script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1119244633637458&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      {children}

    </body>
  </html>
);