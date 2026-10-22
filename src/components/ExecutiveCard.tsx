import React, { useState } from "react";
import { Linkedin, Mail, ExternalLink } from "lucide-react";

export interface ExecutiveMember {
  name: string;
  role: string;
  term: string;
  location: string;
  image: string;
  bio: string;
  linkedin: string;
  email?: string;
}

interface ExecutiveCardProps {
  member: ExecutiveMember;
  className?: string;
}

export const ExecutiveCard: React.FC<ExecutiveCardProps> = ({ member, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group bg-[#ECA445] rounded-2xl p-6 flex flex-col items-center justify-between transition-all duration-300 transform hover:-translate-y-1.5 shadow-lg hover:shadow-2xl overflow-hidden ${className}`}
    >
      {/* Top Heritage Badge */}
      <div className="w-full flex justify-between items-center mb-2 px-1">
        <span className="font-display text-[10px] font-black uppercase tracking-widest text-[#B31842] bg-white/70 px-2 py-0.5 rounded-md">
          {member.term}
        </span>
        <span className="font-display text-[10px] font-bold uppercase tracking-wider text-[#141A24]/80">
          {member.location}
        </span>
      </div>

      {/* Authentic Kalinga Temple Niche Arch (Image 3 Style) */}
      <div className="relative w-full max-w-[210px] aspect-[4/5] mx-auto my-1 flex items-center justify-center">
        {/* SVG Temple Arch Frame and Grayscale Portrait */}
        <svg
          viewBox="0 0 240 300"
          className="w-full h-full drop-shadow-md select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Architectural Temple Arch Clip Path */}
            <clipPath id={`temple-arch-clip-${member.name.replace(/\s+/g, "-")}`}>
              <path d="M 46 250 L 46 110 L 120 36 L 194 110 L 194 250 Z" />
            </clipPath>
          </defs>

          {/* Sandstone/Ivory Background inside niche */}
          <path
            d="M 46 250 L 46 110 L 120 36 L 194 110 L 194 250 Z"
            fill="#F6F1E7"
          />

          {/* Portrait Image inside Temple Arch */}
          <image
            href={member.image}
            x="36"
            y="30"
            width="168"
            height="230"
            clipPath={`url(#temple-arch-clip-${member.name.replace(/\s+/g, "-")})`}
            preserveAspectRatio="xMidYMid slice"
            className="filter grayscale contrast-110 brightness-95 group-hover:scale-105 transition-all duration-500 origin-center"
          />

          {/* Solid Maroon Temple Arch Outer Outline & Footing Brackets */}
          {/* Main Gabled Arch */}
          <path
            d="M 40 256 L 40 108 L 120 30 L 200 108 L 200 256"
            fill="none"
            stroke="#B31842"
            strokeWidth="12"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Stepped Architectural Plinth at Base (Footings) */}
          <path
            d="M 24 256 L 50 256 M 190 256 L 216 256"
            fill="none"
            stroke="#B31842"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M 28 244 L 46 244 M 194 244 L 212 244"
            fill="none"
            stroke="#B31842"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>

        {/* Hover Bio & LinkedIn Overlay */}
        <div
          className={`absolute inset-0 bg-[#093060]/95 backdrop-blur-sm rounded-xl p-4 flex flex-col justify-between text-white transition-all duration-300 ${
            isHovered ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div>
            <p className="font-display text-xs font-bold uppercase text-[#ECA445] tracking-wider mb-1">
              Leadership Profile
            </p>
            <p className="font-sans text-xs text-[#F6F1E7]/90 leading-relaxed line-clamp-6">
              {member.bio}
            </p>
          </div>

          <div className="pt-2 border-t border-white/20 flex items-center justify-between">
            <span className="text-[10px] font-display uppercase tracking-wider text-[#ECA445]">
              Connect Directly
            </span>
            <div className="flex items-center gap-2">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-[#0077B5] hover:bg-[#005f93] text-white rounded-lg transition-transform hover:scale-110 flex items-center justify-center shadow-md"
                  title="View LinkedIn Profile"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin size={15} />
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="p-1.5 bg-[#B31842] hover:bg-[#901334] text-white rounded-lg transition-transform hover:scale-110 flex items-center justify-center shadow-md"
                  title={`Email ${member.name}`}
                  aria-label={`Email ${member.name}`}
                >
                  <Mail size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Member Details Below Frame */}
      <div className="w-full text-center mt-3 space-y-1">
        <h3 className="font-display text-lg sm:text-xl font-black uppercase tracking-tight text-[#B31842]">
          {member.name}
        </h3>
        <p className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-[#141A24]">
          {member.role}
        </p>
      </div>

      {/* Quick LinkedIn Link on Mobile / Idle */}
      <div className="mt-3 pt-2 border-t border-[#141A24]/15 w-full flex items-center justify-between text-xs font-display">
        <span className="text-[11px] text-[#141A24]/80 font-bold uppercase">
          OSA Executive
        </span>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#093060] hover:text-[#B31842] font-bold text-xs uppercase transition-colors"
        >
          <Linkedin size={13} className="text-[#0077B5]" /> LinkedIn <ExternalLink size={11} />
        </a>
      </div>
    </div>
  );
};
