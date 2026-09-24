import { createFileRoute } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import { Camera, Sparkles, Image as ImageIcon } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Cultural Photo Gallery | The Odisha Society of the Americas" },
      {
        name: "description",
        content:
          "High-resolution photographic collection documenting Odissi classical dance, Rath Yatra celebrations, handlooms, and diaspora fellowship.",
      },
    ],
  }),
  component: GalleryPage,
});

const galleryItems = [
  {
    image: "/assets/images/odissi_dancer.jpg",
    title: "Odissi Classical Dance",
    location: "Kalinga Heritage Series",
    category: "Performing Arts",
    caption: "Sculptural tribhangi posture with traditional silver filigree tahiya and Sambalpuri silk.",
  },
  {
    image: "/assets/images/rath_yatra.jpg",
    title: "Puri Rath Yatra Chariot Festival",
    location: "Bada Danda, Puri",
    category: "Spiritual Culture",
    caption: "The majestic wooden chariots decorated with crimson red and golden yellow appliqué canopies.",
  },
  {
    image: "/assets/images/konark_wheel.jpg",
    title: "Konark Sun Temple Stone Carvings",
    location: "Konark, Odisha",
    category: "Architecture",
    caption: "The 13th-century chariot wheel with 16 spokes, celestial musicians, and solar sundial carvings.",
  },
  {
    image: "/assets/images/sambalpuri_loom.jpg",
    title: "Sambalpuri Ikat Handloom Weaving",
    location: "Bargarh / Sonepur Weavers",
    category: "Textile Crafts",
    caption: "Master artisan creating intricate geometric tie-dye diamond patterns on a traditional wooden pit loom.",
  },
  {
    image: "/assets/images/diaspora_fellowship.jpg",
    title: "Annual Convention Fellowship Banquet",
    location: "North American Conclave",
    category: "Diaspora Life",
    caption: "Odia-American families, youth, and elders celebrating shared heritage, language, and friendship.",
  },
];

function GalleryPage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              Visual Heritage
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ସାଂସ୍କୃତିକ ଆଲେଖ୍ୟ ଓ ଚିତ୍ରଶାଳା
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Photo Gallery
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              Authentic visual records celebrating Odisha's classical arts, architectural treasures, handloom textiles, and living diaspora gatherings.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="chakra-red" height={18} />

      {/* Main Gallery Grid */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20">
        <div className="border-b-2 border-[#141A24] pb-4 mb-12">
          <h2 className="font-display text-3xl font-bold uppercase text-[#141A24]">
            Curated Cultural Visuals
          </h2>
          <p className="text-sm text-[#6D737A]">
            Every image traceable to an authentic Odisha craft, architectural monument, or diaspora celebration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="bg-white border-2 border-[#141A24] overflow-hidden group shadow-md hover:border-[#B31842] transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-display uppercase tracking-wider">
                  <span className="text-[#B31842] font-black">{item.category}</span>
                  <span className="text-[#6D737A]">{item.location}</span>
                </div>
                <h3 className="font-display text-xl font-bold uppercase text-[#141A24]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#141A24]/80 leading-relaxed font-sans pt-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
