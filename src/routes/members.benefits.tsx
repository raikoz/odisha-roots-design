import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import { CheckCircle2, Vote, BookOpen, Sparkles, Shield, ArrowRight, Star } from "lucide-react";

export const Route = createFileRoute("/members/benefits")({
  head: () => ({
    meta: [
      { title: "Membership Benefits & Privileges | The Odisha Society of the Americas" },
      {
        name: "description",
        content:
          "Discover the lifetime advantages of joining OSA: voting rights, annual Urmi souvenir, convention fee waivers, and community fellowship.",
      },
    ],
  }),
  component: MemberBenefitsPage,
});

const keyBenefits = [
  {
    icon: Vote,
    title: "Democratic Voting Franchise",
    desc: "Exercise your constitutional voting franchise in national and regional chapter elections. Vote on constitutional amendments, resolutions, and executive leadership.",
  },
  {
    icon: BookOpen,
    title: "Annual Urmi Souvenir & Directory",
    desc: "Receive the deluxe print or digital edition of Urmi, our annual cultural anthology and comprehensive North American Odia family directory.",
  },
  {
    icon: Star,
    title: "Convention Fee Exemption",
    desc: "Permanent OSA members are completely exempt from the non-member fee surcharge when registering for the Annual OSA Convention, saving hundreds per family.",
  },
  {
    icon: Award,
    title: "Nomination & Leadership Eligibility",
    desc: "Only active OSA members possess the privilege to nominate deserving achievers for OSA National Awards and run for Chapter and National Executive office.",
  },
  {
    icon: Shield,
    title: "Emergency & Disaster Relief Network",
    desc: "Direct access to emergency diaspora mutual support networks, community welfare committees, bereavement support, and legal guidance.",
  },
  {
    icon: Sparkles,
    title: "Youth Mentorship & Scholarships",
    desc: "Connect your children with high-achieving Odia-American professionals in medicine, engineering, business, civil service, and classical arts.",
  },
];

const tiers = [
  {
    name: "Permanent / Life Member",
    price: "$350",
    cadence: "One-Time Family",
    highlight: true,
    features: [
      "Lifetime voting rights for husband & wife",
      "Annual printed Urmi Souvenir mailed home",
      "Full convention fee waiver forever",
      "Eligible to run for all National & Chapter offices",
      "Can nominate candidates for OSA Awards",
      "Lifetime inclusion in North American Odia Directory",
    ],
  },
  {
    name: "Benefactor Member",
    price: "$1,000",
    cadence: "One-Time Contribution",
    highlight: false,
    features: [
      "All Permanent Life Membership privileges",
      "Permanent listing on the OSA Benefactor Wall",
      "Special convention VIP reception invitation",
      "Direct sponsorship of youth educational grants",
      "Dedicated acknowledgment in Urmi annual edition",
    ],
  },
  {
    name: "Annual Family Member",
    price: "$40",
    cadence: "Per Calendar Year",
    highlight: false,
    features: [
      "Voting rights during active membership year",
      "Digital access to Urmi Souvenir and Utkarsa",
      "Annual convention registration discount",
      "Chapter cultural event participation",
      "Option to convert to Life Membership anytime",
    ],
  },
  {
    name: "Student Member",
    price: "$15",
    cadence: "Per Calendar Year",
    highlight: false,
    features: [
      "Discounted student convention entry",
      "Access to professional mentorship network",
      "Internship & career guidance forums",
      "Utkarsa digital newsletter subscription",
    ],
  },
];

function MemberBenefitsPage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              Belonging & Privileges
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ସଭ୍ୟପଦ ଓ ଏହାର ମହତ୍ତ୍ୱପୂର୍ଣ୍ଣ ସୁବିଧା
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Member Benefits
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              Join over 10,000 Odia-American families across the United States and Canada who take pride in anchoring our collective voice, traditions, and youth.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="chakra-red" height={18} />

      {/* 6 Core Benefits Grid */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20">
        <div className="border-b-2 border-[#141A24] pb-4 mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#141A24]">
            Why Join The Odisha Society of the Americas?
          </h2>
          <p className="text-sm text-[#6D737A] mt-1 font-sans">
            Guaranteed constitutional rights and community advantages reserved for active members.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyBenefits.map((b) => (
            <div
              key={b.title}
              className="bg-white border-2 border-[#D1C5B4] p-8 hover:border-[#B31842] transition-colors group"
            >
              <div className="w-12 h-12 bg-[#F6F1E7] border border-[#B31842] flex items-center justify-center text-[#B31842] mb-6 group-hover:bg-[#B31842] group-hover:text-white transition-colors">
                <b.icon size={24} />
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-[#141A24] mb-3">
                {b.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#141A24]/80 leading-relaxed font-sans">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Membership Tiers Comparison */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="section-kicker text-[#B31842]">Membership Tiers</span>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-[#141A24]">
              Choose Your Membership
            </h2>
            <p className="text-sm text-[#6D737A]">
              Join today and enjoy immediate access to convention fee waivers, voting rights, and the member portal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`bg-white border-4 ${
                  t.highlight
                    ? "border-[#B31842] shadow-2xl relative"
                    : "border-[#141A24]"
                } p-6 flex flex-col justify-between`}
              >
                {t.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B31842] text-white px-3 py-0.5 font-display text-[10px] font-black uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-[#141A24] mb-2">
                    {t.name}
                  </h3>
                  <div className="mb-6">
                    <span className="font-display text-4xl font-black text-[#093060]">
                      {t.price}
                    </span>
                    <span className="text-xs text-[#6D737A] block font-display uppercase tracking-wider">
                      {t.cadence}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {t.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-[#141A24]/85">
                        <CheckCircle2 size={14} className="text-[#B31842] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/register"
                  className={`w-full text-center py-3 font-display text-xs font-bold uppercase tracking-wider transition-colors ${
                    t.highlight
                      ? "bg-[#B31842] text-white hover:bg-[#901334]"
                      : "bg-[#141A24] text-white hover:bg-[#093060]"
                  }`}
                >
                  Select {t.name.split(" ")[0]}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
