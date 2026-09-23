import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, CalendarDays, Menu, MapPin } from "lucide-react";
import heroImage from "@/assets/osa-community-hero.jpg";
import logoAsset from "@/assets/osa/osa-logo.png.asset.json";
import conventionAsset from "@/assets/osa/convention-2026.png.asset.json";
import odissiAsset from "@/assets/osa/odissi.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Odisha Society of the Americas | Serving the Odia Diaspora" },
      { name: "description", content: "The Odisha Society of the Americas connects Odias across North America through culture, community, learning, and service." },
      { property: "og:title", content: "The Odisha Society of the Americas" },
      { property: "og:description", content: "Serving the Odia diaspora since 1969 through culture, community, and connection." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const nav = ["About", "Community", "Membership", "Activities", "Convention", "Resources"];
const executives = [
  ["Nageswar Rajanala", "President"], ["Utkal Nayak", "Vice President"],
  ["Snigdha Hota", "Secretary"], ["Sanjeeb Rout", "Treasurer"],
];

function WheelMark({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 100 100" aria-hidden="true" className={className}><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4"/><circle cx="50" cy="50" r="9" fill="none" stroke="currentColor" strokeWidth="4"/>{Array.from({length:16}).map((_,i)=><line key={i} x1="50" y1="12" x2="50" y2="41" stroke="currentColor" strokeWidth="2" transform={`rotate(${i*22.5} 50 50)`}/>)}</svg>;
}

function Home() {
  return <main className="overflow-hidden bg-background text-foreground">
    <header className="absolute inset-x-0 top-0 z-30 border-b border-hero-foreground/25 text-hero-foreground">
      <div className="mx-auto flex h-28 max-w-[1480px] items-center justify-between px-5 md:px-10">
        <a href="#top" aria-label="OSA home" className="logo-zone flex h-[100px] w-[280px] items-center"><img src={logoAsset.url} alt="The Odisha Society of the Americas" width={92} height={33} className="h-auto w-full object-contain [image-rendering:auto]" /></a>
        <nav className="hidden items-center gap-7 xl:flex">{nav.map(x=><a key={x} href={`#${x.toLowerCase()}`} className="font-display text-xs font-semibold uppercase transition-colors hover:text-brand-gold">{x}</a>)}<a href="https://www.odishasociety.org/become-a-member/" className="border border-brand-gold bg-brand-gold px-5 py-3 font-display text-xs font-bold uppercase text-brand-blue transition-transform hover:-translate-y-1">Be a member</a></nav>
        <button aria-label="Open menu" className="xl:hidden"><Menu size={28}/></button>
      </div>
    </header>

    <section id="top" className="relative min-h-[92svh] bg-brand-blue text-hero-foreground">
      <img src={heroImage} width={1920} height={1080} alt="An Odissi dancer performs for the Odia community in North America" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto flex min-h-[92svh] max-w-[1480px] items-end px-5 pb-16 pt-40 md:px-10 md:pb-20">
        <div className="max-w-5xl">
          <div className="mb-5 flex items-center gap-4 text-brand-gold"><WheelMark className="h-8 w-8"/><span className="font-display text-xs font-bold uppercase">Serving the Odia diaspora since 1969</span></div>
          <h1 className="font-display text-[clamp(3.4rem,8.5vw,9rem)] font-black uppercase leading-[.82]">Odisha lives<br/><span className="text-brand-gold">wherever we do.</span></h1>
          <div className="mt-8 flex flex-col gap-6 border-t border-hero-foreground/35 pt-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-lg leading-relaxed md:text-xl">A home for Odia identity across America—carried through language, food, dance, service, and generations.</p>
            <a href="#convention" className="group flex items-center gap-4 font-display text-sm font-bold uppercase">Explore OSA <span className="grid h-11 w-11 place-items-center border border-hero-foreground transition-colors group-hover:bg-brand-red"><ArrowDownRight/></span></a>
          </div>
        </div>
      </div>
    </section>
    <div className="ikat-strip" />

    <section id="about" className="mx-auto grid max-w-[1480px] gap-12 px-5 py-24 md:px-10 lg:grid-cols-[.7fr_1.3fr] lg:py-36">
      <div><span className="section-index">01 / Our purpose</span><WheelMark className="mt-12 h-32 w-32 text-brand-red opacity-20"/></div>
      <div><h2 className="font-display text-5xl font-black uppercase leading-[.92] md:text-7xl">A focal point for Odias <span className="text-brand-red">around the world.</span></h2><p className="mt-8 max-w-3xl text-xl leading-relaxed">OSA nurtures and promotes Odia heritage and culture while creating space to debate issues and act on matters meaningful to Odias. Our conventions and regional celebrations bring that mission to life.</p><div className="mt-12 grid border-y border-border md:grid-cols-3">{["Fellowship","Cultural promotion","Exchange & service"].map((x,i)=><div key={x} className="border-border py-6 md:border-r md:px-5 first:pl-0 last:border-r-0"><b className="font-display text-3xl text-brand-gold">0{i+1}</b><p className="mt-2 font-display font-bold uppercase">{x}</p></div>)}</div></div>
    </section>

    <section id="convention" className="bg-brand-red text-brand-red-foreground">
      <div className="mx-auto grid max-w-[1480px] lg:grid-cols-2">
        <div className="relative min-h-[460px] overflow-hidden"><img src={conventionAsset.url} alt="OSA 57th Annual Convention artwork" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy"/></div>
        <div className="flex flex-col justify-between px-5 py-16 md:px-12 lg:py-20">
          <div><span className="section-index text-brand-gold">Featured gathering</span><p lang="or" className="mt-10 font-odia text-2xl text-brand-gold">ମିଳନ ତରଙ୍ଗ</p><h2 className="mt-3 font-display text-5xl font-black uppercase leading-none md:text-7xl">Milana Taranga</h2><p className="mt-4 font-display text-xl font-semibold">Tides of Harmony · 57th Annual Convention</p></div>
          <div className="mt-16 border-t border-brand-red-foreground/30 pt-7"><div className="flex flex-wrap gap-7 text-sm"><span className="flex items-center gap-2"><CalendarDays size={18}/> July 2–4, 2026</span><span className="flex items-center gap-2"><MapPin size={18}/> Minneapolis, Minnesota</span></div><p className="mt-7 max-w-xl leading-relaxed opacity-90">A celebration of Odia culture, community, and connection—binding tradition and youth into one thread.</p><a href="https://osa2026.osaconventions.org/" className="mt-9 inline-flex items-center gap-4 border border-brand-gold bg-brand-gold px-6 py-4 font-display text-sm font-bold uppercase text-brand-blue">Register now <ArrowRight size={18}/></a></div>
        </div>
      </div>
    </section>

    <section id="activities" className="mx-auto max-w-[1480px] px-5 py-24 md:px-10 lg:py-32"><div className="flex flex-col justify-between gap-5 border-b border-foreground pb-7 md:flex-row md:items-end"><div><span className="section-index">02 / What’s happening</span><h2 className="mt-4 font-display text-5xl font-black uppercase md:text-7xl">In our community</h2></div><a href="https://www.odishasociety.org/activities/" className="font-display text-sm font-bold uppercase text-brand-red">View all activities ↗</a></div><div className="divide-y divide-border">{[
      ["Upcoming event","Odia Literature & Poetry: Smrutire Piladina","Feb 15 · 11 AM EST"],
      ["Call for entries","OSA National Drama Festival: Stand-up Comedy","Feb 28 · Online"],
      ["Important update","Nominations open for OSA Awards 2026","Now accepting"],
    ].map(([tag,title,date],i)=><a href="https://www.odishasociety.org/" key={title} className="group grid gap-4 py-8 transition-colors hover:bg-secondary md:grid-cols-[90px_1fr_auto] md:items-center md:px-4"><span className="font-display text-xs font-bold uppercase text-brand-red">{tag}</span><h3 className="font-display text-2xl font-bold md:text-3xl">{title}</h3><span className="flex items-center justify-between gap-5 text-sm text-muted-foreground">{date}<ArrowRight className="transition-transform group-hover:translate-x-2"/></span></a>)}</div></section>

    <section id="membership" className="grid bg-brand-blue text-brand-blue-foreground lg:grid-cols-[1.05fr_.95fr]"><div className="relative min-h-[520px]"><img src={odissiAsset.url} alt="Odissi dance, an expression of Odisha's living heritage" loading="lazy" className="absolute inset-0 h-full w-full object-cover grayscale-[15%]"/><div className="absolute bottom-6 left-6 bg-brand-gold px-4 py-3 font-display text-xs font-bold uppercase text-brand-blue">Culture carried forward</div></div><div className="flex flex-col justify-center px-5 py-20 md:px-14"><span className="section-index text-brand-gold">Belong to something larger</span><h2 className="mt-7 font-display text-5xl font-black uppercase leading-[.9] md:text-7xl">Be OSA.<br/>Be connected.</h2><p className="mt-8 max-w-xl text-lg leading-relaxed text-brand-blue-foreground/80">Membership is the satisfaction of belonging—being part of our community and cultural identity. Vote, participate, lead, and help shape OSA’s future.</p><a href="https://www.odishasociety.org/become-a-member/" className="mt-10 inline-flex w-fit items-center gap-4 bg-brand-red px-6 py-4 font-display text-sm font-bold uppercase">Join today <ArrowRight size={18}/></a></div></section>

    <section id="community" className="mx-auto max-w-[1480px] px-5 py-24 md:px-10 lg:py-32"><span className="section-index">03 / National executive team · 2025–2027</span><div className="mt-10 grid border-l border-t border-brand-blue sm:grid-cols-2 lg:grid-cols-4">{executives.map(([name,role],i)=><article key={name} className="meghanada-card min-h-64 border-b border-r border-brand-blue p-6"><div className="mb-20 flex items-start justify-between"><WheelMark className="h-12 w-12 text-brand-red"/><span className="font-display text-xs">0{i+1}</span></div><h3 className="font-display text-2xl font-bold">{name}</h3><p className="mt-2 text-sm uppercase text-muted-foreground">{role}</p></article>)}</div></section>

      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10"><div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]"><div><div className="logo-zone flex h-[100px] w-[280px] items-center"><img src={logoAsset.url} alt="OSA" width={92} height={33} className="h-auto w-full"/></div><p className="mt-6 max-w-sm text-sm leading-relaxed opacity-70">The Odisha Society of the Americas<br/>100 Powell Place #1722, Nashville, TN 37204</p></div><div><p className="footer-label">Connect</p><div className="mt-5 grid gap-3 text-sm"><a href="https://www.facebook.com/OdishaSocietyOfTheAmericas/">Facebook ↗</a><a href="https://www.youtube.com/c/TheOdishaSocietyoftheAmericas">YouTube ↗</a><a href="mailto:president@odishasociety.org">President@odishasociety.org</a></div></div><div><p className="footer-label">Explore</p><div className="mt-5 grid gap-3 text-sm"><a href="https://www.odishasociety.org/about-us/">About OSA</a><a href="https://www.odishasociety.org/membership-benefits/">Membership benefits</a><a href="https://www.odishasociety.org/contact-us/">Contact us</a></div></div></div><div className="mt-14 flex flex-col justify-between gap-3 border-t border-background/20 pt-6 text-xs opacity-55 md:flex-row"><span>© 2026 The Odisha Society of the Americas</span><span>One team · One family · One OSA</span></div></div></footer>
  </main>;
}