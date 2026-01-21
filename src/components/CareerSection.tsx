import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  Briefcase,
  Factory,
  GraduationCap,
  Landmark,
  Store,
} from "lucide-react";

const careers = [
  {
    icon: Building2,
    title: "Manajer Agribisnis",
    description: "Kelola operasional bisnis pertanian skala besar",
  },
  {
    icon: Briefcase,
    title: "Konsultan Pertanian",
    description: "Berikan solusi strategis untuk perusahaan agribisnis",
  },
  {
    icon: Factory,
    title: "Agroindustri",
    description: "Kembangkan dan kelola industri pengolahan hasil tani",
  },
  {
    icon: Store,
    title: "Wirausaha Agribisnis",
    description: "Bangun dan kembangkan bisnis pertanian Anda sendiri",
  },
  {
    icon: Landmark,
    title: "Analis Kebijakan",
    description: "Analisis dan rancang kebijakan sektor pertanian",
  },
  {
    icon: GraduationCap,
    title: "Akademisi & Peneliti",
    description: "Kontribusi melalui pendidikan dan riset pertanian",
  },
];

const CareerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="karir" className="py-20 md:py-28 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
            Prospek Karir
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Peluang <span className="text-gradient-primary">Karir</span> yang
            Menjanjikan
          </h2>
          <p className="text-muted-foreground text-lg">
            Lulusan Agribisnis UNU Purwokerto memiliki peluang karir yang luas
            di berbagai sektor industri pertanian dan agribisnis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative overflow-hidden p-8 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 border border-border"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-hero opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <career.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-foreground text-xl mb-2">
                {career.title}
              </h3>
              <p className="text-muted-foreground">{career.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
