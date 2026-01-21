import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Target, Users } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: BookOpen,
      title: "Kurikulum Terkini",
      description:
        "Kurikulum berbasis kompetensi yang disesuaikan dengan kebutuhan industri dan perkembangan teknologi pertanian modern.",
    },
    {
      icon: Target,
      title: "Fokus Praktik",
      description:
        "Pembelajaran berbasis proyek dengan praktik langsung di lapangan dan kemitraan dengan perusahaan agribisnis terkemuka.",
    },
    {
      icon: Users,
      title: "Networking Luas",
      description:
        "Akses ke jaringan alumni dan profesional agribisnis di seluruh Indonesia untuk mendukung pengembangan karir.",
    },
  ];

  return (
    <section id="tentang" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
              Tentang Kami
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Mencetak Pemimpin{" "}
              <span className="text-gradient-primary">Agribisnis</span> Masa
              Depan
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Program Studi Agribisnis UNU Purwokerto hadir untuk menjawab
              tantangan dunia pertanian modern. Dengan pendekatan holistik yang
              memadukan ilmu pertanian, ekonomi, dan manajemen bisnis, kami
              mempersiapkan mahasiswa untuk menjadi pemimpin di sektor
              agribisnis.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Didukung oleh tenaga pengajar berpengalaman dan fasilitas
              pembelajaran modern, kami berkomitmen menghasilkan lulusan yang
              tidak hanya kompeten secara akademis, tetapi juga memiliki jiwa
              wirausaha dan kepekaan sosial berdasarkan nilai-nilai keislaman.
            </p>
          </motion.div>

          {/* Right Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 border border-border"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
