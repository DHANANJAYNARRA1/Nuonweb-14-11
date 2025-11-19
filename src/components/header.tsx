import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  onJoinWaitlist: () => void;
}

export function Header({ onJoinWaitlist }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ 
        backgroundColor: '#ffffff',
        borderColor: 'rgba(229, 231, 235, 1)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12" style={{ backgroundColor: '#ffffff' }}>
        <div className="flex items-center justify-between" style={{ height: '72px' }}>
          {/* Logo */}
          <div 
            className="flex items-center flex-shrink-0 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img
              src="/images/rounded logo.png"
              alt="NUON"
              className="object-contain"
              style={{
                height: '58px',
                width: '220px',
                borderRadius: '16px',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center" style={{ gap: '2rem' }}>
            <button
              onClick={() => scrollToSection("home")}
              className="relative font-bold text-lg transition-all duration-300"
              style={{
                color: '#000000',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#7c3aed';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#000000';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("product")}
              className="relative font-bold text-lg transition-all duration-300"
              style={{
                color: '#000000',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#0891b2';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#000000';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative font-bold text-lg transition-all duration-300"
              style={{
                color: '#000000',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#db2777';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#000000';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contact Us
            </button>
            <Button
              onClick={onJoinWaitlist}
              className="relative font-bold text-base px-6 py-2.5 overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)',
                border: '1px solid rgba(124, 58, 237, 0.4)',
                boxShadow: '0 2px 8px rgba(124, 58, 237, 0.3)',
                transition: 'all 0.3s ease',
                borderRadius: '12px'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(124, 58, 237, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span className="relative z-10 text-white">Join Waitlist</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
            style={{
              color: '#000000',
              boxShadow: mobileMenuOpen ? '0 0 8px rgba(0, 0, 0, 0.1)' : 'none'
            }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav 
            className="md:hidden py-4 border-t" 
            style={{ 
              backgroundColor: '#ffffff',
              borderColor: 'rgba(229, 231, 235, 1)'
            }}
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="relative font-bold text-left py-3 px-4 rounded-lg transition-all duration-300 group"
                style={{
                  color: '#000000',
                  background: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(124, 58, 237, 0.08)';
                  e.currentTarget.style.color = '#7c3aed';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#000000';
                }}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("product")}
                className="relative font-bold text-left py-3 px-4 rounded-lg transition-all duration-300 group"
                style={{
                  color: '#000000',
                  background: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(8, 145, 178, 0.08)';
                  e.currentTarget.style.color = '#0891b2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#000000';
                }}
              >
                Product
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="relative font-bold text-left py-3 px-4 rounded-lg transition-all duration-300 group"
                style={{
                  color: '#000000',
                  background: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(219, 39, 119, 0.08)';
                  e.currentTarget.style.color = '#db2777';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#000000';
                }}
              >
                Contact Us
              </button>
              <Button
                onClick={onJoinWaitlist}
                className="relative font-bold w-full py-3 overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)',
                  border: '1px solid rgba(124, 58, 237, 0.4)',
                  boxShadow: '0 2px 8px rgba(124, 58, 237, 0.3)',
                  borderRadius: '12px'
                }}
              >
                <span className="relative z-10 text-white">Join Waitlist</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
