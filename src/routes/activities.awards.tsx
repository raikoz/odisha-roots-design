import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import { Award, Trophy, Star, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/activities/awards")({
  head: () => ({
    meta: [
      { title: "National Awards & Honors | The Odisha Society of the Americas" },
      {
        name: "description",
        content:
          "Honoring outstanding contributions to science, culture, literature, public service, and youth leadership across North America.",
      },
    ],
  }),
  component: AwardsPage,
});

const awardCategories = [
  {
    icon: Trophy,
    title: "OSA Lifetime Achievement Award",
    odia: "ଜୀବନବ୍ୟାପୀ ସାଧନା ସମ୍ମାନ",
    desc: "The highest civic honor conferred by OSA, recognizing exceptional career achievements and profound lifetime contributions to society and Odia culture.",
  },
  {
    icon: Star,
    title: "Distinguished Odia Award",
    odia: "ବିଶିଷ୍ଟ ପ୍ରବାସୀ ଓଡ଼ିଆ ସମ୍ମାନ",
    desc: "Conferred on diaspora achievers who have earned international renown in fields of medicine, technology, academia, public policy, or philanthropy.",
  },
  {
    icon: Award,
    title: "OSA Kalashree Award",
    odia: "କଳାଶ୍ରୀ ସମ୍ମାନ",
    desc: "Celebrates exceptional mastery, pedagogy, and lifelong preservation of classical Odissi dance, Odissi music, folk arts, or Pattachitra painting.",
  },
  {
    icon: Sparkles,
    title: "Youth Excellence & Leadership Award",
    odia: "ଯୁବ ପ୍ରତିଭା ପୁରସ୍କାର",
    desc: "Recognizing high school and collegiate Odia-American youth who demonstrate scholastic brilliance, community leadership, and social impact.",
  },
];

function AwardsPage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              National Recognition · Celebrating Excellence
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ରାଷ୍ଟ୍ରୀୟ ସମ୍ମାନ ଓ ପୁରସ୍କାର
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              OSA Awards & Honors
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              Every year at the National Convention, OSA pays tribute to luminaries whose achievements elevate our community and inspire future generations.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="chakra-red" height={18} />

      {/* Main Content */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20 space-y-16">
        <div>
          <div className="border-b-2 border-[#141A24] pb-4 mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#141A24]">
              Annual Award Categories
            </h2>
            <p className="text-sm text-[#6D737A]">
              Nominations are reviewed by an independent jury appointed by the Board of Governors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {awardCategories.map((a) => (
              <div
                key={a.title}
                className="bg-white border-2 border-[#D1C5B4] p-8 hover:border-[#B31842] transition-colors flex gap-6 items-start"
              >
                <div className="w-14 h-14 bg-[#F6F1E7] border border-[#B31842] flex items-center justify-center text-[#B31842] shrink-0">
                  <a.icon size={28} />
                </div>
                <div className="space-y-2">
                  <span className="font-odia text-xs font-semibold text-[#093060]">
                    {a.odia}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase text-[#141A24]">
                    {a.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#141A24]/80 leading-relaxed font-sans">
                    {a.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nomination CTA Block */}
        <div className="bg-[#B31842] text-white p-8 md:p-12 border-4 border-[#141A24] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <h3 className="font-display text-3xl font-black uppercase text-white">
              Nominate a Worthy Achiever for 2026
            </h3>
            <p className="text-xs sm:text-sm text-white/90 max-w-xl font-sans leading-relaxed">
              Permanent OSA members in good standing are eligible to submit candidate portfolios. Nominations for the 57th Annual Convention in Minneapolis are now open!
            </p>
          </div>
          <Link to="/about/forms" className="btn-gold text-xs whitespace-nowrap">
            Download Nomination Guidelines <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
