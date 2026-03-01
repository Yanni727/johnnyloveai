import "./globals.css";

export const metadata = {
  title: "Johnny Love AI — Reactivate. Rebook. Scale.",
  description: "Automation systems that recover revenue you already paid for.",
  icons: {
  icon: "/favicon.png",
  apple: "/apple-touch-icon.png",
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