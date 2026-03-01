"use client";


import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import HybridWhatsAppCTA from "@/components/HybridWhatsAppCTA"
import EmotionalHookSection from "@/components/EmotionalHookSection";
import SolusiSection from "@/components/SolusiSection";
import KategoriSection from "@/components/KategoriSection";
import TalkshowSection from "@/components/TalkshowSection";
import EducationFairSection from "@/components/EducationFairSection";
import KacamataGratisSection from "@/components/KacamataGratisSection";
import DidukungOlehSection from "@/components/DidukungOlehSection";
import SocialImpactSection from "@/components/SocialImpactSection";
import ScaleTrustSection from "@/components/ScaleTrustSection";
import DetailAcaraSection from "@/components/DetailAcaraSection";
import ClosingCTASection from "@/components/ClosingCTASection";




const LandingPage: React.FC = () => {
  

  return (
    <main className="relative">
          {/* Navbar 
          <Navbar />*/}
    
          {/* Hero */}
          <section id="hero">
            <Hero />
          </section>

          {/* Hero */}
          <section id="hero">
          <EmotionalHookSection/>  
          </section>
          
          {/* Solusi */}
          
          <section id="solusi">
          <SolusiSection/>
          </section>  

          <section id="kategori">
          <KategoriSection/>
          </section>  

          <section id="talkshow">
          <TalkshowSection/>
          </section>  
          
          <section id="edufair">
          <EducationFairSection/>
          </section> 

          <section id="sosial">
          <SocialImpactSection/>
          </section>  

          <section id="Scale">
          <ScaleTrustSection/>
          </section>  

          <section id="kacamata">
          <KacamataGratisSection/>
          </section>  

          <section id="didukung">
          <DidukungOlehSection/>
          </section> 

          <section id="detail">
          <DetailAcaraSection/>
          </section>  

          <section id="cta">
          <ClosingCTASection/>
          </section>  

               
          {/* Footer */}
          <Footer />
          {/* WhatsApp CTA hybrid */}
          <HybridWhatsAppCTA />

        </main>
  );
};

export default LandingPage;
