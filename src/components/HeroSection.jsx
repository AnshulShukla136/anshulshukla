import "./HeroSection.css"; 
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col items-center justify-start px-4 mt-30"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 flex flex-col items-center">

          {/* NAME */}
          <h1 className="text-[9vw] md:text-[7vw] leading-none font-bold tracking-tight pb-5 flex flex-wrap justify-center items-baseline gap-x-4">

            <span className="font-display text-white drop-shadow-[2px_2px_0_#000] anshul-enter">
              Anshul
            </span>

            <span className="font-display text-black drop-shadow-[2px_2px_0_#8B4513] shukla-enter">
              Shukla
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="font-mono text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto hero-subtitle">
            Code. Create. Solve real-world problems
          </p>

          {/* BUTTON */}
          <div className="pt-4 hero-btn-wrapper">
            <a
              href="#projects"
              className="font-inter hero-btn relative px-7 py-3 rounded-lg font-medium"
            >
              View My Work
            </a>
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="flex flex-col items-center hero-scroll mt-5">
        <div className="scroll-container">
          <div className="scroll-track">
            <div className="scroll-dot" />
          </div>
        </div>
      </div>
    </section>
  );
};
