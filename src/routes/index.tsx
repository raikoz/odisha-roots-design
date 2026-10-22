import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowDownRight,
  CalendarDays,
  MapPin,
  CheckCircle2,
  Video,
  Users,
  ExternalLink,
  Laptop,
  Radio,
} from "lucide-react";
import { PatternBanner } from "../components/PatternBanner";
import { ExecutiveCard, ExecutiveMember } from "../components/ExecutiveCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Odisha Society of the Americas | Official Portal" },
      {
        name: "description",
        content:
          "Connecting the Odia diaspora across the United States and Canada since 1969 through culture, language, fellowship, and service.",
      },
    ],
  }),
  component: HomePage,
});

const executives: ExecutiveMember[] = [
  {
    name: "Nageswar Rajanala",
    role: "President",
    term: "2025-2027",
    location: "Dallas, TX",
    image: "/assets/team/nageswar_rajanala.jpg",
    bio: "President of The Odisha Society of the Americas. Fostering continental chapter growth, youth empowerment, technology initiatives, and international cultural collaboration.",
    linkedin: "https://www.linkedin.com/in/nageswar-rajanala-3a059b8/",
    email: "president@odishasociety.org",
  },
  {
    name: "Utkal Nayak",
    role: "Vice President",
    term: "2025-2027",
    location: "Columbus, OH",
    image: "/assets/team/utkal_nayak.jpg",
    bio: "Vice President of The Odisha Society of the Americas. Leading chapter coordination, national convention planning, and humanitarian outreach programs.",
    linkedin: "https://www.linkedin.com/in/utkalnayak/",
    email: "vicepresident@odishasociety.org",
  },
  {
    name: "Snigdha Hota",
    role: "Secretary",
    term: "2025-2027",
    location: "Fremont, CA",
    image: "/assets/team/snigdha_hota.jpg",
    bio: "Secretary of The Odisha Society of the Americas. Stewarding official correspondence, governance integrity, Board of Governors communications, and biennial elections.",
    linkedin: "https://www.linkedin.com/in/snigdha-hota/",
    email: "secretary@odishasociety.org",
  },
  {
    name: "Sanjeeb Rout",
    role: "Treasurer",
    term: "2025-2027",
    location: "Chicago, IL",
    image: "/assets/team/sanjeeb_rout.jpg",
    bio: "Treasurer of The Odisha Society of the Americas. Overseeing 501(c)(3) fiscal stewardship, financial transparency, annual audits, and endowment allocations.",
    linkedin: "https://www.linkedin.com/in/sanjeebrout/",
    email: "treasurer@odishasociety.org",
  },
];

const pillars = [
  {
    num: "01",
    title: "Supportive Environment",
    odia: "ପାରସ୍ପରିକ ସହଯୋଗ",
    desc: "Form and nurture a non-political, not-for-profit, and mutually supportive environment for interaction of Odia immigrants and families residing across the US and Canada.",
  },
  {
    num: "02",
    title: "Heritage & Traditions",
    odia: "ଐତିହ୍ୟ ଓ ସଂସ୍କୃତି",
    desc: "Enhance the awareness of Odisha and Odia culture, broadening visibility through active cultural integration, Odissi arts, literature, and educational outreach.",
  },
  {
    num: "03",
    title: "Humanitarian Service",
    odia: "ସେବା ଓ ସହାୟତା",
    desc: "Provide voluntary, charitable, and disaster relief service to the community in North America and emergency aid to our homeland in Odisha.",
  },
  {
    num: "04",
    title: "Constructive Citizenship",
    odia: "ଆଦର୍ଶ ନାଗରିକତା",
    desc: "Enrich members and broader North American society to foster constructive leadership, professional excellence, and civic contribution by Odia-Americans.",
  },
  {
    num: "05",
    title: "Knowledge Exchange",
    odia: "ଜ୍ଞାନ ଆଦାନ-ପ୍ରଦାନ",
    desc: "Facilitate technological, medical, and developmental exchange between Odisha and North America, contributing to sustainable Odisha development.",
  },
];

function HomePage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] bg-[#093060] text-white flex flex-col justify-end overflow-hidden border-b-4 border-[#B31842]">
        {/* Background Video with Poster Fallback & Vignette */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/images/odissi_dancer.jpg"
            className="w-full h-full object-cover object-center brightness-60 contrast-110"
          >
            <source src="/assets/hero_odissi.mp4" type="video/mp4" />
            <img
              src="/assets/images/odissi_dancer.jpg"
              alt="Odissi Classical Dancer"
              className="w-full h-full object-cover object-center brightness-60 contrast-110"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#093060] via-[#093060]/75 to-black/45" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-[1480px] w-full px-5 py-20 md:px-10 lg:py-24">
          <div className="max-w-4xl space-y-6">
            {/* Monolithic English Headline */}
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight">
              Odisha Lives <br />
              <span className="text-[#ECA445]">Wherever We Do.</span>
            </h1>

            {/* Subhead */}
            <p className="max-w-2xl text-base sm:text-xl font-sans text-[#F6F1E7]/90 leading-relaxed font-normal">
              The Odisha Society of the Americas unites thousands of diaspora families across the United States and Canada-carrying centuries of classical arts, language, Rath Yatra, handlooms, and community fellowship into every new generation.
            </p>

            {/* Hero CTAs: Only 2 Primary Actions */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                to="/activities/convention"
                className="btn-gold group text-xs sm:text-sm rounded-lg"
              >
                <span>57th Convention: Milana Taranga</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/register"
                className="btn-primary text-xs sm:text-sm rounded-lg"
              >
                <span>Join As Member</span>
                <ArrowDownRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Edge-to-Edge Double Banner: Chakra Red + Ikat Black */}
      <PatternBanner
        motif="chakra-red"
        bottomMotif="ikat-red-black"
        double={true}
        height={24}
      />

      {/* 2. EVENTS SECTION (BROUGHT ABOVE): NATIONAL GATHERING & UPCOMING EVENTS */}
      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-10 lg:py-28 space-y-20">
        {/* Featured Flagship Gathering: 57th Annual Convention */}
        <div className="bg-[#B31842] text-white p-8 md:p-14 lg:p-16 rounded-2xl shadow-xl overflow-hidden relative border border-[#B31842]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Gathering Details */}
            <div className="space-y-6">
              <div className="inline-block bg-[#ECA445] text-[#093060] font-display text-xs font-black uppercase px-3 py-1 tracking-widest rounded-md">
                Official National Gathering
              </div>

              <div className="space-y-2">
                <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none text-white">
                  Milana Taranga
                </h2>
                <p className="font-display text-lg sm:text-xl font-bold uppercase text-[#F6F1E7]/90 tracking-wide">
                  Tides of Harmony · 57th Annual Convention
                </p>
              </div>

              <p className="text-base text-white/90 leading-relaxed max-w-xl font-sans">
                The Minneapolis host team warmly invites Odias from every corner of North America to gather on July 2-4, 2026. A monumental celebration of cultural heritage, symphonic Odissi dance, Odia drama festivals, literary summits, and youth entrepreneurship.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/20">
                <div className="flex items-center gap-3">
                  <CalendarDays className="text-[#ECA445]" size={24} />
                  <div>
                    <p className="font-display text-xs font-bold uppercase text-white/70">Dates</p>
                    <p className="font-display text-sm font-bold text-white">July 2 - 4, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#ECA445]" size={24} />
                  <div>
                    <p className="font-display text-xs font-bold uppercase text-white/70">Host Location</p>
                    <p className="font-display text-sm font-bold text-white">Minneapolis, Minnesota</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="https://osa2026.osaconventions.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-xs sm:text-sm rounded-lg"
                >
                  Register on Convention Portal <ArrowRight size={16} />
                </a>
                <Link
                  to="/activities/convention/past"
                  className="px-5 py-3 border border-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#B31842] rounded-lg transition-colors"
                >
                  Explore Convention History
                </Link>
              </div>
            </div>

            {/* Right: Cultural Visual */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-black shadow-2xl border-2 border-white/30">
                <img
                  src="/assets/images/rath_yatra.jpg"
                  alt="Rath Yatra Festival Celebration"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events: Online & Offline Showcases */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 border-b border-[#D1C5B4] pb-5">
            <div>
              <span className="section-kicker text-[#B31842]">Community Calendar</span>
              <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-[#141A24] mt-1">
                Upcoming Events & Clubs
              </h3>
              <p className="font-sans text-sm text-[#6D737A] mt-1">
                Explore virtual forums, cultural speaker masterclasses, and regional in-person celebrations.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#093060] text-white font-display text-[11px] font-bold uppercase rounded-md">
                <Radio size={12} className="text-[#ECA445] animate-pulse" /> Virtual / Online
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#B31842] text-white font-display text-[11px] font-bold uppercase rounded-md">
                <MapPin size={12} className="text-[#ECA445]" /> In-Person / Offline
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1: Online AI Club */}
            <div className="bg-white rounded-2xl border border-[#D1C5B4] overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 group">
              <div>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#901334]">
                  <img
                    src="/assets/events/event_ai_club.png"
                    alt="OSA AI Club Poster"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#093060] text-white font-display text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow flex items-center gap-1">
                    <Laptop size={12} className="text-[#ECA445]" /> Online Tech Club
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#ECA445] text-[#093060] font-display text-[10px] font-black uppercase px-2 py-0.5 rounded-md shadow">
                    Bi-Weekly
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h4 className="font-display text-xl font-bold uppercase text-[#141A24] group-hover:text-[#B31842] transition-colors">
                    OSA AI Club
                  </h4>
                  <p className="font-display text-xs font-bold uppercase text-[#093060] flex items-center gap-1.5">
                    <CalendarDays size={14} className="text-[#B31842]" />
                    Saturdays · 12:00 PM EST / 9:00 AM PST
                  </p>
                  <p className="text-xs text-[#141A24]/80 leading-relaxed font-sans">
                    Bi-weekly technical discussions on machine learning, generative models, and tech entrepreneurship with fellow Odia professionals across North America.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#F6F1E7]">
                <a
                  href="https://www.odishasociety.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#093060] text-white hover:bg-[#B31842] font-display text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  Join Virtual Meetup <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Event 2: Virtual Cultural Dialogue / Season 1: Session 6 */}
            <div className="bg-white rounded-2xl border border-[#D1C5B4] overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 group">
              <div>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F6F1E7]">
                  <img
                    src="/assets/events/event_season1_session6.png"
                    alt="Season 1: Session 6 Poster"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#B31842] text-white font-display text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow flex items-center gap-1">
                    <Video size={12} className="text-[#ECA445]" /> Virtual Masterclass
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#141A24] text-white font-display text-[10px] font-black uppercase px-2 py-0.5 rounded-md shadow">
                    May 9, 2026
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h4 className="font-display text-xl font-bold uppercase text-[#141A24] group-hover:text-[#B31842] transition-colors">
                    Season 1 : Session 6
                  </h4>
                  <p className="font-display text-xs font-bold uppercase text-[#093060] flex items-center gap-1.5">
                    <CalendarDays size={14} className="text-[#B31842]" />
                    9 AM PST : 11 AM CST : 12:00 PM EST
                  </p>
                  <p className="text-xs text-[#141A24]/80 leading-relaxed font-sans">
                    Keynote lecture and panel discussion featuring distinguished Odia authors and community scholars exploring cultural identity and literary heritage.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#F6F1E7]">
                <a
                  href="https://www.odishasociety.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#B31842] text-white hover:bg-[#901334] font-display text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  Register for Session <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Event 3: Offline Regional Celebrations */}
            <div className="bg-[#141A24] text-white rounded-2xl border border-white/20 overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 group">
              <div>
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src="/assets/images/diaspora_fellowship.jpg"
                    alt="Chapter Cultural Gatherings"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#ECA445] text-[#093060] font-display text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow flex items-center gap-1">
                    <Users size={12} /> Offline / Regional
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#B31842] text-white font-display text-[10px] font-black uppercase px-2 py-0.5 rounded-md shadow">
                    15+ Chapters
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h4 className="font-display text-xl font-bold uppercase text-white group-hover:text-[#ECA445] transition-colors">
                    Chapter Celebrations & Utkal Divas
                  </h4>
                  <p className="font-display text-xs font-bold uppercase text-[#ECA445] flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#ECA445]" />
                    Local Chapters Across USA & Canada
                  </p>
                  <p className="text-xs text-[#F6F1E7]/80 leading-relaxed font-sans">
                    Connect with your nearest local Odia chapter for regional Utkal Divas, Kumar Purnima, Saraswati Puja, and annual picnics.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/10">
                <Link
                  to="/chapters"
                  className="w-full py-2.5 px-4 bg-white text-[#141A24] hover:bg-[#ECA445] hover:text-[#093060] font-display text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  Find Local Chapter <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Strip: Meghanada Stone Pattern */}
      <PatternBanner motif="pacheri-stone" height={20} />

      {/* 3. VISION, MISSION & PURPOSE (ARTICLE II) - BROUGHT BELOW EVENTS */}
      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-10 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 items-start">
          {/* Left Column: Architectural Branding */}
          <div className="space-y-6 lg:sticky lg:top-28">
            <span className="section-kicker text-[#B31842]">Constitution & Creed</span>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase leading-none text-[#141A24]">
              Vision & <br />
              <span className="text-[#B31842]">Mission</span>
            </h2>
            <p className="font-odia text-lg text-[#7E5836]">
              ଓଡ଼ିଶା ସମାଜର ଲକ୍ଷ୍ୟ ଓ ମହତ୍ ଉଦ୍ଦେଶ୍ୟ
            </p>

            <div className="p-6 bg-[#E2D2BB]/40 border-l-4 border-[#B31842] rounded-r-xl space-y-3">
              <p className="font-display text-xs font-bold uppercase tracking-wider text-[#093060]">
                Article II of OSA Constitution
              </p>
              <p className="text-sm italic text-[#141A24] leading-relaxed">
                "The Odisha Society of the Americas is, and shall continue to be, a socio-cultural, volunteer-based not-for-profit organization dedicated to the pursuit of excellence by fostering and propagating Odia culture in North America."
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#D1C5B4] shadow-md">
              <img
                src="/assets/images/konark_wheel.jpg"
                alt="Konark Sun Temple Stone Carvings"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="bg-[#141A24] text-[#F6F1E7] p-3 text-xs font-display flex justify-between items-center">
                <span>Konark Chakra · The Wheel of Eternity</span>
                <span className="text-[#ECA445] font-bold">Sun Temple Heritage</span>
              </div>
            </div>
          </div>

          {/* Right Column: The 5 Strategic Purpose Pillars */}
          <div className="space-y-8">
            <div className="border-b border-[#D1C5B4] pb-4">
              <h3 className="font-display text-2xl font-bold uppercase text-[#093060]">
                Constitutional Purpose & Objectives
              </h3>
              <p className="text-sm text-[#6D737A] mt-1 font-sans">
                Codified in the OSA Constitution to guide national initiatives, youth education, and diaspora welfare.
              </p>
            </div>

            <div className="space-y-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="bg-white border border-[#D1C5B4] rounded-xl p-6 hover:border-[#B31842] hover:shadow-md transition-all flex gap-6 items-start"
                >
                  <span className="font-display font-black text-3xl sm:text-4xl text-[#B31842] select-none">
                    {pillar.num}
                  </span>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="font-display text-lg font-bold uppercase text-[#141A24]">
                        {pillar.title}
                      </h4>
                      <span className="font-odia text-xs text-[#093060] font-semibold">
                        ({pillar.odia})
                      </span>
                    </div>
                    <p className="text-sm text-[#141A24]/80 leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                to="/about/vision-mission"
                className="btn-primary text-xs rounded-lg"
              >
                Read Full Constitution Article II <ArrowRight size={14} />
              </Link>
              {/* View Full Bylaws button with bulletproof hover contrast */}
              <Link
                to="/constitution"
                className="btn-outline text-xs text-[#141A24] bg-white hover:!bg-[#141A24] hover:!text-white hover:!border-[#141A24] rounded-lg transition-all duration-200 shadow-sm"
              >
                View Full Bylaws
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Strip: Red Stripes */}
      <PatternBanner motif="stripes-red" height={16} />

      {/* 4. EXECUTIVE TEAM (AUTHENTIC IMAGE 3 TEMPLE NICHE CARDS) */}
      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-10 lg:py-28">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 border-b border-[#D1C5B4] pb-6 mb-12">
          <div>
            <span className="section-kicker text-[#093060]">Leadership & Stewardship</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-black uppercase text-[#141A24]">
              National Executive Team
            </h2>
            <p className="font-odia text-sm text-[#7E5836] mt-1">
              କାର୍ଯ୍ୟକାରୀ କମିଟି · ଦୁଇ ବର୍ଷର କାର୍ଯ୍ୟକାଳ (୨୦୨୫-୨୦୨୭)
            </p>
          </div>
          <Link
            to="/about/administration"
            className="font-display text-xs font-bold uppercase tracking-wider text-[#B31842] hover:underline flex items-center gap-1"
          >
            Full Administration & BOG ↗
          </Link>
        </div>

        {/* 4 Authentic Kalinga Temple Niche Cards with Hover Bio & LinkedIn Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executives.map((exec) => (
            <ExecutiveCard key={exec.name} member={exec} />
          ))}
        </div>
      </section>

      {/* 5. CULTURAL CRAFTS & LIVING HERITAGE SHOWCASE */}
      <section className="bg-[#093060] text-white py-20 md:py-28 border-y-4 border-[#ECA445]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="section-kicker text-[#ECA445]">Living Traditions</span>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white leading-none">
              Rooted in Odisha, <br />
              <span className="text-[#ECA445]">Excellence in the Americas</span>
            </h2>
            <p className="text-base text-[#F6F1E7]/90 leading-relaxed font-sans">
              Every cultural motif, publication banner, and ritual supported by OSA draws from a tangible element of Odisha's cultural heritage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Sambalpuri Handloom */}
            <div className="bg-[#141A24] border border-white/20 rounded-2xl overflow-hidden group hover:border-[#ECA445] transition-all shadow-md">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/assets/images/sambalpuri_loom.jpg"
                  alt="Sambalpuri Handloom Weaving"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <p className="font-display text-xs font-bold uppercase text-[#ECA445] tracking-widest">Handloom Textiles</p>
                <h3 className="font-display text-2xl font-bold uppercase text-white">Sambalpuri Ikat</h3>
                <p className="text-xs text-[#F6F1E7]/80 leading-relaxed font-sans">
                  The tie-dye Bandha craft of western Odisha. Each diamond represents cosmic geometry woven by master weavers with ancestral pride.
                </p>
              </div>
            </div>

            {/* Card 2: Odissi Classical Dance */}
            <div className="bg-[#141A24] border border-white/20 rounded-2xl overflow-hidden group hover:border-[#ECA445] transition-all shadow-md">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/assets/images/odissi_dancer.jpg"
                  alt="Classical Odissi Dance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <p className="font-display text-xs font-bold uppercase text-[#ECA445] tracking-widest">Classical Performing Arts</p>
                <h3 className="font-display text-2xl font-bold uppercase text-white">Odissi Nrutya</h3>
                <p className="text-xs text-[#F6F1E7]/80 leading-relaxed font-sans">
                  One of the oldest surviving classical dance forms in India, characterized by intricate footwork, rhythmic mudras, and silver filigree ornaments.
                </p>
              </div>
            </div>

            {/* Card 3: Multi-generational Fellowship */}
            <div className="bg-[#141A24] border border-white/20 rounded-2xl overflow-hidden group hover:border-[#ECA445] transition-all shadow-md">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/assets/images/diaspora_fellowship.jpg"
                  alt="Odia-American Community Fellowship"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <p className="font-display text-xs font-bold uppercase text-[#ECA445] tracking-widest">Diaspora Bonding</p>
                <h3 className="font-display text-2xl font-bold uppercase text-white">Community & Youth</h3>
                <p className="text-xs text-[#F6F1E7]/80 leading-relaxed font-sans">
                  Creating a home away from home where our children grow up speaking Odia, building lifelong friendships, and honoring their roots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Strip: Chakra Blue */}
      <PatternBanner motif="chakra-blue" height={20} />

      {/* 6. MEMBERSHIP CALL TO ACTION */}
      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-10 lg:py-28">
        <div className="bg-[#E2D2BB]/30 border border-[#D1C5B4] rounded-2xl p-8 md:p-14 lg:p-20 shadow-lg">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-[#141A24] leading-none">
                Be OSA. <br />
                <span className="text-[#B31842]">Be Connected.</span>
              </h2>
              <p className="text-base text-[#141A24]/90 font-sans leading-relaxed max-w-xl">
                Membership in The Odisha Society of the Americas is more than registration - it is the satisfaction of belonging to an unbroken cultural legacy. Connect with fellow Odias across 15+ regional chapters, vote in elections, receive annual publications, and inspire the next generation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-display uppercase tracking-wider text-[#141A24]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#B31842]" /> Voting Rights in Elections
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#B31842]" /> Annual Urmi Souvenir in Print
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#B31842]" /> Convention Fee Waiver
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#B31842]" /> Eligible for National Office
                </div>
              </div>

              {/* Single Uniform CTA: Join As Member */}
              <div className="pt-4 flex items-center">
                <Link to="/register" className="btn-primary text-xs sm:text-sm rounded-lg">
                  Join As Member <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-[#D1C5B4] rounded-xl p-8 space-y-4 shadow-xl">
              <p className="font-display text-xs font-bold uppercase text-[#093060] tracking-widest">
                Membership Categories
              </p>
              <div className="divide-y divide-[#D1C5B4]/60">
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-display text-sm font-bold uppercase">Life / Permanent</p>
                    <p className="text-[11px] text-[#6D737A]">Lifetime voting and directory</p>
                  </div>
                  <span className="font-display text-sm font-black text-[#B31842]">$350 / Family</span>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-display text-sm font-bold uppercase">Annual Family</p>
                    <p className="text-[11px] text-[#6D737A]">Full annual privileges</p>
                  </div>
                  <span className="font-display text-sm font-black text-[#B31842]">$40 / Year</span>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-display text-sm font-bold uppercase">Student / Youth</p>
                    <p className="text-[11px] text-[#6D737A]">Discounted membership</p>
                  </div>
                  <span className="font-display text-sm font-black text-[#B31842]">$15 / Year</span>
                </div>
              </div>
              <p className="text-[11px] text-[#6D737A] pt-2">
                * Contributions are 501(c)(3) tax-deductible to the extent allowed by law.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}