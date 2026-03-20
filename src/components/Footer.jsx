import { ArrowUp } from "lucide-react";

// Fixed star positions to avoid re-render randomness
const STARS = [
  { top: 8,  left: 12, big: false }, { top: 15, left: 34, big: true  },
  { top: 5,  left: 55, big: false }, { top: 22, left: 78, big: false },
  { top: 35, left: 6,  big: true  }, { top: 42, left: 45, big: false },
  { top: 18, left: 90, big: false }, { top: 60, left: 22, big: false },
  { top: 70, left: 67, big: true  }, { top: 12, left: 72, big: false },
  { top: 48, left: 88, big: false }, { top: 30, left: 18, big: false },
  { top: 55, left: 50, big: true  }, { top: 78, left: 10, big: false },
  { top: 25, left: 62, big: false }, { top: 65, left: 38, big: false },
  { top: 10, left: 42, big: false }, { top: 50, left: 75, big: true  },
  { top: 38, left: 95, big: false }, { top: 72, left: 82, big: false },
  { top: 20, left: 28, big: false }, { top: 44, left: 14, big: true  },
  { top: 80, left: 55, big: false }, { top: 58, left: 30, big: false },
  { top: 14, left: 85, big: false }, { top: 32, left: 70, big: false },
  { top: 68, left: 48, big: true  }, { top: 85, left: 25, big: false },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[#e67300]/10 bg-background">

      {/* Ambient warm glow — center top */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[320px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(150,70,0,0.30) 0%, rgba(100,40,0,0.10) 45%, transparent 72%)",
        }}
      />

      {/* Starfield */}
      {STARS.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            width:   s.big ? "2px" : "1px",
            height:  s.big ? "2px" : "1px",
            top:    `${s.top}%`,
            left:   `${s.left}%`,
            opacity: s.big ? 0.22 : 0.10,
          }}
        />
      ))}

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Quote — clearly above the name */}
        <div className="pt-14 pb-6 px-6 text-center">
          <p
            className="text-white/85 max-w-md leading-relaxed mb-2"
            style={{
              fontFamily: "'Caveat', 'Segoe Script', cursive",
              fontSize: "clamp(1.1rem, 2.8vw, 1.5rem)",
              textShadow: "0 2px 16px rgba(0,0,0,0.6)",
            }}
          >
            &quot; Your most unhappy customers are your greatest source of learning &quot;
          </p>
          <p
            className="text-white/35"
            style={{
              fontFamily: "'Caveat', 'Segoe Script', cursive",
              fontSize: "0.95rem",
            }}
          >
            — Bill Gates
          </p>
        </div>
        <div className="relative w-full text-center pointer-events-none select-none">
          <span
            className="font-display font-black uppercase block"
            style={{
              fontSize: "clamp(72px, 18vw, 200px)",
              letterSpacing: "0.08em",
              lineHeight: 1,
              color: "rgba(255,255,255,0.08)",
            }}
          >
            ANSHUL
          </span>
          <div
            className="absolute inset-x-0 bottom-0 h-full pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 20%, hsl(var(--background)) 80%)",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 px-6 py-5 flex items-center justify-center border-t border-white/5">
        <p className="font-mono text-[11px] text-muted-foreground/40 tracking-[0.2em] uppercase flex items-center gap-4">
          <span>
            Designed &amp; Built by{" "}
            <span className="text-[#e67300]/55 font-semibold">Anshul Shukla</span>
          </span>
        </p>

        <a
          href="#hero"
          className="absolute right-6 p-2 rounded-lg border border-[#e67300]/25 bg-[#e67300]/5 text-[#e67300]
            hover:bg-[#e67300]/15 hover:border-[#e67300]/50 hover:-translate-y-0.5 transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </a>
      </div>

    </footer>
  );
};