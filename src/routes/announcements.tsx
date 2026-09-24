import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import { Bell, AlertCircle, Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/announcements")({
  head: () => ({
    meta: [
      { title: "Official Announcements & Notices | OSA" },
      {
        name: "description",
        content:
          "Official administrative notices, election deadlines, convention bidding notices, and BOG announcements.",
      },
    ],
  }),
  component: AnnouncementsPage,
});

const notices = [
  {
    type: "Urgent Deadline",
    title: "Call for Cultural Program Entries — Minneapolis 2026",
    deadline: "Deadline: April 15, 2026",
    desc: "All regional chapters and independent artistic troupes must submit their stage production audio/video reels and participant rosters for convention scheduling.",
  },
  {
    type: "Election Notice",
    title: "BOG Guidelines for Chapter Executive Committee Elections",
    deadline: "Effective: January 2026",
    desc: "Chapters conducting biennial elections must appoint an independent election officer and submit final results certified by the Chapter President to National Secretary.",
  },
  {
    type: "Governance Notice",
    title: "Request for Bids: Hosting the 58th OSA Annual Convention (2027)",
    deadline: "Bids Due: May 31, 2026",
    desc: "Regional chapters in good standing interested in hosting the 2027 Annual Convention are invited to submit their preliminary venue and budgetary bid packages.",
  },
];

function AnnouncementsPage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              Official Notices
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ଜରୁରୀ ସୂଚନା ଓ ଘୋଷଣା
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Announcements
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              Statutory notifications, convention calls, and governance bulletins issued by the Board of Governors.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="pacheri-stone" height={18} />

      {/* Main Content */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20">
        <div className="border-b-2 border-[#141A24] pb-4 mb-10">
          <h2 className="font-display text-3xl font-bold uppercase text-[#141A24]">
            Active Governance Notices
          </h2>
          <p className="text-sm text-[#6D737A]">
            Current deadlines and formal society announcements.
          </p>
        </div>

        <div className="space-y-6">
          {notices.map((n) => (
            <div
              key={n.title}
              className="bg-white border-2 border-[#141A24] p-8 shadow-sm hover:border-[#B31842] transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className="font-display font-black text-xs px-3 py-1 bg-[#B31842] text-white uppercase tracking-wider">
                  {n.type}
                </span>
                <span className="font-display font-bold text-xs uppercase text-[#093060] tracking-wider">
                  {n.deadline}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold uppercase text-[#141A24] mb-3">
                {n.title}
              </h3>

              <p className="text-sm text-[#141A24]/85 leading-relaxed font-sans max-w-4xl">
                {n.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
