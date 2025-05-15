import "./globals.css";

export const metadata = {
  title: "Lucas Toro - Portfolio",
  description: "Portfolio de Lucas Toro, artista visual, escritor y músico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body style={{ fontFamily: 'Garamond, serif', background: '#fff', color: '#171717' }}>
        {children}
      </body>
    </html>
  );
}
