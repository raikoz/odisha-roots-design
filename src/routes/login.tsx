import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import React, { useState } from "react";
import { LogIn, Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Member Sign In | The Odisha Society of the Americas" },
      {
        name: "description",
        content:
          "Sign in to your OSA member portal to access the family directory, convention discounts, and voting ballots.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setSignedIn(true);
  };

  return (
    <div className="bg-[#F6F1E7] text-[#141A24] min-h-[80vh] flex flex-col justify-center py-16">
      <div className="mx-auto max-w-md w-full px-5">
        <div className="bg-white border-4 border-[#141A24] p-8 md:p-10 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#B31842]">
              Member Access
            </span>
            <p className="font-odia text-xl text-[#093060] font-semibold">
              ସଦସ୍ୟ ପ୍ରବେଶ
            </p>
            <h1 className="font-display text-3xl font-black uppercase text-[#141A24]">
              Sign In to OSA
            </h1>
          </div>

          {signedIn ? (
            <div className="p-6 bg-[#F6F1E7] border-2 border-[#093060] text-center space-y-3">
              <ShieldCheck size={36} className="text-[#093060] mx-auto" />
              <h3 className="font-display text-lg font-bold uppercase">Welcome Back!</h3>
              <p className="text-xs text-[#141A24]/80 font-sans">
                You are currently signed in as {email}. Accessing membership directory and convention benefits.
              </p>
              <Link to="/members/benefits" className="btn-primary text-xs mx-auto">
                Go to Member Benefits
              </Link>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-display font-bold uppercase tracking-wider text-[#141A24] mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-[#6D737A]" size={16} />
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 border-2 border-[#141A24] text-sm font-sans"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-display font-bold uppercase tracking-wider text-[#141A24]">
                    Password
                  </label>
                  <a href="#" className="text-[11px] text-[#B31842] hover:underline font-display">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-[#6D737A]" size={16} />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 border-2 border-[#141A24] text-sm font-sans"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#B31842] text-white font-display text-xs font-bold uppercase tracking-widest hover:bg-[#901334] transition-colors flex items-center justify-center gap-2"
              >
                <LogIn size={14} /> Sign In to Portal
              </button>
            </form>
          )}

          <div className="pt-4 border-t border-[#D1C5B4]/50 text-center">
            <p className="text-xs text-[#6D737A] font-sans">
              Don't have an active membership yet?
            </p>
            <Link
              to="/register"
              className="mt-2 inline-block font-display text-xs font-bold uppercase text-[#093060] hover:underline"
            >
              Become a Member Today ↗
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
