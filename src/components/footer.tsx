import { Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-purple-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <div className="mb-3 inline-block">
              <img
                src="/images/rounded logo.png"
                alt="NUON - Nurses United Opportunities Nourished"
                className="object-contain"
                style={{
                  height: '80px',
                  width: 'auto',
                  borderRadius: '16px'
                }}
              />
            </div>
            <p className="text-white/70 text-sm">
              Nurses United Opportunities Nourished
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  For Hospitals
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="text-white mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/dschoolglobal"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/dschoolglobal"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/dschool_hyderabad"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/60 text-sm text-center">
            © 2026 Nuon (Nurses United Opportunities Nourished). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
