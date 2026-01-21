import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sprout,
  TrendingUp,
  Globe,
  Award,
  Laptop,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: Sprout,
    title: "Pertanian Berkelanjutan",
    description:
      "Pelajari teknik pertanian ramah lingkungan dan berkelanjutan untuk masa depan pangan yang lebih baik.",
  },
  {
    icon: TrendingUp,
    title: "Analisis Pasar",
    description:
      "Kuasai kemampuan analisis pasar dan strategi pemasaran produk pertanian di era digital.",
  },
  {
    icon: Globe,
    title: "Perspektif Global",
    description:
      "Dapatkan wawasan internasional tentang tren agribisnis dan peluang ekspor komoditas.",
  },
  {
    icon: Award,
    title: "Sertifikasi Profesi",
    description:
      "Raih sertifikasi profesi yang diakui industri untuk meningkatkan daya saing di dunia kerja.",
  },
  {
    icon: Laptop,
    title: "Teknologi Pertanian",
    description:
      "Manfaatkan teknologi modern seperti precision farming, IoT, dan analitik data pertanian.",
  },
  {
    icon: Handshake,
    title: "Magang Industri",
    description:
      "Program magang di perusahaan agribisnis terkemuka untuk pengalaman kerja nyata.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="keunggulan"
      className="py-20 md:py-28 bg-muted/50"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
            Keunggulan Kami
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Mengapa Memilih{" "}
            <span className="text-gradient-primary">Agribisnis UNU</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Kami menawarkan pendidikan agribisnis berkualitas dengan berbagai
            keunggulan yang mempersiapkan Anda untuk sukses di industri.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="w-14 h-14 rounded-xl bg-accent group-hover:bg-gradient-hero transition-all duration-300 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground text-xl mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
