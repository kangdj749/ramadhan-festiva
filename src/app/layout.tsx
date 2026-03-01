import "./globals.css"
import type { Metadata } from "next";
import { GlobalToaster } from "@/components/GlobalToaster"
import PromoBanner from "@/components/PromoBanner";

export const metadata: Metadata = {
  title: "Ramadhan Festiva 2026",
  description: "Panggung Terbesar Generasi Muda Muslim Jawa Barat ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        {children}
        <GlobalToaster /> {/* harus ada supaya toast muncul di semua halaman */}
        <PromoBanner/>
      </body>
    </html>
  );
}
