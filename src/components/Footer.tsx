"use client"

export default function FooterSection() {
  return (
    <footer className="bg-[#021f63] text-white">
      <div className="w-full max-w-[1020px] mx-auto px-5 md:px-8 py-14">

        {/* Top */}
        <div className="space-y-10">

          {/* Identity */}
          <div className="space-y-3">
            <h3 className="text-[#d6f605] uppercase tracking-[0.2em] text-xs font-semibold">
              Ramadhan Festiva 2026
            </h3>

            <p className="text-white/85 text-sm leading-relaxed max-w-2xl">
              Gerakan kolaboratif pendidikan dan sosial berskala besar di Jawa Barat
              yang diselenggarakan di Masjid Raya Al Jabbar Bandung.
              Mengintegrasikan kompetisi, talkshow inspiratif, education fair,
              serta santunan yatim dan dhuafa.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10" />

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8 text-sm">

            {/* Organizer */}
            <div className="space-y-2">
              <h4 className="text-[#d6f605] uppercase tracking-widest text-[10px] font-semibold">
                Organized By
              </h4>
              <p className="text-white/90 font-medium">
                LAZ Graha Dhuafa Indonesia
              </p>
              <p className="text-white/60 text-xs leading-relaxed">
                Lembaga filantropi pendidikan & kemanusiaan.
              </p>
            </div>

            {/* Collaboration */}
            <div className="space-y-2">
              <h4 className="text-[#d6f605] uppercase tracking-widest text-[10px] font-semibold">
                Strategic Partners
              </h4>
              <ul className="space-y-1 text-white/70 text-xs">
                <li>Pemprov Jawa Barat</li>
                <li>Kementerian Agama RI</li>
                <li>Disdik Prov. Jawa Barat</li>
                <li>Dinsos Prov. Jawa Barat</li>
                <li>Diskominfo Jawa Barat</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <h4 className="text-[#d6f605] uppercase tracking-widest text-[10px] font-semibold">
                Official Contact
              </h4>
              <div className="text-white/70 text-xs space-y-1 leading-relaxed">
                <p>Jl. Cijagra No 21, Bandung</p>
                <p>www.grahadhuafa.org</p>
                <p>@grahadhuafa</p>
                <p className="text-white font-medium">
                  0813-2281-7712
                </p>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-white/10" />

          {/* Signature */}
          <div className="text-center pt-2">
            <p className="text-[#d6f605] text-sm italic">
              From Faith to Future
            </p>
            <p className="text-white/50 text-[11px] mt-2 tracking-wide">
              © 2026 Ramadhan Festiva · An Initiative by LAZ Graha Dhuafa Indonesia
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}