import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PL da Dosimetria - Votação dos Deputados",
  description: "Acompanhe como cada deputado federal votou na PL 1459/2022 (PL da Dosimetria). Pesquise e filtre por nome, partido, estado e voto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
