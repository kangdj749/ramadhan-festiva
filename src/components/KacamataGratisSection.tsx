"use client"

import { motion } from "framer-motion"

export default function KacamataGratisSection() {
  return (
    <section className="relative w-full py-16 px-4 overflow-hidden">

      {/* Subtle Ramadhan Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-100/40 via-amber-100/30 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-[1020px] mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs tracking-widest uppercase text-gray-500 mb-3"
        >
          Program Spesial untuk Orang Tua Peserta
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
              1.000 Kacamata Baca GRATIS
              <span className="block text-gray-700 text-lg md:text-xl font-medium mt-1">
                untuk Orang Tua Peserta Ramadhan Festiva
              </span>
            </h2>

            <p className="mt-5 text-sm md:text-base text-gray-600 leading-relaxed">
              Sebagai bentuk kepedulian terhadap kesehatan mata orang tua,
              Ramadhan Festiva menghadirkan program pembagian kacamata baca
              gratis dengan ukuran +1 hingga +2.5.
            </p>

            {/* Compact Highlight */}
            <div className="mt-5 inline-flex items-center gap-3 bg-white/70 backdrop-blur border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm">
              <span className="font-medium">+1.0</span>
              <span className="font-medium">+1.5</span>
              <span className="font-medium">+2.0</span>
              <span className="font-medium">+2.5</span>
              <span className="text-gray-400">|</span>
              <span className="font-semibold text-gray-900">
                Kuota 1.000 pcs
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-gray-600 leading-relaxed">
              <li>
                • Orang tua siswa peserta Ramadhan Festiva (7–8 Maret 2026)
              </li>
              <li>
                • Wajib hadir Talkshow Bunda Elly Risman (8 Maret 2026,
                Masjid Raya Al-Jabbar, 12.30 WIB – selesai)
              </li>
              <li>• Usia 40–55 tahun</li>
              <li>• Pendaftaran dibuka mulai 27 Februari 2026</li>
            </ul>

            <div className="mt-7">
              <a
                href="/daftar-kacamata"
                className="inline-flex items-center justify-center rounded-xl 
                border border-emerald-600 text-emerald-700 
                bg-emerald-50/60 backdrop-blur
                text-sm font-medium px-6 py-3 
                hover:bg-emerald-600 hover:text-white 
                transition-all duration-300"
              >
                Daftar Program Kacamata Gratis
              </a>

              <p className="text-xs text-gray-400 mt-3">
                Data akan diverifikasi sebelum pengambilan di lokasi acara.
              </p>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
              <div className="text-5xl font-semibold text-gray-900">
                1000
              </div>
              <p className="mt-2 text-sm tracking-wide text-gray-600 uppercase">
                Kacamata Baca Gratis
              </p>
              <div className="mt-4 text-xs text-gray-400">
                Terbatas & Selama Kuota Tersedia
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}