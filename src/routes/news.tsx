import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import { Newspaper, Calendar, Tag, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Community News & Press Releases | The Odisha Society of the Americas" },
      {
        name: "description",
        content:
          "Latest news, cultural spotlights, convention announcements, and diaspora milestones from OSA chapters.",
      },
    ],
  }),
  component: NewsPage,
});

const newsItems = [
  {
    title: "Minneapolis Convention Center Finalized as Venue for OSA 57th Annual Convention",
    date: "February 24, 2026",
    category: "Convention 2026",
    lead: "The Host Organizing Committee has confirmed contract execution with the Minneapolis Convention Center, featuring world-class auditoriums, rehearsal stages, and cultural exhibition galleries.",
  },
  {
    title: "Odia Literature & Poetry Virtual Conclave: Smrutire Piladina Announced",
    date: "February 15, 2026",
    category: "Cultural Arts",
    lead: "Over 200 participants from across the US and Canada gathered virtually for a nostalgic evening celebrating legendary Odia poets and childhood folklore.",
  },
  {
    title: "Nominations Officially Open for OSA National Awards 2026",
    date: "January 28, 2026",
    category: "National Awards",
    lead: "The BOG Awards Selection Committee invites formal candidate nominations for the Lifetime Achievement and Distinguished Odia awards.",
  },
  {
    title: "OSA Higher Education Committee Launches Spring Student Mentorship Cycle",
    date: "January 14, 2026",
    category: "Youth Mentorship",
    lead: "Fifty Odia-American high school students paired with senior professionals in engineering, bio-medicine, and software technology for career counseling.",
  },
  {
    title: "Winter Disaster Aid Dispatched for Coastal Odisha Community Hospitals",
    date: "December 20, 2025",
    category: "Humanitarian",
    lead: "Medical supplies, pediatric blankets, and clean water filtration kits delivered to primary healthcare centers in Jagatsinghpur and Kendrapara districts.",
  },
];

function NewsPage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              Press Releases & Dispatches
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ସମ୍ବାଦ ଓ ସାଂସ୍କୃତିକ ବାର୍ତ୍ତା
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Community News
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              Stay connected with breaking announcements, convention preparations, chapter events, and cultural milestones across North America.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="chakra-red" height={18} />

      {/* Main Content */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20">
        <div className="border-b-2 border-[#141A24] pb-4 mb-10">
          <h2 className="font-display text-3xl font-bold uppercase text-[#141A24]">
            Recent News Articles
          </h2>
          <p className="text-sm text-[#6D737A]">
            Verified dispatches issued by the National Executive Committee and Chapter Public Relations.
          </p>
        </div>

        <div className="space-y-6">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="bg-white border-2 border-[#D1C5B4] p-8 hover:border-[#B31842] transition-colors"
            >
              <div className="flex flex-wrap items-center gap-4 text-xs font-display mb-3">
                <span className="px-2.5 py-0.5 bg-[#B31842] text-white font-bold uppercase">
                  {item.category}
                </span>
                <span className="text-[#6D737A] flex items-center gap-1 font-sans">
                  <Calendar size={12} /> {item.date}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold uppercase text-[#141A24] mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-[#141A24]/85 leading-relaxed font-sans max-w-4xl">
                {item.lead}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
