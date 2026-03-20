import { Briefcase, Code, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const StackedCards = ({ cards = [], inView = false }) => {
  const [frontIndex, setFrontIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setFrontIndex((prev) => (prev + 1) % cards.length);
        setIsAnimating(false);
      }, 300);
    }, 1800);
    return () => clearInterval(interval);
  }, [inView, cards.length]);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setFrontIndex((prev) => (prev + 1) % cards.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div
      className="relative w-full cursor-pointer"
      style={{ height: "180px" }}
      onClick={handleClick}
    >
      {cards.map((card, i) => {
        const pos = (i - frontIndex + cards.length) % cards.length;

        const yOffset = pos === 0 ? 0 : pos === 1 ? 28 : 52;
        const scale = pos === 0 ? 1 : pos === 1 ? 0.93 : 0.86;
        const opacity = pos === 0 ? 1 : pos === 1 ? 0.65 : 0.35;
        const zIndex = pos === 0 ? 30 : pos === 1 ? 20 : 10;

        return (
          <div
            key={i}
            className="absolute w-full"
            style={{
              zIndex,
              transform: inView
                ? `translateY(${yOffset}px) scale(${scale})`
                : "translateY(60px) scale(0.9)",
              opacity: inView
                ? isAnimating
                  ? opacity * 0.7
                  : opacity
                : 0,
              transition: isAnimating
                ? "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease"
                : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease",
              transitionDelay: inView ? `${pos * 0.06}s` : "0s",
            }}
          >
            <div
              className={`relative flex items-start gap-4 p-5
                border rounded-xl bg-background
                border-l-[3px] ${card.border} overflow-hidden`}
              style={{
                borderColor:
                  pos === 0
                    ? "rgba(230,115,0,0.35)"
                    : pos === 1
                    ? "rgba(230,115,0,0.2)"
                    : "rgba(230,115,0,0.1)",
                boxShadow:
                  pos === 0
                    ? "0 8px 32px rgba(230,115,0,0.18), 0 2px 8px rgba(0,0,0,0.1)"
                    : pos === 1
                    ? "0 4px 16px rgba(230,115,0,0.08)"
                    : "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              {pos === 0 && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 35%, rgba(230,115,0,0.05) 50%, transparent 65%)",
                  }}
                />
              )}

              <div
                className={`p-2.5 rounded-lg border shrink-0
                  ${card.iconBg} ${card.iconBorder} ${card.iconColor}`}
                style={{ opacity: pos === 0 ? 1 : pos === 1 ? 0.7 : 0.4 }}
              >
                {card.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4
                    className="font-syne font-semibold mb-1"
                    style={{ opacity: pos === 0 ? 1 : pos === 1 ? 0.7 : 0.4 }}
                  >
                    {card.title}
                  </h4>
                  {pos === 0 && (
                    <span className="font-mono text-[10px] text-[#e67300]/50 tracking-widest uppercase shrink-0">
                      $$
                    </span>
                  )}
                </div>
                <p
                  className="font-mono text-sm text-muted-foreground"
                  style={{ opacity: pos === 0 ? 1 : pos === 1 ? 0.6 : 0.3 }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
StackedCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      title: PropTypes.string,
      desc: PropTypes.string,
      border: PropTypes.string,
      iconBg: PropTypes.string,
      iconBorder: PropTypes.string,
      iconColor: PropTypes.string,
    })
  ).isRequired,
  inView: PropTypes.bool,
};

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);

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

  useEffect(() => {
    if (!inView) return;
    const targets = [400, 3, 10];
    targets.forEach((target, i) => {
      let start = 0;
      const step = Math.ceil(target / (1800 / 16));
      const delay = (0.4 + i * 0.1) * 1000;
      setTimeout(() => {
        const timer = setInterval(() => {
          start += step;
          if (start >= target) {
            setCounts((prev) => {
              const next = [...prev];
              next[i] = target;
              return next;
            });
            clearInterval(timer);
          } else {
            setCounts((prev) => {
              const next = [...prev];
              next[i] = start;
              return next;
            });
          }
        }, 16);
      }, delay);
    });
  }, [inView]);

  const cards = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Web Development",
      desc: "Creating responsive websites and web applications with modern frameworks.",
      border: "border-l-[#e67300]",
      iconBg: "bg-[#e67300]/10",
      iconBorder: "border-[#e67300]/30",
      iconColor: "text-[#e67300]",
    },
    {
      icon: <User className="h-5 w-5" />,
      title: "UI/UX Design",
      desc: "Designing intuitive user interfaces and seamless user experiences.",
      border: "border-l-[#cd5c00]",
      iconBg: "bg-[#cd5c00]/10",
      iconBorder: "border-[#cd5c00]/30",
      iconColor: "text-[#cd5c00]",
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Project Management",
      desc: "Leading projects from conception to completion with agile methodologies.",
      border: "border-l-[#b34700]",
      iconBg: "bg-[#b34700]/10",
      iconBorder: "border-[#b34700]/30",
      iconColor: "text-[#b34700]",
    },
  ];

  const stats = [
    { label: "Problems Solved", suffix: "+" },
    { label: "Projects", suffix: "+" },
    { label: "Clients", suffix: "+" },
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden" ref={sectionRef}>

      {/* Ambient glow */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#e67300]/5 blur-[80px] pointer-events-none" />
      <div className="absolute -right-20 bottom-0 w-[300px] h-[300px] rounded-full bg-[#b34700]/5 blur-[60px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(230,115,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(230,115,0,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">

        {/* Heading */}
        <div
          className="text-center mb-12"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            About <span className="text-[#e67300]">Me</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#e67300] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div
            className="space-y-6"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <h3 className="font-syne text-2xl font-semibold">
              Web Developer &amp;{" "}
              <span className="text-[#e67300]">Competitive Programmer</span>
            </h3>

            <p className="font-mono text-muted-foreground">
             I Building products, not just projects.
            </p>

            <p className="font-mono text-muted-foreground">
              Strong in DSA and Problem Solving
            </p>

            {/* Stats */}
            <div className="flex gap-4 pt-2">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="font-mono flex-1 text-center py-3 px-2
                    border border-[#e67300]/25 rounded-xl
                    bg-[#e67300]/5 hover:bg-[#e67300]/10
                    hover:border-[#e67300]/50 hover:-translate-y-1
                    transition-all duration-300"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.6s ease ${0.4 + i * 0.1}s, transform 0.6s ease ${0.4 + i * 0.1}s`,
                  }}
                >
                  <div className="text-2xl font-bold text-[#e67300]">
                    {counts[i]}{s.suffix}
                  </div>
                  <div className="text-[11px] opacity-60 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            
             <a href="#contact"
              className="font-inter inline-flex items-center gap-2 mt-2 px-6 py-2.5
                border-[1.5px] border-[#e67300] rounded-lg
                text-[#e67300] font-medium no-underline
                hover:bg-[#e67300]/10 hover:gap-3 transition-all duration-300"
            >
              Get In Touch <span>→</span>
            </a>
          </div>

          {/* Right — Stacked Cards */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
            }}
          >
            <StackedCards cards={cards} inView={inView} />
          </div>

        </div>
      </div>
    </section>
  );
};
