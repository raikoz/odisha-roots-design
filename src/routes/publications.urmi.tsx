import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import { BookOpen, Download, Send, Calendar, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/publications/urmi")({
  head: () => ({
    meta: [
      { title: "Urmi — Annual Souvenir | The Odisha Society of the Americas" },
      {
        name: "description",
        content:
          "The flagship literary souvenir of OSA published annually since 1969, featuring Odia poetry, diaspora essays, and cultural archives.",
      },
    ],
  }),
  component: UrmiPage,
});

const recentEditions = [
  { year: 2025, title: "Urmi 2025: Dallas Conclave Edition", theme: "Ananya Odisha", editor: "Dr. Bijayalaxmi Mohanty" },
  { year: 2024, title: "Urmi 2024: Charlotte Conclave Edition", theme: "Tarangini", editor: "Prasant Rath" },
  { year: 2023, title: "Urmi 2023: Atlantic City Edition", theme: "Parampara O Pragati", editor: "Dr. Sanatan Swain" },
  { year: 2022, title: "Urmi 2022: Chicago Conclave Edition", theme: "Pravasi Chetana", editor: "Sunanda Mishra" },
  { year: 2019, title: "Urmi 2019: Golden Jubilee Commemorative Volume", theme: "Fifty Years of OSA", editor: "Special Editorial Council" },
];

function UrmiPage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              Flagship Annual Cultural Souvenir
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ଉର୍ମି — ବାର୍ଷିକ ସାହିତ୍ୟ ସ୍ମରଣିକା
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Urmi Souvenir
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              Published without interruption since 1969, Urmi is the cherished literary anthology documenting the thoughts, creative prose, and history of the Odia diaspora.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="ikat-red-black" height={18} />

      {/* Main Content */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20">
        <div className="grid lg:grid-cols-[1.8fr_1fr] gap-12 items-start">
          <div className="space-y-12">
            <div>
              <div className="border-b-2 border-[#141A24] pb-4 mb-6">
                <h2 className="font-display text-3xl font-bold uppercase text-[#141A24]">
                  Recent Urmi Volumes
                </h2>
                <p className="text-sm text-[#6D737A]">
                  Deluxe editions distributed to all Permanent Life Members.
                </p>
              </div>

              <div className="space-y-4">
                {recentEditions.map((e) => (
                  <div
                    key={e.year}
                    className="bg-white border-2 border-[#D1C5B4] p-6 hover:border-[#B31842] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-display font-black text-xs px-2 py-0.5 bg-[#B31842] text-white">
                          {e.year}
                        </span>
                        <span className="text-xs font-display uppercase font-bold text-[#093060]">
                          Theme: {e.theme}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold uppercase text-[#141A24]">
                        {e.title}
                      </h3>
                      <p className="text-xs text-[#6D737A] mt-1">Editor: {e.editor}</p>
                    </div>

                    <a
                      href="https://www.odishasociety.org/souvenirs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-blue text-xs whitespace-nowrap bg-white/70 hover:bg-[#093060] hover:text-white hover:border-[#093060] transition-all duration-200"
                    >
                      Digital Archive <Download size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Submission Guidelines */}
            <div className="bg-white border-2 border-[#141A24] p-8 space-y-4 shadow-sm">
              <h3 className="font-display text-2xl font-bold uppercase text-[#B31842]">
                Call for Submissions: Urmi 2026 (Minneapolis)
              </h3>
              <p className="text-sm text-[#141A24]/85 leading-relaxed font-sans">
                The Urmi 2026 Editorial Board invites original essays, short stories, poems, book reviews, and research papers from OSA members in both Odia and English.
              </p>
              <ul className="space-y-2 text-xs text-[#141A24]/90 list-disc list-inside">
                <li>Odia manuscripts should be typed in Unicode format (Akruti / Noto Sans Oriya).</li>
                <li>Youth section accepts creative writing from children under 18 years old.</li>
                <li>Articles should not exceed 2,500 words; poetry max 40 lines.</li>
              </ul>
              <div className="pt-2">
                <a
                  href="mailto:urmi2026@odishasociety.org"
                  className="btn-primary text-xs"
                >
                  Submit Article via Email <Send size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-[#B31842] text-white p-6 border-2 border-[#141A24] space-y-3">
              <BookOpen size={28} className="text-[#ECA445]" />
              <h4 className="font-display text-lg font-bold uppercase">Preserving Our Mother Tongue</h4>
              <p className="text-xs text-white/90 leading-relaxed font-sans">
                Urmi serves as the preeminent living archive of Odia literature composed outside India, documenting the evolution of diaspora identity over five decades.
              </p>
            </div>

            <div className="bg-white border-2 border-[#141A24] p-6 space-y-3">
              <h4 className="font-display text-sm font-bold uppercase text-[#093060] border-b pb-2">
                Also Explore
              </h4>
              <Link to="/publications/utkarsa" className="block text-xs font-display uppercase font-bold text-[#B31842] hover:underline">
                Utkarsa — Quarterly Newsletter ↗
              </Link>
              <Link to="/gallery" className="block text-xs font-display uppercase font-bold text-[#B31842] hover:underline">
                Convention Photo Archives ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
