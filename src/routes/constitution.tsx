import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import { Scroll, Shield, FileText, ChevronRight, BookOpen } from "lucide-react";

export const Route = createFileRoute("/constitution")({
  head: () => ({
    meta: [
      { title: "Constitution & Bylaws | The Odisha Society of the Americas" },
      {
        name: "description",
        content:
          "Official Constitution, Bylaws, and Governance Framework of The Odisha Society of the Americas.",
      },
    ],
  }),
  component: ConstitutionPage,
});

const articles = [
  {
    num: "Article I",
    title: "Name & Official Headquarters",
    content: "The name of the organization shall be 'The Odisha Society of the Americas' (OSA). The principal office for the transaction of the business of the Society shall be located at such place as the Board of Governors (BOG) may determine.",
  },
  {
    num: "Article II",
    title: "Aims, Objectives & Purpose",
    content: "The Society is organized exclusively for charitable, cultural, and educational purposes under Section 501(c)(3) of the Internal Revenue Code. It fosters Odia cultural heritage, mutual fellowship, humanitarian relief, and civic engagement.",
  },
  {
    num: "Article III",
    title: "Membership Classification & Qualifications",
    content: "Any person interested in the aims and objectives of the Society who subscribes to its Constitution shall be eligible for membership. Classes include Permanent (Life), Benefactor, Patron, Annual, and Student Members.",
  },
  {
    num: "Article IV",
    title: "Governance & The Board of Governors (BOG)",
    content: "The legislative and policy-making body of the Society shall be the Board of Governors (BOG), consisting of the Executive Committee, Chapter Representatives, and the Immediate Past President.",
  },
  {
    num: "Article V",
    title: "Executive Officers & Responsibilities",
    content: "The officers shall be the President, Vice President, Secretary, and Treasurer. They shall be elected by the voting members of the Society for a term of two years.",
  },
  {
    num: "Article VI",
    title: "Elections & Nomination Committee",
    content: "A non-partisan Nomination & Election Committee shall conduct biennial elections by secret ballot or secure electronic voting according to codified BOG election procedures.",
  },
  {
    num: "Article VII",
    title: "Annual Convention & General Body Meetings",
    content: "The Society shall hold an Annual Convention once each calendar year. The Annual General Body Meeting (AGBM) shall be held during the Annual Convention.",
  },
  {
    num: "Article VIII",
    title: "Local Chapters & Affiliations",
    content: "Local chapters may be formed in any geographical area of the United States and Canada where twenty or more members reside, subject to BOG approval and chapter guidelines.",
  },
  {
    num: "Article IX",
    title: "Constitutional Amendments",
    content: "Amendments to this Constitution may be proposed by the BOG or by a petition signed by at least 10% of voting members. Ratification requires a two-thirds majority of votes cast.",
  },
];

function ConstitutionPage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              Governance & Legal Framework
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ସମ୍ବିଧାନ ଓ ଉପ-ନିୟମାବଳୀ
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Constitution & Bylaws
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              The codified legal charter governing the operation, democracy, and fiduciary accountability of The Odisha Society of the Americas.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="ikat-red-blue" height={18} />

      {/* Content */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20">
        <div className="grid lg:grid-cols-[1.8fr_1fr] gap-12 items-start">
          {/* Articles Accordion / List */}
          <div className="space-y-6">
            <div className="border-b-2 border-[#141A24] pb-4 mb-8">
              <h2 className="font-display text-3xl font-bold uppercase text-[#141A24]">
                Articles of the Constitution
              </h2>
              <p className="text-sm text-[#6D737A]">
                As adopted by the General Body and amended through recent constitutional referendums.
              </p>
            </div>

            <div className="space-y-4">
              {articles.map((art) => (
                <div
                  key={art.num}
                  className="bg-white border-2 border-[#D1C5B4] p-6 hover:border-[#B31842] transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-display font-black text-xs uppercase px-2.5 py-1 bg-[#093060] text-white">
                      {art.num}
                    </span>
                    <h3 className="font-display text-lg font-bold uppercase text-[#141A24]">
                      {art.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#141A24]/85 leading-relaxed font-sans mt-3 pl-1">
                    {art.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-[#E2D2BB]/30 border-2 border-[#141A24] mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <p className="font-display text-sm font-bold uppercase text-[#141A24]">
                  Download Full Constitution PDF
                </p>
                <p className="text-xs text-[#6D737A]">Complete document including all bylaws & amendments.</p>
              </div>
              <a
                href="https://www.odishasociety.org/constitution-bylaws/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
              >
                Official PDF Download <FileText size={14} />
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border-2 border-[#141A24] p-6 space-y-4 shadow-sm">
              <h3 className="font-display text-base font-bold uppercase text-[#093060] border-b pb-2">
                Related Governance
              </h3>
              <ul className="space-y-2.5 text-xs font-display uppercase tracking-wider">
                <li>
                  <Link to="/about/vision-mission" className="hover:text-[#B31842] flex items-center justify-between">
                    <span>Mission & Vision (Article II)</span>
                    <ChevronRight size={14} />
                  </Link>
                </li>
                <li>
                  <Link to="/about/policy-documents" className="hover:text-[#B31842] flex items-center justify-between">
                    <span>Policy Documents & Guidelines</span>
                    <ChevronRight size={14} />
                  </Link>
                </li>
                <li>
                  <Link to="/about/administration" className="hover:text-[#B31842] flex items-center justify-between">
                    <span>Board of Governors (BOG)</span>
                    <ChevronRight size={14} />
                  </Link>
                </li>
                <li>
                  <Link to="/about/member-rights" className="hover:text-[#B31842] flex items-center justify-between">
                    <span>Member Rights & Privileges</span>
                    <ChevronRight size={14} />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-[#B31842] text-white p-6 border-2 border-[#141A24] space-y-3">
              <Shield size={24} className="text-[#ECA445]" />
              <h4 className="font-display text-lg font-bold uppercase">501(c)(3) Fiduciary Guarantee</h4>
              <p className="text-xs text-white/90 leading-relaxed font-sans">
                OSA operations adhere to the highest standard of non-profit ethics, public transparency, and biennial audited accounting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
