
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col items-center justify-start px-4 mt-30"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 flex flex-col items-center">

          <h1 className="text-[12vw] leading-none font-bold tracking-tight pb-5 flex flex-wrap justify-center items-baseline gap-x-4">

            <span
              className="font-display text-white anshul-enter"
              style={{
                textShadow: `
                  1px 0 #000, -1px 0 #000,
                  0 1px #000, 0 -1px #000,
                  0.5px 0.5px #000, -0.5px -0.5px #000,
                  0.5px -0.5px #000, -0.5px 0.5px #000
                `,
              }}
            >
              Anshul
            </span>

            <span
              className="font-display text-black shukla-enter"
              style={{
                textShadow: `
                  1px 0 #e67300, -1px 0 #e67300,
                  0 1px #8B4513, 0 -1px #8B4513,
                  0.5px 0.5px #8B4513, -0.5px -0.5px #8B4513,
                  0.5px -0.5px #8B4513, -0.5px 0.5px #8B4513
                `,
              }}
            >
              Shukla
            </span>
          </h1>

          <p className="font-mono text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto hero-subtitle">
            <span className="typewriter">Code. Create. Solve real-world problems</span>
            <span className="cursor">|</span>
          </p>

          <div className="pt-4 hero-btn-wrapper">
            <a href="#projects" className="font-inter hero-btn relative px-7 py-3 rounded-lg font-medium">
              <span className="hero-btn-shimmer-top" />
              View My Work
              <span className="hero-btn-shimmer-bottom" />
            </a>
          </div>

        </div>
      </div>

    

      <style>{`

        /* ── ANSHUL: drop from above ─────────────────────────────── */
        .anshul-enter {
          display: inline-block;
          opacity: 0;
          animation: drop-from-top 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
        }

        @keyframes drop-from-top {
          0%   { opacity: 0; transform: translateY(-120px); filter: blur(6px); }
          60%  { opacity: 1; transform: translateY(10px);   filter: blur(0px); }
          80%  { transform: translateY(-5px); }
          100% { opacity: 1; transform: translateY(0px); }
        }

        /* ── SHUKLA: rise from below ─────────────────────────────── */
        .shukla-enter {
          display: inline-block;
          opacity: 0;
          animation: rise-from-bottom 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.85s forwards;
        }

        @keyframes rise-from-bottom {
          0%   { opacity: 0; transform: translateY(120px); filter: blur(6px); }
          60%  { opacity: 1; transform: translateY(-10px); filter: blur(0px); }
          80%  { transform: translateY(5px); }
          100% { opacity: 1; transform: translateY(0px); }
        }

        /* ── SUBTITLE ────────────────────────────────────────────── */
        .hero-subtitle {
          opacity: 0;
          transform: translateY(16px);
          animation: fade-up 0.7s ease 1.7s forwards;
        }

        /* ── TYPEWRITER ──────────────────────────────────────────── */
        .typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          width: 0;
          animation: typing 2.2s steps(38, end) 1.9s forwards;
        }

        @keyframes typing {
          from { width: 0; }
          to   { width: 100%; }
        }

        .cursor {
          display: inline-block;
          color: #e67300;
          font-weight: 100;
          opacity: 0;
          animation: blink 0.75s step-end infinite 1.9s;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        /* ── BUTTON ──────────────────────────────────────────────── */
        .hero-btn-wrapper {
          opacity: 0;
          transform: translateY(12px);
          animation: fade-up 0.6s ease 2.0s forwards;
        }

        /* ── SCROLL INDICATOR ────────────────────────────────────── */
        .hero-scroll {
          opacity: 0;
          animation: fade-up 0.6s ease 2.3s forwards;
        }

        @keyframes fade-up {
          to { opacity: 1; transform: translateY(0); }
        }

        /* Pill track */
        .scroll-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .scroll-track {
          width: 26px;
          height: 42px;
          border: 1.5px solid rgba(230, 115, 0, 0.5);
          border-radius: 999px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 5px 0;
        }

        .scroll-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #e67300;
          box-shadow: 0 0 6px 2px rgba(230, 115, 0, 0.6);
          animation: scroll-slide 1.6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }

        @keyframes scroll-slide {
          0%   { transform: translateY(0px);  opacity: 1; }
          60%  { transform: translateY(18px); opacity: 0.3; }
          61%  { transform: translateY(0px);  opacity: 0; }
          80%  { opacity: 1; }
          100% { transform: translateY(0px);  opacity: 1; }
        }

        /* Chevrons */
        .scroll-chevrons {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0px;
          line-height: 1;
        }

        .chev {
          display: block;
          font-size: 18px;
          color: #e67300;
          transform: rotate(-90deg);
          opacity: 0;
        }

        .chev-1 { animation: chev-fade 1.6s ease infinite 0.0s; }
        .chev-2 { animation: chev-fade 1.6s ease infinite 0.2s; }
        .chev-3 { animation: chev-fade 1.6s ease infinite 0.4s; }

        @keyframes chev-fade {
          0%, 100% { opacity: 0;   transform: rotate(-90deg) translateX(0px);  }
          50%       { opacity: 0.8; transform: rotate(-90deg) translateX(-4px); }
        }

        /* ── BUTTON STYLES ───────────────────────────────────────── */
        .hero-btn {
          display: inline-block;
          color: #e67300;
          border: 1.5px solid #e67300;
          background: transparent;
          text-decoration: none;
          overflow: hidden;
          transition: color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }
        .hero-btn:hover {
          color: #5C2D0A;
          background: rgba(139, 69, 19, 0.08);
          box-shadow: 0 0 18px 4px rgba(139, 69, 19, 0.25),
                      inset 0 0 12px rgba(139, 69, 19, 0.08);
        }
        .hero-btn-shimmer-top,
        .hero-btn-shimmer-bottom {
          position: absolute;
          left: 0;
          width: 100%;
          height: 1.5px;
          opacity: 0;
          background-size: 200% auto;
          transition: opacity 0.3s ease;
        }
        .hero-btn-shimmer-top {
          top: 0;
          background: linear-gradient(90deg, transparent, #D2691E, #FFB347, #D2691E, transparent);
          animation: shimmer 1.8s linear infinite;
        }
        .hero-btn-shimmer-bottom {
          bottom: 0;
          background: linear-gradient(90deg, transparent, #8B4513, #CD853F, #8B4513, transparent);
          animation: shimmer 1.8s linear infinite reverse;
        }
        .hero-btn:hover .hero-btn-shimmer-top,
        .hero-btn:hover .hero-btn-shimmer-bottom {
          opacity: 1;
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
      `}</style>
  <div className="flex flex-col items-center hero-scroll mt-5">
    <div className="scroll-container">
      <div className="scroll-track">
        <div className="scroll-dot" />
      </div>
      <div className="scroll-chevrons">
        <span className="chev chev-1">&#8249;</span>
        <span className="chev chev-2">&#8249;</span>
        <span className="chev chev-3">&#8249;</span>
      </div>
    </div>
  </div>
    </section>
  );
};
