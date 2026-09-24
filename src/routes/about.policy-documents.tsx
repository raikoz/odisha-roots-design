import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import { FileCheck, Shield, Download, Lock, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/about/policy-documents")({
  head: () => ({
    meta: [
      { title: "Policy Documents & Operating Guidelines | OSA" },
      {
        name: "description",
        content:
          "Official operating guidelines, financial transparency policies, codes of conduct, and privacy standards of The Odisha Society of the Americas.",
      },
    ],
  }),
  component: PolicyDocumentsPage,
});

const policies = [
  {
    title: "Financial Stewardship & Fiduciary Policy",
    code: "POL-01",
    desc: "Governs society expenditures, chapter seed funding, convention auditing, and 501(c)(3) tax return transparency.",
  },
  {
    title: "Code of Ethical Conduct & Community Respect",
    code: "POL-02",
    desc: "Strict standards of mutual dignity, non-partisanship, zero discrimination, and harassment-free environments at all OSA events.",
  },
  {
    title: "Member Privacy & Directory Safeguard",
    code: "POL-03",
    desc: "Strict prohibition on commercial solicitation or unauthorized dissemination of OSA member contact directories.",
  },
  {
    title: "Whistleblower & Conflict of Interest Policy",
    code: "POL-04",
    desc: "Protection for volunteers reporting ethical irregularities, requiring annual conflict of interest disclosures by all officers.",
  },
  {
    title: "Election & Nomination Standard Procedures",
    code: "POL-05",
    desc: "Detailed rules governing candidate eligibility, nomination deadlines, electronic ballot security, and counting observer protocols.",
  },
  {
    title: "Disaster Relief & Humanitarian Fund Charter",
    code: "POL-06",
    desc: "Criteria for immediate mobilization and disbursement of emergency humanitarian assistance during natural disasters in Odisha or North America.",
  },
];

function PolicyDocumentsPage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              Institutional Governance
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ନୀତି ନିୟମ ଓ ପରିଚାଳନା ନିର୍ଦ୍ଦେଶାବଳୀ
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Policy Documents
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              Official operating standards, ethical codes, and financial policies safeguarding the integrity of The Odisha Society of the Americas.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="ikat-red-black" height={18} />

      {/* Main Content */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20">
        <div className="border-b-2 border-[#141A24] pb-4 mb-10">
          <h2 className="font-display text-3xl font-bold uppercase text-[#141A24]">
            Official Policies & Guidelines
          </h2>
          <p className="text-sm text-[#6D737A]">
            Adopted by the Board of Governors (BOG) to govern operations and ensure non-profit accountability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map((p) => (
            <div
              key={p.code}
              className="bg-white border-2 border-[#D1C5B4] p-6 hover:border-[#B31842] transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-display font-black text-xs px-2.5 py-1 bg-[#141A24] text-white mb-3 inline-block">
                  {p.code}
                </span>
                <h3 className="font-display text-lg font-bold uppercase text-[#141A24] mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-[#141A24]/80 leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-[#D1C5B4]/40 mt-6 flex justify-between items-center text-xs font-display uppercase font-bold text-[#B31842]">
                <span>Status: In Effect</span>
                <a
                  href="https://www.odishasociety.org/forms-documents/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  <Download size={14} /> PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
