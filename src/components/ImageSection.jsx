import { Eye, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const ImageSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="image"
      className="py-24 px-4 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Ambient glows */}
      <div className="absolute -right-32 top-1/3 w-[400px] h-[400px] rounded-full bg-[#e67300]/5 blur-[90px] pointer-events-none" />
      <div className="absolute -left-20 bottom-10 w-[300px] h-[300px] rounded-full bg-[#b34700]/5 blur-[70px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(230,115,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(230,115,0,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto max-w-4xl relative z-10">

        {/* Heading */}
        <div
          className="text-center mb-14"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#e67300]/60 tracking-widest uppercase mb-4">
            <span className="w-6 h-px bg-[#e67300]/40" />
            Milestones
            <span className="w-6 h-px bg-[#e67300]/40" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            My <span className="text-[#e67300]">Achievement</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#e67300] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Card */}
        <div
          className="flex justify-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
            transition: "opacity 0.8s ease 0.25s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.25s",
          }}
        >
          <div className="group relative max-w-md w-full">

            {/* Outer glow ring on hover */}
            <div
              className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(230,115,0,0.5), rgba(179,71,0,0.3), transparent 60%)",
              }}
            />

            <div
              className="relative rounded-2xl overflow-hidden border border-[#e67300]/25 bg-background"
              style={{
                boxShadow: "0 8px 40px rgba(230,115,0,0.12), 0 2px 8px rgba(0,0,0,0.15)",
              }}
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-[#e67300]/30">
                <Award className="h-3.5 w-3.5 text-[#e67300]" />
                <span className="font-mono text-[10px] text-[#e67300] tracking-widest uppercase">Achievement</span>
              </div>

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-20 h-20 pointer-events-none z-10"
                style={{
                  background: "linear-gradient(225deg, rgba(230,115,0,0.2) 0%, transparent 60%)",
                }}
              />

              {/* Image */}
              <div className="h-72 overflow-hidden relative">
                <img
                  src="/achievements/achievement.jpeg"
                  alt="Achievement"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(to top, rgba(230,115,0,0.15) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Bottom panel */}
              <div className="p-5 flex items-center justify-between border-t border-[#e67300]/15">
                <div>
                  <p className="font-syne text-sm font-semibold">Cleared IIT JEE Advanced</p>
                  <p className="font-mono text-[11px] text-muted-foreground mt-0.5">AIR Under 10000 in 2023</p>
                </div>

                <a
                  href="/achievements/achievement.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter inline-flex items-center gap-2 px-4 py-2
                    border-[1.5px] border-[#e67300] rounded-lg
                    text-[#e67300] text-sm font-medium no-underline
                    hover:bg-[#e67300]/10 hover:gap-3
                    transition-all duration-300"
                >
                  View <Eye size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};