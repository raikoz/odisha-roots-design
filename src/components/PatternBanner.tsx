import React from "react";

export type PatternMotif =
  | "chakra-red"
  | "chakra-blue"
  | "ikat-red-black"
  | "ikat-red-blue"
  | "pacheri-stone"
  | "pacheri-red"
  | "stripes-red";

interface PatternBannerProps {
  motif?: PatternMotif;
  height?: number; // in pixels
  className?: string;
  double?: boolean; // Renders two complementary lines stacked
  bottomMotif?: PatternMotif;
}

const motifSrcMap: Record<PatternMotif, string> = {
  "chakra-red": "/assets/banner_chakra_red.png",
  "chakra-blue": "/assets/banner_chakra_blue.png",
  "ikat-red-black": "/assets/banner_ikat_red_black.png",
  "ikat-red-blue": "/assets/banner_ikat_red_blue.png",
  "pacheri-stone": "/assets/banner_pacheri_stone.png",
  "pacheri-red": "/assets/banner_pacheri_red.png",
  "stripes-red": "/assets/banner_stripes_red.png",
};

export const PatternBanner: React.FC<PatternBannerProps> = ({
  motif = "chakra-red",
  height = 24,
  className = "",
  double = false,
  bottomMotif = "ikat-red-black",
}) => {
  const primarySrc = motifSrcMap[motif] || motifSrcMap["chakra-red"];
  const secondarySrc = motifSrcMap[bottomMotif] || motifSrcMap["ikat-red-black"];

  return (
    <div className={`w-full overflow-hidden select-none pointer-events-none ${className}`}>
      {/* Primary Line: Extends from edge to edge without stretching, seamless repeat-x */}
      <div
        className="w-full"
        style={{
          height: `${height}px`,
          backgroundImage: `url(${primarySrc})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: `auto ${height}px`,
          backgroundPosition: "left center",
        }}
        aria-hidden="true"
      />

      {double && (
        <div
          className="w-full"
          style={{
            height: `${Math.round(height * 0.85)}px`,
            backgroundImage: `url(${secondarySrc})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: `auto ${Math.round(height * 0.85)}px`,
            backgroundPosition: "left center",
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
};
