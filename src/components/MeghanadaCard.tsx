import React from "react";

interface MeghanadaCardProps {
  title: string;
  subtitle?: string;
  role?: string;
  odiaTitle?: string;
  number?: string;
  image?: string;
  children?: React.ReactNode;
  variant?: "default" | "stone" | "red" | "blue";
  className?: string;
  onClick?: () => void;
}

export const MeghanadaCard: React.FC<MeghanadaCardProps> = ({
  title,
  subtitle,
  role,
  odiaTitle,
  number,
  image,
  children,
  variant = "default",
  className = "",
  onClick,
}) => {
  const borderVariants = {
    default: "border-[#141A24] hover:border-[#B31842]",
    stone: "border-[#7E5836] hover:border-[#ECA445]",
    red: "border-[#B31842] hover:border-[#093060]",
    blue: "border-[#093060] hover:border-[#B31842]",
  };

  const topBarVariants = {
    default: "bg-[#B31842]",
    stone: "bg-[#7E5836]",
    red: "bg-[#B31842]",
    blue: "bg-[#093060]",
  };

  return (
    <article
      onClick={onClick}
      className={`group relative bg-white border-2 ${borderVariants[variant]} p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${className}`}
    >
      {/* Meghanada Pacheri Architectural Battlement Top Crest */}
      <div className="absolute -top-[7px] left-6 right-6 h-[7px] flex items-center justify-between pointer-events-none overflow-hidden">
        <div className={`h-full w-8 ${topBarVariants[variant]}`} />
        <div className="h-[2px] w-full bg-[#D1C5B4]/50 mx-1" />
        <div className={`h-full w-8 ${topBarVariants[variant]}`} />
      </div>

      {/* Header: Number and Odia / Wheel mark */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#D1C5B4]/40">
        {number && (
          <span className="font-display font-black text-sm tracking-wider text-[#B31842]">
            {number}
          </span>
        )}
        {odiaTitle && (
          <span className="font-odia text-xs text-[#093060] font-semibold">
            {odiaTitle}
          </span>
        )}
      </div>

      {/* Optional Portrait / Photo */}
      {image && (
        <div className="mb-4 overflow-hidden border border-[#D1C5B4] aspect-[4/3] bg-[#F6F1E7]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      {/* Title & Role */}
      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#141A24] group-hover:text-[#B31842] transition-colors">
        {title}
      </h3>
      {role && (
        <p className="mt-1 font-display text-xs font-bold uppercase tracking-widest text-[#7E5836]">
          {role}
        </p>
      )}
      {subtitle && (
        <p className="mt-2 text-xs text-[#6D737A] leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Body content */}
      {children && <div className="mt-4 pt-3 border-t border-[#D1C5B4]/30">{children}</div>}
    </article>
  );
};
