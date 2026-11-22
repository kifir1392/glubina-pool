import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Глубина | Инжиниринг и строительство бассейнов в Краснодаре",
  description: "Проектирование, гидравлические расчеты и строительство бассейнов под ключ. Инженерный подход и премиальный дизайн.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}