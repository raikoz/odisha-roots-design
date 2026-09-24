import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowDownRight,
  CalendarDays,
  MapPin,
  Heart,
  Users,
  Award,
  BookOpen,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { PatternBanner } from "../components/PatternBanner";
import { MeghanadaCard } from "../components/MeghanadaCard";

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

const executives = [
  {
    name: "Nageswar Rajanala",
    role: "President",
    term: "2025–2027",
    num: "01",
    odia: "ସଭାପତି",
    image: "/assets/team/nageswar_rajanala.jpg",
    desc: "Overseeing executive administration, continental chapters, and international cultural exchange.",
  },
  {
    name: "Utkal Nayak",
    role: "Vice President",
    term: "2025–2027",
    num: "02",
    odia: "ଉପ-ସଭାପତି",
    image: "/assets/team/utkal_nayak.jpg",
    desc: "Leading chapter coordination, youth initiatives, and special organizational programs.",
  },
  {
    name: "Snigdha Hota",
    role: "Secretary",
    term: "2025–2027",
    num: "03",
    odia: "ସମ୍ପାଦିକା",
    image: "/assets/team/snigdha_hota.jpg",
    desc: "Managing society records, national communications, publications, and governance correspondence.",
  },
  {
    name: "Sanjeeb Rout",
    role: "Treasurer",
    term: "2025–2027",
    num: "04",
    odia: "କୋଷାଧ୍ୟକ୍ଷ",
    image: "/assets/team/sanjeeb_rout.jpg",
    desc: "Fiduciary custodian overseeing 501(c)(3) compliance, endowment funds, and fiscal stewardship.",
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
      <section className="relative min-h-[90vh] bg-[#093060] text-white flex flex-col justify-end overflow-hidden border-b-4 border-[#B31842]">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/odissi_dancer.jpg"
            alt="Odissi Classical Dancer"
            className="w-full h-full object-cover object-center brightness-60 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#093060] via-[#093060]/70 to-black/40" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-[1480px] w-full px-5 py-20 md:px-10 lg:py-24">
          <div className="max-w-4xl space-y-6">
            {/* Tagline & Odia kicker */}
            <div className="inline-flex items-center gap-3 bg-[#B31842] text-white px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} className="text-[#ECA445]" />
              <span>Socio-Cultural Diaspora Front · Est. 1969</span>
            </div>

            {/* Odia Identity Heading */}
            <p className="font-odia text-2xl md:text-3xl lg:text-4xl text-[#ECA445] font-semibold tracking-wide">
              ଯେଉଁଠି ଆମେ, ସେଇଠି ଓଡ଼ିଶା
            </p>

            {/* Monolithic English Headline (Brutalist style) */}
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight">
              Odisha Lives <br />
              <span className="text-[#ECA445]">Wherever We Do.</span>
            </h1>

            {/* Subhead */}
            <p className="max-w-2xl text-base sm:text-xl font-sans text-[#F6F1E7]/90 leading-relaxed font-normal">
              The Odisha Society of the Americas unites thousands of diaspora families across the United States and Canada—carrying centuries of classical arts, language, Rath Yatra, handlooms, and community fellowship into every new generation.
            </p>

            {/* Hero CTAs */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                to="/activities/convention"
                className="btn-gold group text-xs sm:text-sm"
              >
                <span>57th Convention: Milana Taranga</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/members/benefits"
                className="btn-primary text-xs sm:text-sm"
              >
                <span>Discover Member Benefits</span>
                <ArrowDownRight size={16} />
              </Link>
              <Link
                to="/about/vision-mission"
                className="px-5 py-3 border border-white/60 text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#093060] transition-colors"
              >
                Our Mission & Purpose
              </Link>
            </div>
          </div>

          {/* Quick Metrics Ticker */}
          <div className="mt-16 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="font-display text-4xl font-black text-[#ECA445]">1969</p>
              <p className="font-display text-xs uppercase tracking-wider text-white/80 mt-1">Foundation Year</p>
            </div>
            <div>
              <p className="font-display text-4xl font-black text-white">57th</p>
              <p className="font-display text-xs uppercase tracking-wider text-white/80 mt-1">Annual Gathering (2026)</p>
            </div>
            <div>
              <p className="font-display text-4xl font-black text-[#ECA445]">15+</p>
              <p className="font-display text-xs uppercase tracking-wider text-white/80 mt-1">Regional Chapters</p>
            </div>
            <div>
              <p className="font-display text-4xl font-black text-white">501(c)(3)</p>
              <p className="font-display text-xs uppercase tracking-wider text-white/80 mt-1">Non-Profit Credibility</p>
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

      {/* 2. VISION, MISSION & PURPOSE (ARTICLE II) */}
      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-10 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 items-start">
          {/* Left Column: Architectural Branding */}
          <div className="space-y-6 lg:sticky lg:top-28">
            <span className="section-kicker text-[#B31842]">01 / Constitution & Creed</span>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase leading-none text-[#141A24]">
              Vision & <br />
              <span className="text-[#B31842]">Mission</span>
            </h2>
            <p className="font-odia text-lg text-[#7E5836]">
              ଓଡ଼ିଶା ସମାଜର ଲକ୍ଷ୍ୟ ଓ ମହତ୍ ଉଦ୍ଦେଶ୍ୟ
            </p>

            <div className="p-6 bg-[#E2D2BB]/40 border-l-4 border-[#B31842] space-y-3">
              <p className="font-display text-xs font-bold uppercase tracking-wider text-[#093060]">
                Article II of OSA Constitution
              </p>
              <p className="text-sm italic text-[#141A24] leading-relaxed">
                "The Odisha Society of the Americas is, and shall continue to be, a socio-cultural, volunteer-based not-for-profit organization dedicated to the pursuit of excellence by fostering and propagating Odia culture in North America."
              </p>
            </div>

            <div className="overflow-hidden border-2 border-[#141A24] shadow-md">
              <img
                src="/assets/images/konark_wheel.jpg"
                alt="Konark Sun Temple Stone Carvings"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="bg-[#141A24] text-[#F6F1E7] p-3 text-xs font-display flex justify-between items-center">
                <span>Konark Chakra · The Wheel of Eternity</span>
                <span className="text-[#ECA445] font-bold">Sun Temple Proportions</span>
              </div>
            </div>
          </div>

          {/* Right Column: The 5 Strategic Purpose Pillars */}
          <div className="space-y-8">
            <div className="border-b-2 border-[#141A24] pb-4">
              <h3 className="font-display text-2xl font-bold uppercase text-[#093060]">
                Constitutional Purpose & Objectives
              </h3>
              <p className="text-sm text-[#6D737A] mt-1 font-sans">
                Codified in the OSA Constitution to guide national initiatives, youth education, and diaspora welfare.
              </p>
            </div>

            <div className="space-y-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="bg-white border-2 border-[#D1C5B4] p-6 hover:border-[#B31842] transition-colors flex gap-6 items-start"
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
                className="btn-primary text-xs"
              >
                Read Full Constitution Article II <ArrowRight size={14} />
              </Link>
              <Link
                to="/constitution"
                className="btn-outline text-xs text-[#141A24]"
              >
                View Full Bylaws
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Strip: Meghanada Stone Pattern */}
      <PatternBanner motif="pacheri-stone" height={20} />

      {/* 3. FEATURED EVENT: 57TH ANNUAL CONVENTION 2026 MINNEAPOLIS */}
      <section className="bg-[#B31842] text-white py-20 md:py-28 overflow-hidden relative">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Graphic and Theme */}
            <div className="space-y-6">
              <div className="inline-block bg-[#ECA445] text-[#093060] font-display text-xs font-black uppercase px-3 py-1 tracking-widest">
                Official National Gathering
              </div>

              <div className="space-y-2">
                <p className="font-odia text-3xl md:text-4xl text-[#ECA445] font-bold">
                  ମିଳନ ତରଙ୍ଗ
                </p>
                <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-white">
                  Milana Taranga
                </h2>
                <p className="font-display text-xl sm:text-2xl font-bold uppercase text-[#F6F1E7]/90 tracking-wide">
                  Tides of Harmony · 57th Annual Convention
                </p>
              </div>

              <p className="text-base text-white/90 leading-relaxed max-w-xl">
                The Minneapolis host team warmly invites Odias from every corner of North America to gather on July 2–4, 2026. A monumental celebration of cultural heritage, symphonic Odissi dance, Odia drama festivals, literary summits, and youth entrepreneurship.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/20">
                <div className="flex items-center gap-3">
                  <CalendarDays className="text-[#ECA445]" size={24} />
                  <div>
                    <p className="font-display text-xs font-bold uppercase text-white/70">Dates</p>
                    <p className="font-display text-sm font-bold text-white">July 2 – 4, 2026</p>
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

              <div className="pt-6 flex flex-wrap gap-4">
                <a
                  href="https://osa2026.osaconventions.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-xs sm:text-sm"
                >
                  Register on Convention Portal <ArrowRight size={16} />
                </a>
                <Link
                  to="/activities/convention/past"
                  className="px-5 py-3 border border-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#B31842] transition-colors"
                >
                  Explore Convention History
                </Link>
              </div>
            </div>

            {/* Right: Authentic Cultural Visual */}
            <div className="relative">
              <div className="border-4 border-white shadow-2xl overflow-hidden aspect-[4/3] bg-black">
                <img
                  src="/assets/images/rath_yatra.jpg"
                  alt="Rath Yatra Festival Celebration"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-4 p-4 bg-[#093060] border-2 border-[#ECA445] text-xs font-display uppercase tracking-wider flex justify-between items-center text-[#F6F1E7]">
                <span>Convention Registration Discount for OSA Members</span>
                <span className="text-[#ECA445] font-black">Save up to 40%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Strip: Red Stripes */}
      <PatternBanner motif="stripes-red" height={16} />

      {/* 4. EXECUTIVE TEAM (MEGHANADA PACHERI CARDS) */}
      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-10 lg:py-28">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 border-b-2 border-[#141A24] pb-6 mb-12">
          <div>
            <span className="section-kicker text-[#093060]">02 / Leadership & Stewardship</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-black uppercase text-[#141A24]">
              National Executive Team
            </h2>
            <p className="font-odia text-sm text-[#7E5836] mt-1">
              କାର୍ଯ୍ୟକାରୀ କମିଟି · ଦୁଇ ବର୍ଷର କାର୍ଯ୍ୟକାଳ (୨୦୨୫–୨୦୨୭)
            </p>
          </div>
          <Link
            to="/about/administration"
            className="font-display text-xs font-bold uppercase tracking-wider text-[#B31842] hover:underline flex items-center gap-1"
          >
            Full Administration & BOG ↗
          </Link>
        </div>

        {/* 4 Architectural Meghanada Pacheri Cards with Authentic Leadership Portraits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executives.map((exec) => (
            <MeghanadaCard
              key={exec.name}
              title={exec.name}
              role={exec.role}
              odiaTitle={exec.odia}
              number={exec.num}
              image={exec.image}
              variant="default"
              subtitle={`${exec.term} Executive Mandate`}
            >
              <p className="text-xs text-[#141A24]/80 leading-relaxed font-sans">
                {exec.desc}
              </p>
            </MeghanadaCard>
          ))}
        </div>
      </section>

      {/* 5. CULTURAL CRAFTS & LIVING HERITAGE SHOWCASE */}
      <section className="bg-[#093060] text-white py-20 md:py-28 border-y-4 border-[#ECA445]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="section-kicker text-[#ECA445]">03 / Living Traditions</span>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white leading-none">
              Rooted in Odisha, <br />
              <span className="text-[#ECA445]">Excellence in the Americas</span>
            </h2>
            <p className="text-base text-[#F6F1E7]/90 leading-relaxed">
              Every cultural motif, publication banner, and ritual supported by OSA draws from a tangible element of Odisha's cultural heritage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Sambalpuri Handloom */}
            <div className="bg-[#141A24] border-2 border-white/20 overflow-hidden group hover:border-[#ECA445] transition-colors">
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
            <div className="bg-[#141A24] border-2 border-white/20 overflow-hidden group hover:border-[#ECA445] transition-colors">
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
            <div className="bg-[#141A24] border-2 border-white/20 overflow-hidden group hover:border-[#ECA445] transition-colors">
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
        <div className="bg-[#E2D2BB]/30 border-4 border-[#141A24] p-8 md:p-14 lg:p-20">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div className="space-y-6">
              <span className="section-kicker text-[#B31842]">04 / Belong to Something Greater</span>
              <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-[#141A24] leading-none">
                Be OSA. <br />
                <span className="text-[#B31842]">Be Connected.</span>
              </h2>
              <p className="text-base text-[#141A24]/90 font-sans leading-relaxed max-w-xl">
                Membership in The Odisha Society of the Americas is more than registration—it is the satisfaction of belonging to an unbroken cultural legacy. Connect with fellow Odias across 15+ regional chapters, vote in elections, receive annual publications, and inspire the next generation.
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

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link to="/register" className="btn-primary text-xs sm:text-sm">
                  Join As Permanent Member <ArrowRight size={16} />
                </Link>
                <Link to="/members/benefits" className="btn-outline text-xs sm:text-sm text-[#141A24]">
                  Explore All Member Tiers
                </Link>
              </div>
            </div>

            <div className="bg-white border-2 border-[#141A24] p-8 space-y-4 shadow-xl">
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