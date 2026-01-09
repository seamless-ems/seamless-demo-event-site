import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="font-display font-bold text-2xl block mb-4">
              <span className="gradient-text">SEAMLESS</span>
            </a>
            <p className="text-muted-foreground text-sm mb-6">
              Canada's premier seamless partnership conference,
              bringing together industry leaders since 2015.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <Linkedin size={18} className="text-muted-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <Twitter size={18} className="text-muted-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <Instagram size={18} className="text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Speakers", "Schedule", "Partners", "Register"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                "Press Kit",
                "Code of Conduct",
                "Privacy Policy",
                "Terms of Service",
                "FAQ",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                <a
                  href="mailto:info@seamless.com"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  info@seamless.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  +1 (416) 555-0123
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Toronto, Ontario, Canada
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Seamless. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with passion in Toronto
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
