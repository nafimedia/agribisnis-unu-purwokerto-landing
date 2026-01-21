import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Siap Memulai Perjalanan{" "}
            <span className="text-secondary">Agribisnis</span> Anda?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Bergabunglah bersama ribuan mahasiswa lainnya dan wujudkan impian
            Anda menjadi pemimpin di industri agribisnis Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Daftar Online
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Phone className="w-5 h-5" />
              Hubungi Kami
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 pt-12 border-t border-primary-foreground/20"
          >
            <p className="text-primary-foreground/60 text-sm mb-4">
              Pendaftaran Mahasiswa Baru Tahun Akademik 2026/2027
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <p className="text-2xl font-bold text-secondary">Gelombang 1</p>
                <p className="text-primary-foreground/70 text-sm">
                  Jan - Mar 2026
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary">Gelombang 2</p>
                <p className="text-primary-foreground/70 text-sm">
                  Apr - Jun 2026
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary">Gelombang 3</p>
                <p className="text-primary-foreground/70 text-sm">
                  Jul - Sep 2026
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
