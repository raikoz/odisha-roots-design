import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import { CalendarDays, MapPin, Sparkles, Users, Award, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/activities/convention")({
  head: () => ({
    meta: [
      { title: "57th OSA National Convention 2026 | Minneapolis, MN" },
      {
        name: "description",
        content:
          "Join thousands of Odias across North America in Minneapolis on July 2–4, 2026 for Milana Taranga: Tides of Harmony.",
      },
    ],
  }),
  component: ConventionPage,
});

const tracks = [
  {
    title: "Symphonic Cultural Extravaganza",
    odia: "ସାଂସ୍କୃତିକ କାର୍ଯ୍ୟକ୍ରମ",
    desc: "Renowned classical Odissi maestros, contemporary folk ensembles, and dazzling performances by regional youth troupes from across the continent.",
  },
  {
    title: "OSA National Drama Festival",
    odia: "ନାଟକ ଓ ମଞ୍ଚ କଳା",
    desc: "Award-winning one-act Odia plays, dramatic comedy showcases, and thought-provoking theatre produced by local diaspora chapters.",
  },
  {
    title: "Literary & Poetry Summit",
    odia: "ସାହିତ୍ୟ ଓ କବିତା ଆସର",
    desc: "Engaging symposia featuring prominent authors, poets, and linguists exploring the rich heritage of classical Odia literature.",
  },
  {
    title: "Youth Leadership & Career Forum",
    odia: "ଯୁବ ନେତୃତ୍ୱ ମଞ୍ଚ",
    desc: "Interactive hackathons, collegiate networking sessions, entrepreneurship panels, and mentorship with industry pioneers.",
  },
  {
    title: "Odisha Development Seminars",
    odia: "ଓଡ଼ିଶା ବିକାଶ ଆଲୋଚନାଚକ୍ର",
    desc: "High-level policy roundtables on public health, artificial intelligence in education, green energy, and rural investments in Odisha.",
  },
  {
    title: "Grand Rath Yatra Procession",
    odia: "ଶ୍ରୀଗୁଣ୍ଡିଚା ରଥଯାତ୍ରା",
    desc: "Ceremonial pulling of the holy chariots of Lord Jagannath, Balabhadra, and Subhadra with traditional conch blowing and sankirtan.",
  },
];

function ConventionPage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Hero Banner */}
      <section className="relative bg-[#B31842] text-white py-20 md:py-28 overflow-hidden border-b-4 border-[#ECA445]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/assets/images/rath_yatra.jpg"
            alt="Rath Yatra celebration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#ECA445] text-[#093060] px-3 py-1 font-display text-xs font-black uppercase tracking-widest">
              <Sparkles size={14} /> 57th Annual Gathering · July 2–4, 2026
            </div>

            <p className="font-odia text-4xl sm:text-5xl text-[#ECA445] font-black">
              ମିଳନ ତରଙ୍ଗ
            </p>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none text-white">
              Milana Taranga
            </h1>

            <p className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#F6F1E7]/90 tracking-wide">
              Tides of Harmony · 57th Annual Convention
            </p>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-sans max-w-2xl">
              The Minneapolis host team welcomes Odia families, youth, and global diaspora delegations to gather for an unforgettable 3-day celebration of heritage, unity, and future vision.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm font-display uppercase tracking-wider">
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 border border-white/20">
                <CalendarDays size={18} className="text-[#ECA445]" />
                <span>July 2 – 4, 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 border border-white/20">
                <MapPin size={18} className="text-[#ECA445]" />
                <span>Minneapolis Convention Center, Minnesota</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="https://osa2026.osaconventions.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs sm:text-sm"
              >
                Register Online on Convention Site <ExternalLink size={16} />
              </a>
              <Link
                to="/activities/convention/past"
                className="px-5 py-3 border border-white text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#B31842] transition-colors"
              >
                View Past 56 Conventions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PatternBanner motif="chakra-red" height={20} />

      {/* Main Content: Key Tracks */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-24 space-y-16">
        <div>
          <div className="border-b-2 border-[#141A24] pb-4 mb-10">
            <span className="section-kicker text-[#B31842]">Program Schedule</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#141A24]">
              Signature Convention Tracks
            </h2>
            <p className="text-sm text-[#6D737A] mt-1 font-sans">
              Three days of immersive programming curated for every generation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((t) => (
              <div
                key={t.title}
                className="bg-white border-2 border-[#D1C5B4] p-6 hover:border-[#B31842] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="font-odia text-xs font-semibold text-[#093060]">
                    {t.odia}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase text-[#141A24]">
                    {t.title}
                  </h3>
                  <p className="text-xs text-[#141A24]/80 leading-relaxed font-sans">
                    {t.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D1C5B4]/30 mt-6 flex items-center justify-between text-xs font-display uppercase font-bold text-[#B31842]">
                  <span>Track Available</span>
                  <CheckCircle2 size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Member Discount Banner */}
        <div className="bg-[#093060] text-white border-4 border-[#141A24] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              Special Privilege for OSA Members
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white">
              Permanent Members Pay Zero Surcharge
            </h3>
            <p className="text-xs sm:text-sm text-[#F6F1E7]/85 leading-relaxed font-sans">
              Non-members incur an additional convention registration surcharge. Become an active Permanent Life Member today to lock in permanent discounts for your entire household!
            </p>
          </div>
          <Link to="/register" className="btn-gold text-xs sm:text-sm whitespace-nowrap">
            Join as Member First <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
