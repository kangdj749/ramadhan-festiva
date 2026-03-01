"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { cloudinaryImage } from "@/lib/cloudinaryImage"

export default function HeroSection() {
  const [registrasiLink, setRegistrasiLink] = useState("/registrasi")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const fundriserFromLink = urlParams.get("fundriser")

      if (fundriserFromLink) {
        localStorage.setItem("fundriser", fundriserFromLink)
        setRegistrasiLink(`/registrasi?fundriser=${encodeURIComponent(fundriserFromLink)}`)
      } else {
        const stored = localStorage.getItem("fundriser")
        if (stored) {
          setRegistrasiLink(`/registrasi?fundriser=${encodeURIComponent(stored)}`)
        }
      }
    }
  }, [])

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={cloudinaryImage(
            "https://res.cloudinary.com/de7fqcvpf/image/upload/v1772197330/Masjid-al-jabbar2_ptlpcm.jpg",
            "lcp"
          )}
          alt="Ramadhan Festiva 2026 - Masjid Raya Al Jabbar"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Brand Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#032b83]/90 via-[#032b83]/80 to-[#032b83]/95" />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative w-full max-w-[1050px] px-6 md:px-8 text-center text-white"
      >
        <div className="space-y-6">

          {/* Title */}
          <motion.h1
            variants={item}
            className="font-semibold leading-tight tracking-tight text-[clamp(2rem,4vw,2.8rem)]"
          >
            Ramadhan Festiva 2026
          </motion.h1>

          {/* Highlight */}
          <motion.p
            variants={item}
            className="text-[clamp(1rem,2.3vw,1.2rem)] font-medium tracking-wide text-[#d6f605]"
          >
            Panggung Prestasi & Inspirasi Generasi Muda Muslim Jawa Barat
          </motion.p>

          {/* Event Info */}
          <motion.p
            variants={item}
            className="text-sm md:text-base text-white/85 leading-relaxed max-w-2xl mx-auto"
          >
            Kompetisi Islami • Youth Talkshow • Education Fair • Santunan Yatim
            <span className="block mt-2 text-white/75">
              7–8 Maret 2026 | Masjid Raya Al Jabbar, Bandung
            </span>
          </motion.p>

          {/* Supporting */}
          <motion.p
            variants={item}
            className="text-sm text-white/70 max-w-xl mx-auto leading-relaxed"
          >
            Dua hari penuh makna untuk mengasah potensi,
            membangun visi masa depan,
            dan menjadi bagian dari gerakan kebaikan di bulan Ramadhan.
          </motion.p>

          {/* BONUS BOX */}
          <motion.div
            variants={item}
            className="mx-auto mt-4 max-w-md rounded-2xl border border-[#d6f605]/40 bg-white/10 backdrop-blur-md px-5 py-4 shadow-[0_0_25px_rgba(214,246,5,0.15)]"
          >
            <p className="text-sm font-semibold tracking-wide text-[#d6f605]">
              🎁 BONUS SPESIAL PESERTA
            </p>
            <p className="text-sm text-white mt-1">
              Gratis Kacamata untuk <span className="font-semibold text-[#d6f605]">1000 pendaftar pertama</span>
            </p>
            <p className="text-xs text-white/60 mt-1">
              Kuota terbatas selama persediaan masih ada.
            </p>
          </motion.div>

          {/* Urgency */}
          <motion.p
            variants={item}
            className="text-xs text-white/60 pt-2"
          >
            Slot peserta terbatas. Amankan tempatmu sekarang.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-3 justify-center pt-3"
          >
            <Button
              asChild
              className="bg-[#d6f605] hover:bg-lime-300 text-[#032b83] font-semibold px-6 py-3 rounded-xl text-sm md:text-base transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <a href={registrasiLink}>Daftar Lomba Sekarang</a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 px-6 py-3 rounded-xl text-sm md:text-base"
            >
              <a href="#detail">Lihat Detail Kegiatan</a>
            </Button>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}