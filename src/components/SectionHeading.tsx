import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 lg:mb-14 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-sky-800 mb-3 border border-sky-200">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-600"></span>
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
