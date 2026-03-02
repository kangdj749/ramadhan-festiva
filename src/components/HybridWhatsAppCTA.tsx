"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"


export default function RamadhanWhatsAppCTA() {
  const whatsappNumber = "6281322817712" // ganti jika perlu
  const [waLink, setWaLink] = useState<string>("")

  useEffect(() => {
    const defaultMessage = `
Assalamu'alaikum 🌙

Saya ingin bertanya / mendaftar di event *Ramadhan Festiva 2026*.

Mohon informasi lebih lanjut ya kak 🙏
    `.trim()

    setWaLink(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        defaultMessage
      )}`
    )
  }, [])

  if (!waLink) return null

  return (
    <>
      {/* ================= MOBILE PREMIUM STICKY ================= */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      >
        <div className="relative backdrop-blur-xl bg-[#032b83]/95 border-t border-[#d6f605]/20 px-4 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.35)] rounded-t-2xl flex items-center justify-between">

          {/* subtle glow line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-[#d6f605]/60 blur-sm" />

          <span className="text-xs font-medium tracking-wide text-white">
            🌙 Konsultasi & Registrasi
          </span>

          <button
            className="relative bg-[#d6f605] text-[#032b83] font-semibold rounded-xl px-4 py-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(214,246,5,0.5)]"
          >
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </button>
        </div>
      </motion.div>

      {/* ================= DESKTOP LUXURY FLOAT ================= */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-3"
      >
        {/* Floating Label */}
        <div className="bg-white/90 backdrop-blur-md text-[#032b83] text-xs font-medium px-4 py-2 rounded-full shadow-lg border border-[#032b83]/10">
          Hubungi Panitia
        </div>

        {/* Button with glow halo */}
        <motion.a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="relative"
        >
          {/* soft pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#d6f605]/40 blur-xl animate-pulse" />

          <div className="relative bg-[#032b83] text-[#d6f605] w-16 h-16 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.35)] border border-[#d6f605]/30 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.45)]">
            <MessageCircle className="w-7 h-7" />
          </div>
        </motion.a>
      </motion.div>
    </>
  )
}