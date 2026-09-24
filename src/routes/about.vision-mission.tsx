import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import { BookOpen, ShieldCheck, Heart, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision, Mission & Purpose | The Odisha Society of the Americas" },
      {
        name: "description",
        content:
          "Article II of the OSA Constitution defines our non-profit commitment to Odia heritage, educational activities, and constructive citizenship.",
      },
    ],
  }),
  component: VisionMissionPage,
});

function VisionMissionPage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              Article II · OSA Constitution
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ଲକ୍ଷ୍ୟ, ଦୃଷ୍ଟିକୋଣ ଓ ମହତ୍ ଉଦ୍ଦେଶ୍ୟ
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Vision & Mission
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              Fostering excellence, unity, and cultural preservation across the Odia-American diaspora since 1969.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="chakra-red" height={18} />

      {/* Main Content */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20">
        <div className="grid lg:grid-cols-[1.8fr_1.2fr] gap-12 items-start">
          {/* Left Column: Official Statements */}
          <div className="space-y-12">
            {/* Vision & Mission Block */}
            <div className="bg-white border-2 border-[#141A24] p-8 md:p-10 shadow-lg space-y-6">
              <div className="flex items-center gap-3 border-b-2 border-[#B31842] pb-4">
                <ShieldCheck size={28} className="text-[#B31842]" />
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-[#141A24]">
                    Official Vision & Mission
                  </h2>
                  <p className="text-xs font-display text-[#7E5836] uppercase tracking-wider font-semibold">
                    The Founding Charter
                  </p>
                </div>
              </div>

              <blockquote className="border-l-4 border-[#B31842] pl-6 py-2 text-base md:text-lg italic text-[#141A24]/90 leading-relaxed font-serif">
                "The Odisha Society of the Americas is, and shall continue to be, a socio-cultural, volunteer-based not-for-profit organization dedicated to the pursuit of excellence by fostering and propagating Odia culture in North America. By means of promoting socio-cultural events, educational activities, community service and developmental endeavors, The Odisha Society of the Americas shall serve as the primary resource for the engagement and education of Odia-Americans, and shall strive to enrich North American society with Odia-American contribution. In pursuing its underlying goals, The Odisha Society of the Americas shall at all times adhere to the fundamental values of integrity, ethical conduct, dedication to excellence, service, and respect for the dignity of all individuals and cultures."
              </blockquote>
            </div>

            {/* Purpose & Specific Objectives Block */}
            <div className="bg-white border-2 border-[#141A24] p-8 md:p-10 shadow-lg space-y-6">
              <div className="flex items-center gap-3 border-b-2 border-[#093060] pb-4">
                <BookOpen size={28} className="text-[#093060]" />
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-[#141A24]">
                    Purpose & Specific Objectives
                  </h2>
                  <p className="text-xs font-display text-[#7E5836] uppercase tracking-wider font-semibold">
                    Article - II of OSA's Constitution
                  </p>
                </div>
              </div>

              <p className="text-sm italic text-[#141A24]/80">
                In the spirit of socio-cultural growth, education, friendship, fellowship, and overall well-being, OSA shall seek to:
              </p>

              <ol className="space-y-6 divide-y divide-[#D1C5B4]/50">
                <li className="pt-4 flex gap-4">
                  <span className="font-display font-black text-2xl text-[#B31842]">1.</span>
                  <p className="text-sm leading-relaxed text-[#141A24]/90">
                    <strong>Supportive Environment:</strong> Form and nurture a non-political, not-for-profit, and mutually supportive environment for interaction of Odia immigrants and their families residing in the United States and Canada, as well as other individuals residing in the United States and Canada interested in Odisha and Odia culture;
                  </p>
                </li>

                <li className="pt-4 flex gap-4">
                  <span className="font-display font-black text-2xl text-[#B31842]">2.</span>
                  <p className="text-sm leading-relaxed text-[#141A24]/90">
                    <strong>Cultural Awareness & Integration:</strong> Enhance the awareness of Odisha and Odia culture and traditions, and broaden the visibility of Odia heritage, through the exchange and integration of Odia culture in the United States and Canada;
                  </p>
                </li>

                <li className="pt-4 flex gap-4">
                  <span className="font-display font-black text-2xl text-[#B31842]">3.</span>
                  <p className="text-sm leading-relaxed text-[#141A24]/90">
                    <strong>Humanitarian Service:</strong> Provide voluntary, charitable, and humanitarian service to the Odia community across the United States and Canada;
                  </p>
                </li>

                <li className="pt-4 flex gap-4">
                  <span className="font-display font-black text-2xl text-[#B31842]">4.</span>
                  <p className="text-sm leading-relaxed text-[#141A24]/90">
                    <strong>Constructive Citizenship:</strong> Enrich the members and broader society of the United States and Canada in order to foster constructive citizenship by Odia-Americans residing in the United States and Canada; and
                  </p>
                </li>

                <li className="pt-4 flex gap-4">
                  <span className="font-display font-black text-2xl text-[#B31842]">5.</span>
                  <p className="text-sm leading-relaxed text-[#141A24]/90">
                    <strong>Knowledge & Development Exchange:</strong> Facilitate the exchange of information and knowledge between Odisha, on the one hand, and the United States and Canada, on the other hand, and contribute to Odisha development.
                  </p>
                </li>
              </ol>
            </div>
          </div>

          {/* Right Column: Cultural Context & Quick Links */}
          <div className="space-y-8">
            <div className="bg-[#093060] text-white p-8 border-2 border-[#141A24] space-y-4">
              <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
                Odia Script Alignment
              </span>
              <p className="font-odia text-xl text-[#ECA445] leading-relaxed">
                "ଓଡ଼ିଆ ସାହିତ୍ୟ, ସଂସ୍କୃତି ଓ କଳାର ବିକାଶ ପାଇଁ ଉତ୍ସର୍ଗୀକୃତ ସଂଗଠନ"
              </p>
              <p className="text-xs text-[#F6F1E7]/80 leading-relaxed font-sans">
                Odia script in our communication connects first-generation immigrants with their ancestral homeland, while providing second-generation youth an accessible bridge to the language.
              </p>
            </div>

            <div className="bg-white border-2 border-[#141A24] p-6 space-y-4">
              <h3 className="font-display text-base font-bold uppercase text-[#141A24] border-b pb-2">
                Governance Resources
              </h3>
              <ul className="space-y-2 text-xs font-display uppercase tracking-wider">
                <li>
                  <Link to="/constitution" className="text-[#B31842] hover:underline flex items-center gap-2">
                    <ArrowRight size={12} /> Constitution & Bylaws
                  </Link>
                </li>
                <li>
                  <Link to="/about/policy-documents" className="text-[#B31842] hover:underline flex items-center gap-2">
                    <ArrowRight size={12} /> Policy Documents
                  </Link>
                </li>
                <li>
                  <Link to="/about/administration" className="text-[#B31842] hover:underline flex items-center gap-2">
                    <ArrowRight size={12} /> Current Executives & Board
                  </Link>
                </li>
                <li>
                  <Link to="/leadership-program" className="text-[#B31842] hover:underline flex items-center gap-2">
                    <ArrowRight size={12} /> Past Presidents (1969–Present)
                  </Link>
                </li>
              </ul>
            </div>

            <div className="border-2 border-[#141A24] overflow-hidden">
              <img
                src="/assets/images/diaspora_fellowship.jpg"
                alt="Community fellowship"
                className="w-full h-auto object-cover"
              />
              <div className="bg-[#141A24] text-white p-4 text-xs font-display">
                <p className="font-bold text-[#ECA445]">One Team · One Family · One OSA</p>
                <p className="text-white/70 text-[11px] mt-1">Strengthening our roots through fellowship.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
