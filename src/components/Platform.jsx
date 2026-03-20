import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const platforms = [
  {
    name: "Codeforces",
    handle: "as.anshulshukla",
    desc: "Competitive programming platform where I practice algorithms, participate in contests, and improve problem-solving skills.",
    href: "https://codeforces.com/profile/as.anshulshukla",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png",
    color: "#1a8cff",
    stat: "Newbie",
    statLabel: "Rank",
    invertLogo: false,
  },
  {
    name: "LeetCode",
    handle: "as_anshul",
    desc: "Practicing data structures and algorithms to strengthen problem-solving skills and prepare for technical interviews.",
    href: "https://leetcode.com/as_anshul",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    color: "#FFA116",
    stat: "325+",
    statLabel: "Problems",
    invertLogo: true,
  },
  {
    name: "CodeChef",
    handle: "as_anshul",
    desc: "Participating in coding contests and solving algorithmic challenges to improve logical thinking and competitive programming.",
    href: "https://www.codechef.com/users/as_anshul",
    logo: "/achievements/codechef.png",
    color: "#e67300",
    stat: "2★",
    statLabel: "Rating",
    invertLogo: true,
  },
];
const PlatformCard = ({ platform = {}, index = 0, inView = false }) => {
  const [hovered, setHovered] = useState(false);

  const {
    name = "",
    handle = "",
    desc = "",
    href = "#",
    logo = "",
    color = "#e67300",
    stat = "",
    statLabel = "",
    invertLogo = false,
  } = platform;

  return (
    
     <a href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block rounded-2xl overflow-hidden group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
        textDecoration: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Rotating border */}
      <div
        className="absolute rounded-2xl"
        style={{
          inset: "-100%",
          background: `conic-gradient(
            from 0deg at 50% 50%,
            transparent 0%,
            transparent 35%,
            ${color}cc 45%,
            ${color} 50%,
            ${color}cc 55%,
            transparent 65%,
            transparent 100%
          )`,
          animation: hovered
            ? "platform-spin 2s linear infinite"
            : "platform-spin 6s linear infinite",
        }}
      />

      {/* Border mask */}
      <div className="absolute inset-[2px] rounded-2xl z-10" style={{ background: "#0a0a0a" }} />

      {/* Card content */}
      <div className="relative z-20 p-6 h-full flex flex-col">

        {/* Top — logo + stat */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{
              border: `1px solid ${color}30`,
              background: `${color}10`,
              boxShadow: hovered ? `0 0 20px ${color}30` : "none",
              transition: "box-shadow 0.3s ease",
            }}
          >
            <img
              src={logo}
              alt={name}
              className="w-8 h-8"
              style={{
                filter: invertLogo
                  ? `invert(1) brightness(${hovered ? 1.4 : 1.1})`
                  : `brightness(${hovered ? 1.3 : 1})`,
                transform: hovered ? "scale(1.1)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
            />
          </div>

          <div
            className="flex flex-col items-end"
            style={{ opacity: hovered ? 1 : 0.6, transition: "opacity 0.3s ease" }}
          >
            <span className="font-syne font-bold text-xl" style={{ color }}>
              {stat}
            </span>
            <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
              {statLabel}
            </span>
          </div>
        </div>

        {/* Name + handle */}
        <div className="mb-3">
          <h3
            className="font-syne font-semibold text-lg mb-0.5 transition-colors duration-300"
            style={{ color: hovered ? color : "white" }}
          >
            {name}
          </h3>
          <p className="font-mono text-xs text-muted-foreground opacity-60">
            @{handle}
          </p>
        </div>

        {/* Desc */}
        <p className="font-mono text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
          {desc}
        </p>

        {/* Divider */}
        <div
          className="w-full h-px mb-4"
          style={{ background: `linear-gradient(90deg, transparent, ${color}40, transparent)` }}
        />

        {/* CTA */}
        <div className="flex items-center justify-between">
          <span
            className="font-mono text-xs tracking-wider uppercase transition-colors duration-300"
            style={{ color: hovered ? color : "rgba(255,255,255,0.3)" }}
          >
            View Profile
          </span>
          <div
            className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300"
            style={{
              border: `1px solid ${hovered ? color : "rgba(255,255,255,0.1)"}`,
              background: hovered ? `${color}15` : "transparent",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
            }}
          >
            <ExternalLink
              size={13}
              style={{ color: hovered ? color : "rgba(255,255,255,0.3)" }}
            />
          </div>
        </div>
      </div>
    </a>
  );
};

PlatformCard.propTypes = {
  platform: PropTypes.shape({
    name: PropTypes.string,
    handle: PropTypes.string,
    desc: PropTypes.string,
    href: PropTypes.string,
    logo: PropTypes.string,
    color: PropTypes.string,
    stat: PropTypes.string,
    statLabel: PropTypes.string,
    invertLogo: PropTypes.bool,
  }),
  index: PropTypes.number,
  inView: PropTypes.bool,
};

export const Platform = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="platforms" className="py-24 px-4 relative overflow-hidden" ref={sectionRef}>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#e67300]/5 blur-[80px] pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(230,115,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(230,115,0,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">

        <div
          className="text-center mb-14"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#e67300]/60 uppercase mb-3">
            — Where I Compete —
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Coding <span className="text-[#e67300]">Platforms</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#e67300] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform, i) => (
            <PlatformCard key={i} platform={platform} index={i} inView={inView} />
          ))}
        </div>

      </div>

      <style>{`
        @keyframes platform-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};