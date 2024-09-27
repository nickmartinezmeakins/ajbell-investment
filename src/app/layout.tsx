import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="antialiased py-10 bg-[#f4f4f4]" >
        <div className="container mx-auto">
        {children}
        </div>
      </div>
  );
}
