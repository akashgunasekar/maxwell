import React from "react";
import { ShieldCheck, Zap, Sparkles, Snowflake, Gauge } from "lucide-react";

export default function BenefitStrip() {
  const benefits = [
    {
      label: "SAFE",
      title: "Zero Flame Safety",
      description: "No open flame, red-hot coil, or radiant heat source. Automatic shutdown when cookware is lifted or contents boil out.",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      label: "FAST",
      title: "Direct Pan Heat",
      description: "Electromagnetic energy transfers directly into the pan metal. Heating starts immediately and stays precisely controllable.",
      icon: Zap,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      label: "CLEAN",
      title: "Smooth Glass Surface",
      description: "With no grates or grease catches to scrub, clean-up takes seconds. Spills do not bake onto the cooler ceramic glass surface.",
      icon: Sparkles,
      color: "text-sky-600",
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
    },
    {
      label: "COOL",
      title: "Low Ambient Heat",
      description: "Almost zero ambient heat is generated into kitchen workspace. Drastically reduces kitchen exhaust demand and air cooling loads.",
      icon: Snowflake,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
    {
      label: "EFFICIENT",
      title: "~90% Thermal Transfer",
      description: "Delivers approximately 90% energy efficiency directly into food, cutting operating energy costs by up to 60% compared to commercial LPG.",
      icon: Gauge,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
  ];

  return (
    <div className="w-full bg-slate-50 border-y border-slate-200 py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-800">
            Engineered For Excellence • Source-Documented Advantages
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.label}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition hover:border-sky-300 hover:shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className={`p-2 rounded-lg ${b.bgColor} ${b.color} border ${b.borderColor}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-black tracking-widest text-slate-900 uppercase">
                    {b.label}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">{b.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
