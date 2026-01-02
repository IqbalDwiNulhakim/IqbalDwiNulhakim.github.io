import { useState } from "react";
import { Menu, X, Code2, Shield, Terminal, FileText } from "lucide-react";
import { NAV_LINKS } from "../data/constants";
import { useScrollEffect } from "../hooks/useScrollEffect";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrolled } = useScrollEffect();

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition"></div>
              <div className="relative flex items-center gap-2 px-3 py-2 bg-white rounded-lg">
                <Terminal className="text-primary-600" size={20} />
                <span className="text-lg font-bold text-gray-900">
                  Iqbal<span className="text-primary-600">.</span>
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-1 px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs">
                <Code2 size={12} />
                <span>Dev</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                <Shield size={12} />
                <span>Security</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="relative text-gray-700 hover:text-primary-600 font-medium transition-colors group flex items-center gap-1"
              >
                {/* Tambahkan icon khusus untuk Resume */}
                {link.name === "Resume" && <FileText size={16} />}
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-primary-600 to-blue-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-xl shadow-2xl border border-gray-100 animate-slide-up">
            <div className="p-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700 font-medium transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {/* Tambahkan icon khusus untuk Resume di mobile */}
                  {link.name === "Resume" && (
                    <FileText size={18} className="text-primary-600" />
                  )}
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t">
                <a
                  href="#contact"
                  className="block w-full text-center py-3 bg-gradient-to-r from-primary-600 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 transition-all duration-300"
        style={{ width: `${scrolled ? "100%" : "0%"}` }}
      />
    </nav>
  );
};

export default Navbar;
