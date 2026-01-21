import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const semesters = [
  {
    semester: "Semester 1-2",
    title: "Dasar-Dasar",
    courses: [
      "Pengantar Agribisnis",
      "Ekonomi Mikro & Makro",
      "Matematika Ekonomi",
      "Dasar-Dasar Pertanian",
    ],
  },
  {
    semester: "Semester 3-4",
    title: "Pengembangan",
    courses: [
      "Manajemen Usahatani",
      "Pemasaran Hasil Pertanian",
      "Kewirausahaan Agribisnis",
      "Analisis Investasi Pertanian",
    ],
  },
  {
    semester: "Semester 5-6",
    title: "Spesialisasi",
    courses: [
      "Manajemen Rantai Pasok",
      "Agroindustri",
      "Kebijakan Pertanian",
      "Perdagangan Komoditas",
    ],
  },
  {
    semester: "Semester 7-8",
    title: "Praktik & Riset",
    courses: [
      "Praktik Kerja Lapangan",
      "Metodologi Penelitian",
      "Seminar Proposal",
      "Tugas Akhir/Skripsi",
    ],
  },
];

const CurriculumSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kurikulum" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
            Kurikulum
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Struktur{" "}
            <span className="text-gradient-primary">Kurikulum</span>{" "}
            Komprehensif
          </h2>
          <p className="text-muted-foreground text-lg">
            Kurikulum kami dirancang secara sistematis untuk membangun
            kompetensi mahasiswa secara bertahap dari semester pertama hingga
            kelulusan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {semesters.map((sem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative"
            >
              {/* Timeline connector */}
              {index < semesters.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -z-10" />
              )}

              <div className="p-6 rounded-2xl bg-card shadow-card border border-border h-full">
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  {sem.semester}
                </p>
                <h3 className="font-semibold text-foreground text-xl mb-4">
                  {sem.title}
                </h3>
                <ul className="space-y-3">
                  {sem.courses.map((course, courseIndex) => (
                    <li
                      key={courseIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
