import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import { FileText, Download, CheckCircle, ExternalLink, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about/forms")({
  head: () => ({
    meta: [
      { title: "Official Forms & Resources | The Odisha Society of the Americas" },
      {
        name: "description",
        content:
          "Downloadable forms for membership application, youth scholarships, award nominations, and convention participation.",
      },
    ],
  }),
  component: FormsPage,
});

const formsList = [
  {
    title: "Permanent Life Membership Application Form",
    category: "Membership",
    format: "PDF / Online",
    desc: "Application for permanent life membership for families and individuals residing in the US & Canada.",
    action: "/register",
    isOnline: true,
  },
  {
    title: "OSA National Awards Nomination Form (2026)",
    category: "Awards",
    format: "PDF Document",
    desc: "Nomination package for Lifetime Achievement, Distinguished Odia, and Kalashree Arts Awards.",
    action: "/activities/awards",
    isOnline: false,
  },
  {
    title: "Youth Higher Education Scholarship Application",
    category: "Youth & Education",
    format: "PDF Document",
    desc: "Merit-cum-means scholarship application for Odia-American students entering undergraduate college.",
    action: "/services",
    isOnline: false,
  },
  {
    title: "Annual Convention Cultural Performance Entry",
    category: "Convention",
    format: "Online Submission",
    desc: "Registration form for group dances, music recitals, drama performances, and youth talent showcase.",
    action: "/activities/convention",
    isOnline: true,
  },
  {
    title: "Chapter Expense Reimbursement & Grant Form",
    category: "Chapter Administration",
    format: "Excel / PDF",
    desc: "Standard form for regional chapter treasurers to submit approved community event expense claims.",
    action: "https://www.odishasociety.org/forms-documents/",
    isOnline: false,
  },
  {
    title: "Urmi Annual Souvenir Article Submission Guidelines",
    category: "Publications",
    format: "Editorial PDF",
    desc: "Guidelines, word counts, and deadlines for submitting essays, poems, and short stories in Odia and English.",
    action: "/publications/urmi",
    isOnline: true,
  },
];

function FormsPage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              Document Repository
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ଆବେଦନ ଫର୍ମ ଓ ନଥିପତ୍ର
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Forms & Documents
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              Official application documents, award nomination portfolios, scholarship criteria, and event registration forms for OSA members.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="pacheri-stone" height={18} />

      {/* Main Content */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20">
        <div className="border-b-2 border-[#141A24] pb-4 mb-10">
          <h2 className="font-display text-3xl font-bold uppercase text-[#141A24]">
            Official Forms
          </h2>
          <p className="text-sm text-[#6D737A]">
            Download printable copies or submit directly through the digital community portal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formsList.map((f) => (
            <div
              key={f.title}
              className="bg-white border-2 border-[#D1C5B4] p-6 hover:border-[#B31842] transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-display font-black text-xs px-2.5 py-1 bg-[#B31842] text-white mb-3 inline-block">
                  {f.category}
                </span>
                <h3 className="font-display text-lg font-bold uppercase text-[#141A24] mb-2">
                  {f.title}
                </h3>
                <p className="text-xs text-[#141A24]/80 leading-relaxed font-sans">
                  {f.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-[#D1C5B4]/40 mt-6 flex justify-between items-center text-xs font-display uppercase font-bold">
                <span className="text-[#6D737A]">{f.format}</span>
                {f.isOnline ? (
                  <Link
                    to={f.action}
                    className="text-[#B31842] hover:underline flex items-center gap-1"
                  >
                    Open Form <ArrowRight size={14} />
                  </Link>
                ) : (
                  <a
                    href="https://www.odishasociety.org/forms-documents/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#093060] hover:underline flex items-center gap-1"
                  >
                    Download PDF <Download size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
