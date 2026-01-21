import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-agribisnis.jpg";

const HeroSection = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Landscape pertanian Indonesia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-6 backdrop-blur-sm border border-secondary/30">
              Program Studi Terakreditasi
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Program Studi{" "}
            <span className="text-secondary">Agribisnis</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Universitas Nahdlatul Ulama Purwokerto — Membangun generasi unggul 
            dalam pengelolaan bisnis pertanian yang inovatif, berkelanjutan, 
            dan berdaya saing global.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl">
              Daftar Sekarang
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="w-5 h-5" />
              Lihat Video Profil
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { value: "500+", label: "Mahasiswa Aktif" },
              { value: "50+", label: "Dosen Ahli" },
              { value: "95%", label: "Tingkat Kelulusan" },
              { value: "85%", label: "Alumni Bekerja" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
              >
                <p className="text-2xl md:text-3xl font-bold text-secondary">
                  {stat.value}
                </p>
                <p className="text-sm text-primary-foreground/70 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
