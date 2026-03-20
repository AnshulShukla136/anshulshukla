import { Download, Eye, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const ResumeSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2500);
  };

  return (
    <section id="resume" className="py-24 px-4 relative overflow-hidden" ref={sectionRef}>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#e67300]/6 blur-[90px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(230,115,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(230,115,0,0.025) 1px, transparent 1px)",
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
          <p className="font-mono text-xs tracking-[0.3em] text-[#e67300]/60 uppercase mb-3">
            — Career Profile —
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            My <span className="text-[#e67300]">Resume</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#e67300] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Rotating border wrapper */}
        <div
          className="relative p-[2px] rounded-2xl resume-glow-wrapper"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          {/* Rotating conic gradient border */}
          <div className="resume-rotating-border absolute -inset-[100%] rounded-2xl" />

          {/* Static dim border underneath so it looks clean when glow is behind */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{ border: "1px solid rgba(230,115,0,0.12)" }}
          />

          {/* Card content */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "rgba(10,10,10,0.95)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div className="p-8 md:p-12">

              {/* Top row — icon + text */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">

                {/* File icon block */}
                <div
                  className="relative flex-shrink-0 w-24 h-28 rounded-xl flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(230,115,0,0.25)",
                    background: "rgba(230,115,0,0.06)",
                    boxShadow: "0 0 30px rgba(230,115,0,0.1)",
                  }}
                >
                  {/* Corner fold */}
                  <div
                    className="absolute top-0 right-0 w-0 h-0"
                    style={{
                      borderLeft: "16px solid transparent",
                      borderBottom: "16px solid transparent",
                      borderTop: "16px solid rgba(230,115,0,0.4)",
                      borderRight: "16px solid rgba(230,115,0,0.4)",
                    }}
                  />
                  <FileText className="h-10 w-10 text-[#e67300]" />
                  <div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-3 rounded-full"
                    style={{
                      background: "radial-gradient(ellipse, rgba(230,115,0,0.4) 0%, transparent 70%)",
                      filter: "blur(4px)",
                    }}
                  />
                </div>

                {/* Text */}
                <div className="text-center md:text-left">
                  <h3 className="font-syne text-2xl font-semibold mb-2">
                    Anshul Shukla
                  </h3>
                  <p className="font-mono text-sm text-[#e67300]/80 mb-3 tracking-wide">
                    Full Stack Developer · MERN Stack
                  </p>
                  <p className="font-mono text-sm text-muted-foreground max-w-md leading-relaxed">
                    Experienced in React, Node.js, MongoDB 
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                className="w-full h-px mb-8"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(230,115,0,0.2), transparent)",
                }}
              />

              {/* Buttons */}
              <div className="flex justify-center gap-4 flex-wrap">

                {/* View */}
                
                 <a href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter group relative flex items-center gap-2 px-7 py-3
                    rounded-lg overflow-hidden transition-all duration-300"
                  style={{
                    border: "1.5px solid rgba(230,115,0,0.4)",
                    color: "#e67300",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(230,115,0,0.08)";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(230,115,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Eye size={17} />
                  <span className="font-medium text-sm">View Resume</span>
                </a>

                {/* Download */}
                
                 <a href="/resume.pdf"
                  download
                  className="font-inter relative flex items-center gap-2 px-7 py-3
                    rounded-lg overflow-hidden transition-all duration-300"
                  style={{
                    background: downloading
                      ? "rgba(230,115,0,0.6)"
                      : "linear-gradient(135deg, #e67300, #b34700)",
                    color: "white",
                    border: "1.5px solid transparent",
                    boxShadow: downloading
                      ? "0 0 30px rgba(230,115,0,0.4)"
                      : "0 4px 20px rgba(230,115,0,0.3)",
                    transition: "all 0.3s ease",
                  }}
                  onClick={handleDownload}
                  onMouseEnter={(e) => {
                    if (!downloading) e.currentTarget.style.boxShadow = "0 6px 28px rgba(230,115,0,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    if (!downloading) e.currentTarget.style.boxShadow = "0 4px 20px rgba(230,115,0,0.3)";
                  }}
                >
                  <Download
                    size={17}
                    className={downloading ? "animate-bounce" : ""}
                  />
                  <span className="font-medium text-sm">
                    {downloading ? "Downloading..." : "Download"}
                  </span>
                </a>

              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
  .resume-glow-wrapper {
    isolation: isolate;
    overflow: hidden;
  }
  .resume-rotating-border {
    background: conic-gradient(
      from 0deg at 50% 50%,
      transparent 0%,
      transparent 35%,
      rgba(230,115,0,0.9) 45%,
      rgba(255,179,71,1) 50%,
      rgba(230,115,0,0.9) 55%,
      transparent 65%,
      transparent 100%
    );
    animation: resume-border-spin 4s linear infinite;
    z-index: 0;
  }
  @keyframes resume-border-spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
`}</style>
    </section>
  );
};