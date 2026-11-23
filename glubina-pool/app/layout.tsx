import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Глубина | Бассейны без компромиссов в Краснодаре",
  description:
    "Инженерный подход к каждому проекту. Точные расчёты, проверенное оборудование, гарантия 5 лет. Проектирование и строительство бассейнов под ключ. Краснодар и юг России.",
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