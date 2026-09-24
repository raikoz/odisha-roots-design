import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import { HeartHandshake, GraduationCap, Stethoscope, BookOpen, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Programs & Humanitarian Services | OSA" },
      {
        name: "description",
        content:
          "Charitable initiatives, Odia language schools, disaster relief, student scholarships, and medical support organized by OSA.",
      },
    ],
  }),
  component: ServicesPage,
});

const programs = [
  {
    icon: HeartHandshake,
    title: "Odisha Disaster Relief & Humanitarian Aid",
    odia: "ବିପର୍ଯ୍ୟୟ ସହାୟତା",
    desc: "Rapid mobilization of relief supplies, clean water filtration, school repairs, and cyclone rehabilitation funds directly sent to affected districts in Odisha.",
  },
  {
    icon: BookOpen,
    title: "OPLI: Odia Pathashala Language Initiative",
    odia: "ଓଡ଼ିଆ ଭାଷା ଶିକ୍ଷା",
    desc: "Weekend language classes taught across North America, introducing young children to reading, writing, and speaking Odia with structured cultural curriculums.",
  },
  {
    icon: GraduationCap,
    title: "Higher Education Mentorship & Grants",
    odia: "ଉଚ୍ଚଶିକ୍ଷା ମାର୍ଗଦର୍ଶନ",
    desc: "Mentoring high school seniors on collegiate applications, undergraduate scholarships, STEM research opportunities, and professional internships.",
  },
  {
    icon: Stethoscope,
    title: "Health & Telemedicine Consultations",
    odia: "ସ୍ୱାସ୍ଥ୍ୟ ସେବା",
    desc: "Connecting community families with board-certified Odia-American physicians for health webinars, specialty advice, and international telemedicine camps in Odisha.",
  },
  {
    icon: Users,
    title: "OSA Women's Leadership Forum",
    odia: "ମହିଳା ମଞ୍ଚ",
    desc: "Empowering diaspora women through professional summits, entrepreneurship showcases, cultural arts preservation, and community leadership councils.",
  },
];

function ServicesPage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              Community Welfare & Charitable Action
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ସମାଜ ସେବା ଓ ଜନକଲ୍ୟାଣ କାର୍ଯ୍ୟକ୍ରମ
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Programs & Services
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              Fulfilling Article II of our constitution through dedicated humanitarian service, youth language schools, disaster relief, and health support.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="pacheri-stone" height={18} />

      {/* Main Content */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20 space-y-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p) => (
            <div
              key={p.title}
              className="bg-white border-2 border-[#D1C5B4] p-8 hover:border-[#B31842] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-[#F6F1E7] border border-[#B31842] flex items-center justify-center text-[#B31842] mb-6">
                  <p.icon size={24} />
                </div>
                <span className="font-odia text-xs font-semibold text-[#093060]">
                  {p.odia}
                </span>
                <h3 className="font-display text-xl font-bold uppercase text-[#141A24] mb-3 mt-1">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#141A24]/80 leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-[#D1C5B4]/30 mt-6">
                <Link
                  to="/donate"
                  className="font-display text-xs font-bold uppercase tracking-wider text-[#B31842] hover:underline flex items-center gap-1"
                >
                  Support this Program <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Give Back Callout */}
        <div className="p-8 md:p-12 bg-[#B31842] text-white border-4 border-[#141A24] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-3 max-w-2xl">
            <h3 className="font-display text-3xl font-black uppercase text-white">
              Every Dollar Directly Empowers Odisha & Our Youth
            </h3>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-sans">
              OSA is a 100% volunteer-run 501(c)(3) public charity. 100% of dedicated donations reach designated humanitarian relief, language schools, and student scholarships.
            </p>
          </div>
          <Link to="/donate" className="btn-gold text-xs whitespace-nowrap">
            Make a Tax-Deductible Donation <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
