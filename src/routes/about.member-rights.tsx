import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import { ShieldCheck, CheckCircle, Scale, FileText, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about/member-rights")({
  head: () => ({
    meta: [
      { title: "Statement of Member Rights & Privileges | OSA" },
      {
        name: "description",
        content:
          "Official Bill of Rights defining democratic entitlements, fairness, and governance transparency for every OSA member.",
      },
    ],
  }),
  component: MemberRightsPage,
});

const rights = [
  {
    num: "01",
    title: "Equal Voice & Non-Discrimination",
    desc: "Every member in good standing is entitled to equal dignity, full inclusion, and respect regardless of caste, creed, religion, gender, or professional status.",
  },
  {
    num: "02",
    title: "Participation in Annual General Body Meeting (AGBM)",
    desc: "Every active member has the fundamental constitutional right to attend, voice opinions, propose motions, and deliberate at the Annual General Body Meeting during the National Convention.",
  },
  {
    num: "03",
    title: "Secret & Transparent Voting Franchise",
    desc: "Every eligible voting member possesses an uncompromised right to cast a confidential ballot in biennial executive elections, BOG referendums, and constitutional amendments.",
  },
  {
    num: "04",
    title: "Right to Stand for Elected Office",
    desc: "Every Permanent Life Member in good standing possesses the unqualified right to file a nomination and campaign for elected Chapter and National offices in accordance with the election guidelines.",
  },
  {
    num: "05",
    title: "Fiscal Transparency & Inspection of Accounts",
    desc: "Members have the right to review the annual audited financial statements, treasury reports, convention balance sheets, and IRS 990 filings presented by the Treasurer.",
  },
  {
    num: "06",
    title: "Due Process & Impartial Grievance Redressal",
    desc: "Any disciplinary matter or grievance involving a member shall be handled strictly according to constitutional due process, with fair notice, impartial hearings, and right to appeal to the BOG.",
  },
];

function MemberRightsPage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              Constitutional Rights & Protections
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ସଭ୍ୟମାନଙ୍କ ଅଧିକାର ଓ ସୁବିଧା ସୁଯୋଗ
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Member Rights & Privileges
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              Codified protections ensuring democratic dignity, transparency, and fairness for every individual belonging to The Odisha Society of the Americas.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="pacheri-stone" height={18} />

      {/* Main Content */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20">
        <div className="grid lg:grid-cols-[1.8fr_1fr] gap-12 items-start">
          <div className="space-y-6">
            <div className="border-b-2 border-[#141A24] pb-4 mb-8">
              <h2 className="font-display text-3xl font-bold uppercase text-[#141A24]">
                The Member Bill of Rights
              </h2>
              <p className="text-sm text-[#6D737A]">
                Guaranteed by the Constitution and enforced by the Board of Governors.
              </p>
            </div>

            <div className="space-y-4">
              {rights.map((r) => (
                <div
                  key={r.num}
                  className="bg-white border-2 border-[#D1C5B4] p-6 hover:border-[#B31842] transition-colors flex gap-6 items-start"
                >
                  <span className="font-display font-black text-2xl text-[#B31842]">
                    {r.num}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase text-[#141A24] mb-2">
                      {r.title}
                    </h3>
                    <p className="text-sm text-[#141A24]/85 leading-relaxed font-sans">
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-[#B31842] text-white p-6 border-2 border-[#141A24] space-y-3">
              <Scale size={28} className="text-[#ECA445]" />
              <h3 className="font-display text-lg font-bold uppercase">Constitutional Sanctity</h3>
              <p className="text-xs text-white/90 leading-relaxed">
                No executive officer, chapter board, or convention committee possesses the authority to abridge these codified privileges without General Body referendum.
              </p>
            </div>

            <div className="bg-white border-2 border-[#141A24] p-6 space-y-4">
              <h4 className="font-display text-sm font-bold uppercase text-[#093060] border-b pb-2">
                Member Portal Quick Links
              </h4>
              <ul className="space-y-2 text-xs font-display uppercase tracking-wider">
                <li>
                  <Link to="/members/benefits" className="text-[#B31842] hover:underline flex items-center gap-1">
                    <ArrowRight size={12} /> Member Benefits & Tiers
                  </Link>
                </li>
                <li>
                  <Link to="/constitution" className="text-[#B31842] hover:underline flex items-center gap-1">
                    <ArrowRight size={12} /> Full Constitution & Bylaws
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="text-[#B31842] hover:underline flex items-center gap-1">
                    <ArrowRight size={12} /> Become a Member Today
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
