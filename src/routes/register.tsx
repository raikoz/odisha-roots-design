import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import React, { useState } from "react";
import { UserPlus, CheckCircle2, ShieldCheck, Heart, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Become a Member | The Odisha Society of the Americas" },
      {
        name: "description",
        content:
          "Register for permanent life or annual family membership in The Odisha Society of the Americas.",
      },
    ],
  }),
  component: RegisterPage,
});

const tiers = [
  { id: "permanent", name: "Permanent Life Member", price: "$350", desc: "One-time family contribution, lifetime voting rights and convention discounts." },
  { id: "benefactor", name: "Benefactor Member", price: "$1,000", desc: "Permanent benefactor recognition, endowment support, and VIP reception." },
  { id: "annual", name: "Annual Family Member", price: "$40", desc: "Valid for 1 calendar year across all chapter and national activities." },
  { id: "student", name: "Student Member", price: "$15", desc: "Discounted membership for undergraduate and graduate collegiate youth." },
];

const chapters = [
  "California Chapter",
  "Southern California Chapter",
  "Pacific Northwest Chapter",
  "Midwest Chapter (Chicago)",
  "Michigan Chapter",
  "Ohio Chapter",
  "New England Chapter",
  "New Jersey Chapter",
  "New York Chapter",
  "Mid-Atlantic Chapter",
  "Carolinas Chapter",
  "Southern Chapter (Atlanta)",
  "Florida Chapter",
  "Southwest Texas Chapter",
  "Canada Chapter",
  "Other / Unaffiliated",
];

function RegisterPage() {
  const [selectedTier, setSelectedTier] = useState("permanent");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              Membership Enrollment
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ନୂତନ ସଦସ୍ୟ ପଞ୍ଜୀକରଣ
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Become a Member
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              Take your place within our continental Odia family. Enjoy permanent voting rights, cultural preservation, and youth educational programs.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="chakra-red" height={18} />

      {/* Main Content */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20">
        <div className="grid lg:grid-cols-[1.8fr_1.2fr] gap-12 items-start">
          {/* Registration Form */}
          <div className="bg-white border-2 border-[#141A24] p-8 md:p-12 shadow-xl">
            {submitted ? (
              <div className="p-8 bg-[#F6F1E7] border-2 border-[#B31842] text-center space-y-4">
                <CheckCircle2 size={48} className="text-[#B31842] mx-auto" />
                <h3 className="font-display text-2xl font-bold uppercase text-[#141A24]">
                  Membership Application Received!
                </h3>
                <p className="text-sm text-[#141A24]/85 leading-relaxed font-sans max-w-md mx-auto">
                  Thank you for joining The Odisha Society of the Americas. An official welcome packet and registration confirmation has been sent to your email.
                </p>
                <Link to="/members/benefits" className="btn-primary text-xs mx-auto">
                  View Member Benefits
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Select Tier */}
                <div className="space-y-3">
                  <h3 className="font-display text-base font-bold uppercase text-[#093060] border-b pb-2">
                    1. Select Membership Category
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {tiers.map((t) => (
                      <label
                        key={t.id}
                        className={`p-4 border-2 cursor-pointer transition-colors flex flex-col justify-between ${
                          selectedTier === t.id
                            ? "border-[#B31842] bg-[#F6F1E7]"
                            : "border-[#D1C5B4] hover:border-[#141A24]"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <input
                              type="radio"
                              name="tier"
                              checked={selectedTier === t.id}
                              onChange={() => setSelectedTier(t.id)}
                              className="mr-2"
                            />
                            <span className="font-display text-sm font-bold uppercase text-[#141A24]">
                              {t.name}
                            </span>
                          </div>
                          <span className="font-display text-base font-black text-[#B31842]">
                            {t.price}
                          </span>
                        </div>
                        <p className="text-xs text-[#6D737A] mt-2 font-sans">
                          {t.desc}
                        </p>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Step 2: Primary Applicant Information */}
                <div className="space-y-4">
                  <h3 className="font-display text-base font-bold uppercase text-[#093060] border-b pb-2">
                    2. Primary Member Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-display uppercase font-bold text-[#141A24] mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 border border-[#141A24] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-display uppercase font-bold text-[#141A24] mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 border border-[#141A24] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-display uppercase font-bold text-[#141A24] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2.5 border border-[#141A24] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-display uppercase font-bold text-[#141A24] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-2.5 border border-[#141A24] text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 3: Residential Address & Chapter */}
                <div className="space-y-4">
                  <h3 className="font-display text-base font-bold uppercase text-[#093060] border-b pb-2">
                    3. Address & Regional Chapter
                  </h3>
                  <div>
                    <label className="block text-xs font-display uppercase font-bold text-[#141A24] mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 border border-[#141A24] text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-display uppercase font-bold text-[#141A24] mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 border border-[#141A24] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-display uppercase font-bold text-[#141A24] mb-1">
                        State / Province *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 border border-[#141A24] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-display uppercase font-bold text-[#141A24] mb-1">
                        ZIP / Postal Code *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 border border-[#141A24] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-display uppercase font-bold text-[#141A24] mb-1">
                      Select Your Regional Chapter *
                    </label>
                    <select
                      className="w-full px-4 py-2.5 border border-[#141A24] text-sm bg-white"
                      required
                    >
                      {chapters.map((ch) => (
                        <option key={ch} value={ch}>
                          {ch}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#B31842] text-white font-display text-sm font-bold uppercase tracking-widest hover:bg-[#901334] transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <UserPlus size={16} /> Submit Membership Registration
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-[#093060] text-white p-8 border-2 border-[#141A24] space-y-4">
              <ShieldCheck size={28} className="text-[#ECA445]" />
              <h3 className="font-display text-xl font-bold uppercase text-[#ECA445]">
                Why Permanent Membership?
              </h3>
              <ul className="space-y-2.5 text-xs text-[#F6F1E7]/85 font-sans leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#ECA445] shrink-0 mt-0.5" />
                  <span>Never pay non-member surcharges at any annual convention.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#ECA445] shrink-0 mt-0.5" />
                  <span>Receive the deluxe print Urmi Souvenir mailed directly to your home every year.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#ECA445] shrink-0 mt-0.5" />
                  <span>Lifetime constitutional franchise to vote and run for national and chapter offices.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#141A24] p-6 space-y-3">
              <p className="font-display text-xs font-bold uppercase text-[#141A24]">
                Already a Member?
              </p>
              <p className="text-xs text-[#6D737A]">
                Sign in to verify your membership credentials or update your family directory address.
              </p>
              <Link to="/login" className="btn-outline text-xs block text-center text-[#141A24]">
                Sign In to Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
