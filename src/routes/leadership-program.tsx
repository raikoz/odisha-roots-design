import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import { History, Award, CheckCircle2, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/leadership-program")({
  head: () => ({
    meta: [
      { title: "Past Leadership (1969–Present) | The Odisha Society of the Americas" },
      {
        name: "description",
        content:
          "Honoring the visionary founders, past presidents, and executive officers who shaped OSA over 57+ years.",
      },
    ],
  }),
  component: PastLeadershipPage,
});

const pastPresidents = [
  { term: "2023–2025", name: "Sushant Satpathy", location: "Washington DC", convention: "Dallas / Atlantic City" },
  { term: "2021–2023", name: "Gyan Ranjan Mohanty", location: "Detroit, MI", convention: "Charlotte / Chicago" },
  { term: "2019–2021", name: "Kuku Das", location: "San Jose, CA", convention: "Virtual / Atlantic City" },
  { term: "2017–2019", name: "Lalatendu Mohanty", location: "Chicago, IL", convention: "Dearborn / Atlantic City" },
  { term: "2015–2017", name: "Sushmita Rajhans", location: "Columbus, OH", convention: "Salt Lake City / Rhode Island" },
  { term: "2013–2015", name: "Sikhanda Satapathy", location: "Austin, TX", convention: "Columbus / Washington DC" },
  { term: "2011–2013", name: "Annapurna Pandey", location: "Santa Cruz, CA", convention: "Seattle / Chicago" },
  { term: "2009–2011", name: "Dhirendra Kar", location: "Raleigh, NC", convention: "New Jersey / Detroit" },
  { term: "2007–2009", name: "Brundaban Patra", location: "Maryland", convention: "Toronto / Chicago" },
  { term: "2005–2007", name: "Bijoy K. Misra", location: "Boston, MA", convention: "Houston / Dallas" },
  { term: "2003–2005", name: "Prasanta K. Behera", location: "Texas", convention: "Washington DC / Nashville" },
  { term: "2001–2003", name: "Sita K. Dash", location: "Minnesota", convention: "Chicago / New Jersey" },
  { term: "1999–2001", name: "Gopal K. Mohapatra", location: "Pennsylvania", convention: "Cleveland / Toronto" },
  { term: "1969–1971", name: "Dr. Bhabagrahi Misra", location: "Founding Era", convention: "Inaugural Convention, 1969" },
];

function PastLeadershipPage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              Heritage of Service · 1969 to Present
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ପୂର୍ବତନ ନେତୃତ୍ୱ ଓ ଇତିହାସ
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Past Leadership
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              Saluting the dedicated volunteer leaders, visionaries, and conveners whose tireless commitment nurtured OSA from a small student gathering into a continent-wide diaspora institution.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="pacheri-stone" height={18} />

      {/* Main Content */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
          <div>
            <div className="border-b-2 border-[#141A24] pb-4 mb-8">
              <h2 className="font-display text-3xl font-bold uppercase text-[#141A24]">
                Chronological Roll of OSA Presidents
              </h2>
              <p className="text-sm text-[#6D737A]">
                Elected leaders who guided the Society through 57+ annual terms.
              </p>
            </div>

            <div className="space-y-3">
              {pastPresidents.map((p, idx) => (
                <div
                  key={p.term}
                  className="bg-white border-2 border-[#D1C5B4] p-5 hover:border-[#B31842] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display font-black text-sm px-2.5 py-1 bg-[#141A24] text-white">
                      {p.term}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold uppercase text-[#141A24]">
                        {p.name}
                      </h3>
                      <p className="text-xs text-[#6D737A]">
                        Base: {p.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right sm:border-l sm:border-[#D1C5B4] sm:pl-6">
                    <p className="text-xs font-display uppercase tracking-wider text-[#B31842] font-semibold">
                      Host Conventions
                    </p>
                    <p className="text-xs text-[#141A24]/80">{p.convention}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border-2 border-[#141A24] p-6 space-y-4">
              <h3 className="font-display text-base font-bold uppercase text-[#093060] border-b pb-2">
                1969 Founding Story
              </h3>
              <p className="text-xs text-[#141A24]/80 leading-relaxed font-sans">
                In the late 1960s, a handful of Odia students, scholars, and young professionals gathered in the American Midwest to celebrate their language and festivals. That small informal gathering blossomed into the continent-wide organization we cherish today.
              </p>
              <Link to="/activities/convention/past" className="btn-primary text-xs w-full text-center justify-center">
                Explore Past Conventions Archive
              </Link>
            </div>

            <div className="p-6 bg-[#093060] text-white border-2 border-[#141A24] space-y-3">
              <Award size={24} className="text-[#ECA445]" />
              <h4 className="font-display text-base font-bold uppercase text-[#ECA445]">
                OSA Lifetime Achievement Awards
              </h4>
              <p className="text-xs text-white/80 leading-relaxed">
                Every year at the annual convention, OSA honors senior leaders with lifetime contribution and distinguished Odia awards.
              </p>
              <Link to="/activities/awards" className="inline-block text-xs font-display uppercase font-bold text-[#ECA445] underline">
                View Award Recipients ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
