import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="kontak" className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display font-bold text-lg">
                  Program Studi Agribisnis
                </p>
                <p className="text-sm text-primary-foreground/60">
                  Universitas Nahdlatul Ulama Purwokerto
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md mb-6">
              Membangun generasi unggul dalam pengelolaan bisnis pertanian yang
              inovatif, berkelanjutan, dan berdaya saing global dengan landasan
              nilai-nilai keislaman Ahlussunnah wal Jamaah.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Tautan Cepat</h4>
            <ul className="space-y-3">
              {[
                { name: "Tentang Prodi", href: "#tentang" },
                { name: "Keunggulan", href: "#keunggulan" },
                { name: "Kurikulum", href: "#kurikulum" },
                { name: "Prospek Karir", href: "#karir" },
                { name: "Pendaftaran", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Jl. Sultan Agung No. 42, Purwokerto, Banyumas, Jawa Tengah
                  53144
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/70 text-sm">
                  (0281) 123-4567
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/70 text-sm">
                  agribisnis@unupurwokerto.ac.id
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © 2026 Program Studi Agribisnis - Universitas Nahdlatul Ulama
            Purwokerto. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
