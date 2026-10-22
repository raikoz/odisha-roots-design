import React, { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import {
  Scroll,
  Shield,
  FileText,
  ChevronRight,
  ChevronDown,
  Search,
  BookOpen,
  Scale,
  Maximize2,
  Minimize2,
  ExternalLink,
} from "lucide-react";
import { constitutionData, LegalArticle } from "../data/constitutionData";

export const Route = createFileRoute("/constitution")({
  head: () => ({
    meta: [
      { title: "Constitution & Bylaws | The Odisha Society of the Americas" },
      {
        name: "description",
        content:
          "Codified Constitution, Bylaws, and statutory legal framework of The Odisha Society of the Americas.",
      },
    ],
  }),
  component: ConstitutionPage,
});

function ConstitutionPage() {
  const [activeTab, setActiveTab] = useState<"all" | "constitution" | "bylaw">("constitution");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allIds: Record<string, boolean> = {};
    constitutionData.forEach((item) => {
      allIds[item.id] = true;
    });
    setExpandedIds(allIds);
  };

  const collapseAll = () => {
    setExpandedIds({});
  };

  const filteredItems = useMemo(() => {
    return constitutionData.filter((item) => {
      // Tab filter
      if (activeTab !== "all" && item.type !== activeTab) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inNum = item.num.toLowerCase().includes(q);
        const inTitle = item.title.toLowerCase().includes(q);
        const inSummary = item.summary.toLowerCase().includes(q);
        const inSections = item.sections.some(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.paragraphs.some((p) => p.toLowerCase().includes(q))
        );
        return inNum || inTitle || inSummary || inSections;
      }
      return true;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              Governance & Statutory Code
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ସମ୍ବିଧାନ ଓ ଉପ-ନିୟମାବଳୀ
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Constitution & Bylaws
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              The codified legal charter governing the democratic operation, fiduciary accountability, executive powers, and member franchise of The Odisha Society of the Americas.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="ikat-red-blue" height={18} />

      {/* Main Content Area */}
      <div className="mx-auto max-w-[1480px] px-5 py-12 md:px-10 lg:py-16">
        <div className="grid lg:grid-cols-[1.9fr_1fr] gap-12 items-start">
          {/* Main Articles Column */}
          <div className="space-y-8">
            {/* Control Bar: Tabs, Search & Expand/Collapse */}
            <div className="bg-white border border-[#D1C5B4] rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Tabs */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveTab("constitution")}
                    className={`px-4 py-2 font-display text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                      activeTab === "constitution"
                        ? "bg-[#B31842] text-white shadow-sm"
                        : "bg-[#F6F1E7] text-[#141A24] hover:bg-[#E2D2BB]"
                    }`}
                  >
                    Constitution (Articles I - XI)
                  </button>
                  <button
                    onClick={() => setActiveTab("bylaw")}
                    className={`px-4 py-2 font-display text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                      activeTab === "bylaw"
                        ? "bg-[#093060] text-white shadow-sm"
                        : "bg-[#F6F1E7] text-[#141A24] hover:bg-[#E2D2BB]"
                    }`}
                  >
                    Bylaws (Bylaws I - XII)
                  </button>
                  <button
                    onClick={() => setActiveTab("all")}
                    className={`px-4 py-2 font-display text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                      activeTab === "all"
                        ? "bg-[#141A24] text-white shadow-sm"
                        : "bg-[#F6F1E7] text-[#141A24] hover:bg-[#E2D2BB]"
                    }`}
                  >
                    All Provisions ({constitutionData.length})
                  </button>
                </div>

                {/* Expand / Collapse All Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={expandAll}
                    className="p-2 text-xs font-display uppercase tracking-wider text-[#093060] hover:text-[#B31842] hover:bg-[#F6F1E7] rounded-lg transition-colors flex items-center gap-1"
                    title="Expand all articles"
                  >
                    <Maximize2 size={13} /> Expand All
                  </button>
                  <span className="text-[#D1C5B4]">|</span>
                  <button
                    onClick={collapseAll}
                    className="p-2 text-xs font-display uppercase tracking-wider text-[#093060] hover:text-[#B31842] hover:bg-[#F6F1E7] rounded-lg transition-colors flex items-center gap-1"
                    title="Collapse all articles"
                  >
                    <Minimize2 size={13} /> Collapse All
                  </button>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6D737A]"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, sections, keywords (e.g. 'President', 'Chapters', 'Elections', '501(c)(3)')..."
                  className="w-full pl-10 pr-4 py-2.5 bg-[#F6F1E7]/70 border border-[#D1C5B4] rounded-xl text-xs font-sans text-[#141A24] focus:outline-none focus:border-[#B31842] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* List of Compact Interactive Cards */}
            <div className="space-y-4">
              {filteredItems.length === 0 ? (
                <div className="bg-white border border-[#D1C5B4] rounded-2xl p-12 text-center space-y-3">
                  <BookOpen size={36} className="mx-auto text-[#B31842]" />
                  <p className="font-display text-base font-bold uppercase text-[#141A24]">
                    No Provisions Found
                  </p>
                  <p className="text-xs text-[#6D737A]">
                    No constitutional articles match your query "{searchQuery}". Try a different keyword.
                  </p>
                </div>
              ) : (
                filteredItems.map((item) => {
                  const isExpanded = !!expandedIds[item.id];
                  const isConstitution = item.type === "constitution";

                  return (
                    <div
                      key={item.id}
                      className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md ${
                        isExpanded
                          ? "border-[#B31842]/80 ring-1 ring-[#B31842]/20"
                          : "border-[#D1C5B4] hover:border-[#B31842]"
                      }`}
                    >
                      {/* Compact Header Row (Click to toggle dropdown) */}
                      <div
                        onClick={() => toggleExpand(item.id)}
                        className="p-5 md:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none hover:bg-[#F6F1E7]/30 transition-colors"
                      >
                        <div className="flex items-start sm:items-center gap-3">
                          <span
                            className={`shrink-0 font-display font-black text-xs uppercase px-2.5 py-1 rounded-md text-white ${
                              isConstitution ? "bg-[#B31842]" : "bg-[#093060]"
                            }`}
                          >
                            {item.num}
                          </span>
                          <div>
                            <h3 className="font-display text-base sm:text-lg font-bold uppercase text-[#141A24]">
                              {item.title}
                            </h3>
                            {!isExpanded && (
                              <p className="text-xs text-[#6D737A] font-sans mt-0.5 line-clamp-1">
                                {item.summary}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                          <span className="text-[11px] font-display uppercase tracking-wider text-[#6D737A] bg-[#F6F1E7] px-2.5 py-0.5 rounded-md">
                            {item.sections.length} {item.sections.length === 1 ? "Section" : "Sections"}
                          </span>
                          <button
                            className={`p-1.5 rounded-lg border transition-all ${
                              isExpanded
                                ? "bg-[#B31842] text-white border-[#B31842]"
                                : "bg-white text-[#141A24] border-[#D1C5B4] hover:border-[#B31842]"
                            }`}
                            aria-label={isExpanded ? "Collapse" : "Expand"}
                          >
                            <ChevronDown
                              size={16}
                              className={`transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>
                      </div>

                      {/* Dropdown Expanded Provisions (Detailed Explanations and Subsections) */}
                      {isExpanded && (
                        <div className="px-6 pb-6 pt-2 border-t border-[#D1C5B4]/50 bg-[#F6F1E7]/20 space-y-6 animate-fadeIn">
                          {item.sections.map((sec, idx) => (
                            <div
                              key={idx}
                              className="bg-white border border-[#D1C5B4]/70 rounded-xl p-5 space-y-3 shadow-xs"
                            >
                              {sec.title && sec.title !== "General" && (
                                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#B31842] border-b border-[#D1C5B4]/40 pb-2 flex items-center gap-2">
                                  <Scale size={13} /> {sec.title}
                                </h4>
                              )}
                              <div className="space-y-2.5">
                                {sec.paragraphs.map((para, pIdx) => (
                                  <p
                                    key={pIdx}
                                    className="text-xs sm:text-sm text-[#141A24]/90 leading-relaxed font-sans"
                                  >
                                    {para}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Official PDF Document Card */}
            <div className="p-6 bg-[#E2D2BB]/30 border border-[#D1C5B4] rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 shadow-sm">
              <div>
                <p className="font-display text-sm font-bold uppercase text-[#141A24]">
                  Official Document Archive
                </p>
                <p className="text-xs text-[#6D737A] mt-0.5">
                  View the official verified archive records at odishasociety.org/constitution-bylaws.
                </p>
              </div>
              <a
                href="https://www.odishasociety.org/constitution-bylaws/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs rounded-lg flex items-center gap-2 whitespace-nowrap"
              >
                Official Archive <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-28">
            {/* Quick Governance Links */}
            <div className="bg-white border border-[#D1C5B4] rounded-2xl p-6 space-y-4 shadow-sm">
              <h3 className="font-display text-sm font-bold uppercase text-[#093060] border-b border-[#D1C5B4]/60 pb-2">
                Related Governance
              </h3>
              <ul className="space-y-2 text-xs font-display uppercase tracking-wider">
                <li>
                  <Link
                    to="/about/vision-mission"
                    className="p-2 rounded-lg hover:bg-[#F6F1E7] text-[#141A24] hover:text-[#B31842] flex items-center justify-between transition-colors"
                  >
                    <span>Mission & Vision (Article II)</span>
                    <ChevronRight size={14} />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/administration"
                    className="p-2 rounded-lg hover:bg-[#F6F1E7] text-[#141A24] hover:text-[#B31842] flex items-center justify-between transition-colors"
                  >
                    <span>Board of Governors (BOG)</span>
                    <ChevronRight size={14} />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/member-rights"
                    className="p-2 rounded-lg hover:bg-[#F6F1E7] text-[#141A24] hover:text-[#B31842] flex items-center justify-between transition-colors"
                  >
                    <span>Member Rights & Privileges</span>
                    <ChevronRight size={14} />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/policy-documents"
                    className="p-2 rounded-lg hover:bg-[#F6F1E7] text-[#141A24] hover:text-[#B31842] flex items-center justify-between transition-colors"
                  >
                    <span>Policy Documents & Guidelines</span>
                    <ChevronRight size={14} />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/forms"
                    className="p-2 rounded-lg hover:bg-[#F6F1E7] text-[#141A24] hover:text-[#B31842] flex items-center justify-between transition-colors"
                  >
                    <span>Official Forms & Applications</span>
                    <ChevronRight size={14} />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Fiduciary Guarantee */}
            <div className="bg-[#B31842] text-white p-6 rounded-2xl border border-[#B31842] space-y-3 shadow-md">
              <Shield size={24} className="text-[#ECA445]" />
              <h4 className="font-display text-base font-bold uppercase">
                501(c)(3) Fiduciary Guarantee
              </h4>
              <p className="text-xs text-white/90 leading-relaxed font-sans">
                OSA operations adhere strictly to the non-profit statutory standards of the US Internal Revenue Code, including biennial external audits and public general reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
