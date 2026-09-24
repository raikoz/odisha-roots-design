import React from "react";
import { Link } from "@tanstack/react-router";
import { PatternBanner } from "./PatternBanner";
import { Heart, Mail, MapPin, Globe, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141A24] text-[#F6F1E7] border-t-4 border-[#B31842] relative">
      {/* Dual Edge-to-Edge Banner at top of footer: 2 lines stacked without space forming a big single decorative banner */}
      <PatternBanner
        motif="chakra-blue"
        bottomMotif="ikat-red-black"
        double={true}
        height={24}
        className="border-b border-[#D1C5B4]/20"
      />

      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-6">
            <Link to="/" className="inline-block transition-opacity hover:opacity-90" aria-label="The Odisha Society of the Americas">
              <img
                src="/assets/osa_logo_white.png"
                alt="The Odisha Society of the Americas"
                className="h-[36px] md:h-[40px] w-auto object-contain select-none"
              />
            </Link>

            <div className="space-y-3 text-sm text-[#F6F1E7]/80">
              <p className="font-display font-bold text-base text-[#ECA445] tracking-wide uppercase">
                The Odisha Society of the Americas
              </p>
              <p className="font-odia text-sm text-[#ECA445]">
                ଏକ ମନ, ଏକ ପ୍ରାଣ, ଏକ ଓଡ଼ିଶା ସମାଜ
              </p>
              <p className="text-xs leading-relaxed max-w-sm">
                A socio-cultural, volunteer-based 501(c)(3) not-for-profit organization dedicated to fostering and propagating Odia culture, heritage, and community excellence across the United States and Canada since 1969.
              </p>
            </div>

            <div className="pt-2 text-xs text-[#D6E3EC]/70 space-y-1.5 font-mono">
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-[#ECA445]" /> 100 Powell Place #1722, Nashville, TN 37204
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-[#ECA445]" /> president@odishasociety.org
              </p>
              <p className="flex items-center gap-2">
                <Globe size={14} className="text-[#ECA445]" /> www.odishasociety.org
              </p>
            </div>
          </div>

          {/* Column 2: Governance & About */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445] border-b border-[#F6F1E7]/20 pb-2 mb-4">
              Governance & About
            </h4>
            <ul className="space-y-2.5 text-xs font-display uppercase tracking-wider">
              <li>
                <Link to="/about/vision-mission" className="hover:text-[#ECA445] transition-colors">
                  Mission & Vision (Article II)
                </Link>
              </li>
              <li>
                <Link to="/constitution" className="hover:text-[#ECA445] transition-colors">
                  Constitution & Bylaws
                </Link>
              </li>
              <li>
                <Link to="/about/administration" className="hover:text-[#ECA445] transition-colors">
                  Current Executive Committee
                </Link>
              </li>
              <li>
                <Link to="/leadership-program" className="hover:text-[#ECA445] transition-colors">
                  Past Leadership Archive
                </Link>
              </li>
              <li>
                <Link to="/about/policy-documents" className="hover:text-[#ECA445] transition-colors">
                  Policy Documents
                </Link>
              </li>
              <li>
                <Link to="/about/forms" className="hover:text-[#ECA445] transition-colors">
                  Official Forms & Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Membership & Events */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445] border-b border-[#F6F1E7]/20 pb-2 mb-4">
              Community & Activities
            </h4>
            <ul className="space-y-2.5 text-xs font-display uppercase tracking-wider">
              <li>
                <Link to="/members/benefits" className="hover:text-[#ECA445] transition-colors">
                  Membership Benefits
                </Link>
              </li>
              <li>
                <Link to="/about/member-rights" className="hover:text-[#ECA445] transition-colors">
                  Member Rights & Privileges
                </Link>
              </li>
              <li>
                <Link to="/activities/convention" className="hover:text-[#ECA445] transition-colors">
                  57th Convention 2026 Minneapolis
                </Link>
              </li>
              <li>
                <Link to="/activities/convention/past" className="hover:text-[#ECA445] transition-colors">
                  Past Conventions (1969–2025)
                </Link>
              </li>
              <li>
                <Link to="/activities/awards" className="hover:text-[#ECA445] transition-colors">
                  OSA National Awards
                </Link>
              </li>
              <li>
                <Link to="/chapters" className="hover:text-[#ECA445] transition-colors">
                  All Regional Chapters
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#ECA445] transition-colors">
                  Programs & Humanitarian Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Publications & Quick CTA */}
          <div className="space-y-6">
            <div>
              <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445] border-b border-[#F6F1E7]/20 pb-2 mb-4">
                Publications & Media
              </h4>
              <ul className="space-y-2.5 text-xs font-display uppercase tracking-wider">
                <li>
                  <Link to="/publications/urmi" className="hover:text-[#ECA445] transition-colors">
                    Urmi — Annual Souvenir
                  </Link>
                </li>
                <li>
                  <Link to="/publications/utkarsa" className="hover:text-[#ECA445] transition-colors">
                    Utkarsa — Newsletter
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="hover:text-[#ECA445] transition-colors">
                    News & Press Releases
                  </Link>
                </li>
                <li>
                  <Link to="/announcements" className="hover:text-[#ECA445] transition-colors">
                    Official Announcements
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-[#ECA445] transition-colors">
                    Cultural Photo Gallery
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-[#093060] p-4 border border-[#ECA445]/50">
              <p className="font-display text-xs font-bold uppercase text-[#ECA445] mb-1">Support Our Mission</p>
              <p className="text-xs text-[#F6F1E7]/80 mb-3">Your tax-deductible contribution supports youth scholarships, cultural arts, and Odisha humanitarian relief.</p>
              <Link
                to="/donate"
                className="w-full text-center py-2 px-4 bg-[#B31842] text-white font-display text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#901334] transition-colors"
              >
                <Heart size={14} className="fill-white" /> Make a Donation
              </Link>
            </div>
          </div>
        </div>

        {/* External Social Links & Disclaimer */}
        <div className="mt-14 pt-8 border-t border-[#F6F1E7]/15 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#D6E3EC]/70">
          <div className="flex flex-wrap items-center gap-4 font-display uppercase tracking-wider">
            <a
              href="https://www.facebook.com/OdishaSocietyOfTheAmericas/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ECA445] flex items-center gap-1"
            >
              Facebook <ExternalLink size={12} />
            </a>
            <span>·</span>
            <a
              href="https://www.youtube.com/c/TheOdishaSocietyoftheAmericas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ECA445] flex items-center gap-1"
            >
              YouTube <ExternalLink size={12} />
            </a>
            <span>·</span>
            <a
              href="https://www.odishasociety.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ECA445] flex items-center gap-1"
            >
              Official Archive <ExternalLink size={12} />
            </a>
          </div>

          <p className="text-center md:text-right font-display text-[11px] tracking-wider uppercase">
            © {new Date().getFullYear()} The Odisha Society of the Americas. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom End Pattern Banner: Meghanada Pacheri red parapet boundary */}
      <PatternBanner motif="pacheri-red" height={16} />
    </footer>
  );
};
