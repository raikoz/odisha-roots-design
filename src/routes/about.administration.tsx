import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import { MeghanadaCard } from "../components/MeghanadaCard";
import { Shield, Mail, Users, Award, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/about/administration")({
  head: () => ({
    meta: [
      { title: "Administration & Leadership | The Odisha Society of the Americas" },
      {
        name: "description",
        content:
          "Executive Officers, Board of Governors (BOG), and Chapter Representatives leading OSA for the 2025–2027 term.",
      },
    ],
  }),
  component: AdministrationPage,
});

const executives = [
  {
    name: "Nageswar Rajanala",
    role: "President",
    term: "2025–2027",
    email: "president@odishasociety.org",
    num: "01",
    odia: "ସଭାପତି",
    bio: "Guiding strategic vision, pan-American cultural partnerships, institutional development, and international youth outreach.",
  },
  {
    name: "Utkal Nayak",
    role: "Vice President",
    term: "2025–2027",
    email: "vp@odishasociety.org",
    num: "02",
    odia: "ଉପ-ସଭାପତି",
    bio: "Directing chapter affairs, convention coordination, and cross-chapter volunteer mobilization.",
  },
  {
    name: "Snigdha Hota",
    role: "Secretary",
    term: "2025–2027",
    email: "secretary@odishasociety.org",
    num: "03",
    odia: "ସମ୍ପାଦିକା",
    bio: "Managing institutional archives, annual secretarial reports, national correspondence, and governance documentation.",
  },
  {
    name: "Sanjeeb Rout",
    role: "Treasurer",
    term: "2025–2027",
    email: "treasurer@odishasociety.org",
    num: "04",
    odia: "କୋଷାଧ୍ୟକ୍ଷ",
    bio: "Fiduciary management, 501(c)(3) tax reporting, budget planning, and treasury disbursements.",
  },
];

const bogMembers = [
  { region: "California (San Francisco Bay)", rep: "Pradosh Mohanty", term: "2025–2027" },
  { region: "Mid-Atlantic Chapter", rep: "Debashis Mohapatra", term: "2025–2027" },
  { region: "New England Chapter", rep: "Suchitra Mishra", term: "2025–2027" },
  { region: "Midwest Chapter (Chicago)", rep: "Alok Dash", term: "2025–2027" },
  { region: "Texas Chapter (Houston/Dallas)", rep: "Bijay Mohapatra", term: "2025–2027" },
  { region: "Canada Chapter (Toronto/Ottawa)", rep: "Ranjan Pattnaik", term: "2025–2027" },
  { region: "Southern Chapter (Atlanta)", rep: "Manoj Senapati", term: "2025–2027" },
  { region: "Pacific Northwest (Seattle)", rep: "Smita Behera", term: "2025–2027" },
];

function AdministrationPage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              Executive Governance · 2025–2027 Term
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              କାର୍ଯ୍ୟକାରୀ କମିଟି ଓ ପ୍ରଶାସନିକ ପରିଷଦ
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Administration
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              Meet the volunteer executive leaders and Board of Governors dedicated to advancing Odia culture and diaspora welfare across the United States and Canada.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="chakra-blue" height={18} />

      {/* Main Content */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20 space-y-16">
        {/* Section 1: Executive Officers */}
        <div>
          <div className="border-b-2 border-[#141A24] pb-4 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="section-kicker text-[#B31842]">National Office</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#141A24]">
                National Executive Committee (2025–2027)
              </h2>
            </div>
            <p className="text-xs font-display uppercase tracking-wider text-[#6D737A]">
              Elected by General Membership
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {executives.map((exec) => (
              <MeghanadaCard
                key={exec.name}
                title={exec.name}
                role={exec.role}
                odiaTitle={exec.odia}
                number={exec.num}
                variant="default"
                subtitle={exec.term}
              >
                <p className="text-xs text-[#141A24]/80 leading-relaxed font-sans mb-4">
                  {exec.bio}
                </p>
                <a
                  href={`mailto:${exec.email}`}
                  className="inline-flex items-center gap-1.5 text-[11px] font-display uppercase font-bold text-[#B31842] hover:underline"
                >
                  <Mail size={12} /> {exec.email}
                </a>
              </MeghanadaCard>
            ))}
          </div>
        </div>

        {/* Section 2: Board of Governors (BOG) */}
        <div>
          <div className="border-b-2 border-[#141A24] pb-4 mb-10">
            <span className="section-kicker text-[#093060]">Policy & Legislative Body</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#141A24]">
              Board of Governors (BOG) Representatives
            </h2>
            <p className="text-sm text-[#6D737A] mt-1 font-sans">
              Comprising Chapter Presidents and elected regional representatives representing regional Odia populations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bogMembers.map((bog, i) => (
              <div
                key={bog.region}
                className="bg-white border-2 border-[#D1C5B4] p-5 hover:border-[#093060] transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-[#6D737A] mb-2 font-display">
                  <span>Region 0{i + 1}</span>
                  <span className="text-[#B31842] font-bold">{bog.term}</span>
                </div>
                <h4 className="font-display text-sm font-bold uppercase text-[#093060] mb-1">
                  {bog.region}
                </h4>
                <p className="font-display text-base font-bold text-[#141A24]">
                  {bog.rep}
                </p>
                <p className="text-xs text-[#6D737A] mt-1">BOG Representative</p>
              </div>
            ))}
          </div>
        </div>

        {/* Callout */}
        <div className="p-8 bg-[#093060] text-white border-2 border-[#141A24] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <h3 className="font-display text-2xl font-bold uppercase text-[#ECA445]">
              Interested in Serving on an OSA Committee?
            </h3>
            <p className="text-xs text-white/80 max-w-xl">
              From Urmi Editorial teams to the youth development council, OSA committees are powered entirely by enthusiastic volunteers across North America.
            </p>
          </div>
          <Link to="/about/forms" className="btn-gold text-xs whitespace-nowrap">
            Volunteer Application Form
          </Link>
        </div>
      </div>
    </div>
  );
}
