import { createFileRoute } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import React, { useState } from "react";
import { Heart, ShieldCheck, CheckCircle2, DollarSign, Building, Sparkles } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate to OSA | 501(c)(3) Tax-Deductible Charitable Giving" },
      {
        name: "description",
        content:
          "Support Odisha disaster relief, youth higher education scholarships, and cultural preservation through tax-deductible donations.",
      },
    ],
  }),
  component: DonatePage,
});

const causes = [
  {
    title: "Odisha Disaster Relief & Cyclone Emergency Aid",
    desc: "Immediate relief, food distribution, medical kits, and school rehabilitation during coastal cyclones and flooding.",
  },
  {
    title: "Youth Higher Education Scholarship Endowment",
    desc: "Merit-cum-means collegiate scholarships for promising Odia-American students entering undergraduate studies.",
  },
  {
    title: "OPLI: Odia Language Schools & Teaching Materials",
    desc: "Providing textbooks, digital learning software, and pedagogical resources to weekend Odia pathashalas.",
  },
  {
    title: "Classical Arts & Cultural Heritage Endowment",
    desc: "Supporting classical Odissi dance artists, musical ensembles, and indigenous weavers preserving endangered traditions.",
  },
];

const amounts = [50, 100, 250, 500, 1000];

function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number>(250);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedCause, setSelectedCause] = useState<string>(causes[0].title);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#B31842] text-white py-16 md:py-24 border-b-4 border-[#ECA445]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              501(c)(3) Public Charity · EIN Registered
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ସେବା ଓ ଦାନ ମାଧ୍ୟମରେ ସହଯୋଗ
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Donate to OSA
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-sans max-w-2xl">
              Your charitable contributions enable life-changing disaster relief, youth academic scholarships, and the propagation of Odia cultural heritage.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="chakra-blue" height={18} />

      {/* Main Content */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20">
        <div className="grid lg:grid-cols-[1.8fr_1.2fr] gap-12 items-start">
          {/* Donation Form */}
          <div className="bg-white border-2 border-[#141A24] p-8 md:p-12 shadow-xl">
            <h2 className="font-display text-3xl font-bold uppercase text-[#141A24] mb-2">
              Select Your Contribution
            </h2>
            <p className="text-xs text-[#6D737A] font-sans mb-8">
              All gifts are tax-deductible to the full extent allowable under US IRS regulations.
            </p>

            {submitted ? (
              <div className="p-8 bg-[#F6F1E7] border-2 border-[#B31842] text-center space-y-4">
                <CheckCircle2 size={48} className="text-[#B31842] mx-auto" />
                <h3 className="font-display text-2xl font-bold uppercase text-[#141A24]">
                  Thank You for Your Generosity!
                </h3>
                <p className="text-sm text-[#141A24]/85 leading-relaxed font-sans max-w-md mx-auto">
                  You are making an immediate, tangible impact. An automated receipt has been dispatched to your email for tax accounting purposes.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary text-xs mx-auto"
                >
                  Make Another Gift
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Designated Cause */}
                <div className="space-y-3">
                  <label className="font-display text-xs font-bold uppercase tracking-wider text-[#093060]">
                    1. Direct My Gift Toward:
                  </label>
                  <div className="space-y-2">
                    {causes.map((c) => (
                      <label
                        key={c.title}
                        className={`flex items-start gap-3 p-4 border-2 cursor-pointer transition-colors ${
                          selectedCause === c.title
                            ? "border-[#B31842] bg-[#F6F1E7]"
                            : "border-[#D1C5B4] hover:border-[#141A24]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="cause"
                          checked={selectedCause === c.title}
                          onChange={() => setSelectedCause(c.title)}
                          className="mt-1"
                        />
                        <div>
                          <p className="font-display text-sm font-bold uppercase text-[#141A24]">
                            {c.title}
                          </p>
                          <p className="text-xs text-[#6D737A] mt-0.5 font-sans">
                            {c.desc}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="space-y-3">
                  <label className="font-display text-xs font-bold uppercase tracking-wider text-[#093060]">
                    2. Select Donation Amount (USD):
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {amounts.map((amt) => (
                      <button
                        type="button"
                        key={amt}
                        onClick={() => {
                          setSelectedAmount(amt);
                          setCustomAmount("");
                        }}
                        className={`py-3 border-2 font-display text-lg font-black transition-colors ${
                          selectedAmount === amt && !customAmount
                            ? "bg-[#B31842] text-white border-[#B31842]"
                            : "border-[#141A24] bg-white text-[#141A24] hover:bg-[#F6F1E7]"
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-display uppercase tracking-wider text-[#6D737A] mb-1">
                      Or Custom Amount:
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 text-[#6D737A]" size={16} />
                      <input
                        type="number"
                        placeholder="Enter other amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          if (e.target.value) setSelectedAmount(Number(e.target.value));
                        }}
                        className="w-full pl-9 pr-4 py-2.5 border-2 border-[#141A24] text-sm font-display font-bold"
                      />
                    </div>
                  </div>
                </div>

                {/* Donor Details */}
                <div className="space-y-4 pt-4 border-t border-[#D1C5B4]/50">
                  <label className="font-display text-xs font-bold uppercase tracking-wider text-[#093060] block">
                    3. Donor Information:
                  </label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First & Last Name *"
                      required
                      className="w-full px-4 py-2.5 border border-[#141A24] text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Email Address (for tax receipt) *"
                      required
                      className="w-full px-4 py-2.5 border border-[#141A24] text-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#B31842] text-white font-display text-sm font-bold uppercase tracking-widest hover:bg-[#901334] transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Heart size={16} className="fill-white" /> Complete Donation of ${customAmount ? customAmount : selectedAmount}
                </button>
              </form>
            )}
          </div>

          {/* Right Sidebar: Other Payment Methods & Employer Match */}
          <div className="space-y-6">
            <div className="bg-[#093060] text-white p-8 border-2 border-[#141A24] space-y-4">
              <ShieldCheck size={28} className="text-[#ECA445]" />
              <h3 className="font-display text-xl font-bold uppercase text-[#ECA445]">
                Direct Giving via Zelle or Check
              </h3>
              <p className="text-xs text-[#F6F1E7]/85 leading-relaxed font-sans">
                Prefer zero transaction fees? You can donate directly through Zelle or mail a check payable to:
              </p>
              <div className="bg-black/20 p-4 font-mono text-xs text-[#F6F1E7] space-y-2 border border-white/20">
                <p><strong>Zelle:</strong> treasurer@odishasociety.org</p>
                <p><strong>Mailing Address:</strong><br />The Odisha Society of the Americas<br />100 Powell Place #1722<br />Nashville, TN 37204</p>
              </div>
            </div>

            <div className="bg-white border-2 border-[#141A24] p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#093060]">
                <Building size={20} />
                <h4 className="font-display text-sm font-bold uppercase">Corporate Matching Gifts</h4>
              </div>
              <p className="text-xs text-[#141A24]/80 leading-relaxed font-sans">
                Many employers (Microsoft, Google, Apple, Amazon, Intel, Boeing) match employee charitable donations 1:1. Search your corporate benefits portal for "The Odisha Society of the Americas" to double your impact!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
