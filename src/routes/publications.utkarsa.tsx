import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import { Newspaper, Download, Mail, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/publications/utkarsa")({
  head: () => ({
    meta: [
      { title: "Utkarsa — Quarterly Newsletter | OSA" },
      {
        name: "description",
        content:
          "Official quarterly newsletter of The Odisha Society of the Americas, sharing chapter news, youth achievements, and community updates.",
      },
    ],
  }),
  component: UtkarsaPage,
});

const issues = [
  { issue: "Winter 2026 Edition", volume: "Vol. 38, No. 1", date: "January 2026", lead: "Countdown to Minneapolis: Milana Taranga Convention Preparations Underway." },
  { issue: "Fall 2025 Edition", volume: "Vol. 37, No. 4", date: "October 2025", lead: "Kumar Purnima Celebrations Across 15 North American Chapters." },
  { issue: "Summer 2025 Edition", volume: "Vol. 37, No. 3", date: "July 2025", lead: "Dallas 56th Convention Highlights & National Award Winners Announced." },
  { issue: "Spring 2025 Edition", volume: "Vol. 37, No. 2", date: "April 2025", lead: "Utkal Dibasa Conclaves and New Executive Committee Takes Charge." },
];

function UtkarsaPage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              Quarterly Community Bulletin
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ଉତ୍କର୍ଷ — ତ୍ରୈମାସିକ ବୁଲେଟିନ୍
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Utkarsa Newsletter
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              Delivering timely community stories, youth spotlight profiles, chapter celebrations, and executive announcements straight to member homes.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="pacheri-stone" height={18} />

      {/* Main Content */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20">
        <div className="border-b-2 border-[#141A24] pb-4 mb-10 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase text-[#141A24]">
              Recent Newsletter Editions
            </h2>
            <p className="text-sm text-[#6D737A]">
              Free digital download for all community members.
            </p>
          </div>
          <a
            href="mailto:utkarsa@odishasociety.org"
            className="btn-primary text-xs"
          >
            Submit Chapter News <Mail size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {issues.map((iss) => (
            <div
              key={iss.issue}
              className="bg-white border-2 border-[#D1C5B4] p-8 hover:border-[#093060] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-display">
                  <span className="font-black text-[#B31842]">{iss.volume}</span>
                  <span className="text-[#6D737A]">{iss.date}</span>
                </div>
                <h3 className="font-display text-xl font-bold uppercase text-[#141A24]">
                  {iss.issue}
                </h3>
                <p className="text-xs sm:text-sm text-[#141A24]/80 leading-relaxed font-sans">
                  {iss.lead}
                </p>
              </div>

              <div className="pt-6 border-t border-[#D1C5B4]/30 mt-6 flex justify-between items-center text-xs font-display uppercase font-bold text-[#093060]">
                <span>Format: PDF Magazine</span>
                <a
                  href="https://www.odishasociety.org/publications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  Download PDF <Download size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
