import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X, Heart } from "lucide-react";
import { PatternBanner } from "./PatternBanner";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F6F1E7]/95 backdrop-blur-md border-b border-[#D1C5B4]/60">
      {/* Top Identity Banner */}
      <div className="bg-[#093060] text-[#F6F1E7] text-xs font-semibold px-4 py-1.5 flex justify-between items-center border-b border-[#ECA445]/40">
        <div className="mx-auto max-w-[1480px] w-full flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="font-odia text-[#ECA445] text-sm">ଓଡ଼ିଶା ସମାଜ</span>
            <span className="opacity-40">|</span>
            <span className="font-display tracking-wider uppercase text-[11px]">
              The Odisha Society of the Americas · Founded 1969
            </span>
          </div>
          <div className="hidden md:flex items-center gap-5 text-[11px] font-display uppercase tracking-wider">
            <Link to="/about/vision-mission" className="hover:text-[#ECA445] transition-colors">
              Article II Vision
            </Link>
            <span className="opacity-40">·</span>
            <Link to="/donate" className="text-[#ECA445] hover:underline flex items-center gap-1 font-bold">
              <Heart size={12} className="fill-[#ECA445]" /> Donate to OSA
            </Link>
            <span className="opacity-40">·</span>
            <Link to="/login" className="hover:text-[#ECA445] transition-colors">
              Sign In
            </Link>
            <span className="opacity-40">·</span>
            <Link to="/register" className="text-[#B31842] bg-[#F6F1E7] px-2 py-0.5 font-bold hover:bg-white transition-colors">
              Join OSA
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo with strict exclusion zone: minimum 100px height compliance */}
          <Link
            to="/"
            className="flex items-center py-2 px-3 transition-opacity hover:opacity-95"
            aria-label="The Odisha Society of the Americas"
          >
            <img
              src="/assets/osa_logo.png"
              alt="OSA - The Odisha Society of the Americas"
              className="h-[52px] md:h-[62px] w-auto object-contain select-none"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 font-display text-xs font-bold uppercase tracking-wider text-[#141A24] hover:text-[#B31842] transition-colors">
                About Us <ChevronDown size={14} />
              </button>
              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 w-64 bg-white border-2 border-[#141A24] shadow-xl py-2 z-50">
                  <Link
                    to="/about/vision-mission"
                    className="block px-4 py-2 text-xs font-display font-semibold uppercase hover:bg-[#F6F1E7] hover:text-[#B31842]"
                  >
                    Mission & Vision
                  </Link>
                  <Link
                    to="/constitution"
                    className="block px-4 py-2 text-xs font-display font-semibold uppercase hover:bg-[#F6F1E7] hover:text-[#B31842]"
                  >
                    Constitution & Bylaws
                  </Link>
                  <Link
                    to="/about/policy-documents"
                    className="block px-4 py-2 text-xs font-display font-semibold uppercase hover:bg-[#F6F1E7] hover:text-[#B31842]"
                  >
                    Policy Documents
                  </Link>
                  <Link
                    to="/about/forms"
                    className="block px-4 py-2 text-xs font-display font-semibold uppercase hover:bg-[#F6F1E7] hover:text-[#B31842]"
                  >
                    Forms & Resources
                  </Link>
                  <Link
                    to="/about/administration"
                    className="block px-4 py-2 text-xs font-display font-semibold uppercase hover:bg-[#F6F1E7] hover:text-[#B31842]"
                  >
                    Administration & Executives
                  </Link>
                  <Link
                    to="/leadership-program"
                    className="block px-4 py-2 text-xs font-display font-semibold uppercase hover:bg-[#F6F1E7] hover:text-[#B31842]"
                  >
                    Past Leadership (1969–Present)
                  </Link>
                </div>
              )}
            </div>

            {/* Members Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("members")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 font-display text-xs font-bold uppercase tracking-wider text-[#141A24] hover:text-[#B31842] transition-colors">
                Members <ChevronDown size={14} />
              </button>
              {activeDropdown === "members" && (
                <div className="absolute top-full left-0 w-64 bg-white border-2 border-[#141A24] shadow-xl py-2 z-50">
                  <Link
                    to="/members/benefits"
                    className="block px-4 py-2 text-xs font-display font-semibold uppercase hover:bg-[#F6F1E7] hover:text-[#B31842]"
                  >
                    Member Benefits
                  </Link>
                  <Link
                    to="/about/member-rights"
                    className="block px-4 py-2 text-xs font-display font-semibold uppercase hover:bg-[#F6F1E7] hover:text-[#B31842]"
                  >
                    Rights & Privileges
                  </Link>
                </div>
              )}
            </div>

            {/* Events Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("events")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 font-display text-xs font-bold uppercase tracking-wider text-[#141A24] hover:text-[#B31842] transition-colors">
                Events <ChevronDown size={14} />
              </button>
              {activeDropdown === "events" && (
                <div className="absolute top-full left-0 w-64 bg-white border-2 border-[#141A24] shadow-xl py-2 z-50">
                  <Link
                    to="/activities/convention"
                    className="block px-4 py-2 text-xs font-display font-semibold uppercase hover:bg-[#F6F1E7] hover:text-[#B31842]"
                  >
                    57th Annual Convention 2026
                  </Link>
                  <Link
                    to="/activities/convention/past"
                    className="block px-4 py-2 text-xs font-display font-semibold uppercase hover:bg-[#F6F1E7] hover:text-[#B31842]"
                  >
                    Past Conventions (1969–2025)
                  </Link>
                  <Link
                    to="/activities/awards"
                    className="block px-4 py-2 text-xs font-display font-semibold uppercase hover:bg-[#F6F1E7] hover:text-[#B31842]"
                  >
                    OSA Awards & Recognition
                  </Link>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              to="/services"
              className="px-3 py-2 font-display text-xs font-bold uppercase tracking-wider text-[#141A24] hover:text-[#B31842] transition-colors"
            >
              Programs & Services
            </Link>

            <Link
              to="/chapters"
              className="px-3 py-2 font-display text-xs font-bold uppercase tracking-wider text-[#141A24] hover:text-[#B31842] transition-colors"
            >
              Chapters
            </Link>

            {/* Publications Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("publications")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 font-display text-xs font-bold uppercase tracking-wider text-[#141A24] hover:text-[#B31842] transition-colors">
                Publications <ChevronDown size={14} />
              </button>
              {activeDropdown === "publications" && (
                <div className="absolute top-full right-0 w-64 bg-white border-2 border-[#141A24] shadow-xl py-2 z-50">
                  <Link
                    to="/publications/urmi"
                    className="block px-4 py-2 text-xs font-display font-semibold uppercase hover:bg-[#F6F1E7] hover:text-[#B31842]"
                  >
                    Urmi — Souvenir
                  </Link>
                  <Link
                    to="/publications/utkarsa"
                    className="block px-4 py-2 text-xs font-display font-semibold uppercase hover:bg-[#F6F1E7] hover:text-[#B31842]"
                  >
                    Utkarsa — Newsletter
                  </Link>
                  <Link
                    to="/news"
                    className="block px-4 py-2 text-xs font-display font-semibold uppercase hover:bg-[#F6F1E7] hover:text-[#B31842]"
                  >
                    News & Updates
                  </Link>
                  <Link
                    to="/announcements"
                    className="block px-4 py-2 text-xs font-display font-semibold uppercase hover:bg-[#F6F1E7] hover:text-[#B31842]"
                  >
                    Announcements
                  </Link>
                  <Link
                    to="/gallery"
                    className="block px-4 py-2 text-xs font-display font-semibold uppercase hover:bg-[#F6F1E7] hover:text-[#B31842]"
                  >
                    Photo & Media Gallery
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/donate"
              className="ml-2 px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider bg-[#B31842] text-white hover:bg-[#901334] transition-all transform hover:-translate-y-0.5 shadow-sm"
            >
              Donate
            </Link>

            <Link
              to="/register"
              className="ml-2 px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider bg-[#ECA445] text-[#093060] border border-[#ECA445] hover:bg-[#dba136] transition-all transform hover:-translate-y-0.5 shadow-sm"
            >
              Become a Member
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex xl:hidden items-center gap-3">
            <Link
              to="/donate"
              className="px-3 py-1.5 font-display text-xs font-bold uppercase bg-[#B31842] text-white"
            >
              Donate
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-[#141A24] text-[#141A24]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Edge-to-edge decorative pattern banner line */}
      <PatternBanner motif="chakra-red" height={16} />

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#F6F1E7] border-b-2 border-[#141A24] px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="space-y-2">
            <p className="font-display text-xs font-bold uppercase text-[#B31842] tracking-widest">About Us</p>
            <div className="pl-3 space-y-2 border-l-2 border-[#B31842]">
              <Link to="/about/vision-mission" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold">Mission & Vision</Link>
              <Link to="/constitution" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold">Constitution & Bylaws</Link>
              <Link to="/about/policy-documents" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold">Policy Documents</Link>
              <Link to="/about/forms" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold">Forms</Link>
              <Link to="/about/administration" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold">Administration</Link>
              <Link to="/leadership-program" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold">Past Leadership</Link>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-display text-xs font-bold uppercase text-[#093060] tracking-widest">Members & Community</p>
            <div className="pl-3 space-y-2 border-l-2 border-[#093060]">
              <Link to="/members/benefits" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold">Member Benefits</Link>
              <Link to="/about/member-rights" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold">Member Rights & Privileges</Link>
              <Link to="/chapters" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold">Regional Chapters</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold">Programs & Services</Link>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-display text-xs font-bold uppercase text-[#7E5836] tracking-widest">Events & Activities</p>
            <div className="pl-3 space-y-2 border-l-2 border-[#7E5836]">
              <Link to="/activities/convention" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold">57th Annual Convention 2026</Link>
              <Link to="/activities/convention/past" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold">Past Conventions</Link>
              <Link to="/activities/awards" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold">Awards & Honors</Link>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-display text-xs font-bold uppercase text-[#141A24] tracking-widest">Publications & Media</p>
            <div className="pl-3 space-y-2 border-l-2 border-[#141A24]">
              <Link to="/publications/urmi" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold">Urmi Souvenir</Link>
              <Link to="/publications/utkarsa" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold">Utkarsa Newsletter</Link>
              <Link to="/news" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold">News</Link>
              <Link to="/announcements" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold">Announcements</Link>
              <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold">Gallery</Link>
            </div>
          </div>

          <div className="pt-4 border-t border-[#D1C5B4] flex flex-col gap-2">
            <Link
              to="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-[#ECA445] text-[#093060] font-display text-xs font-bold uppercase"
            >
              Become a Member
            </Link>
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 border border-[#141A24] font-display text-xs font-bold uppercase"
            >
              Sign In to Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
