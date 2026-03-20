import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
const skills = [
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", brightness: 1.3 },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", brightness: 1, invert: true },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", brightness: 1.4 },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", brightness: 1.4 },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", brightness: 1.3 },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", brightness: 1.4 },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", brightness: 1.4 },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", brightness: 1.4 },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", brightness: 1.4 },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", brightness: 1, invert: true },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", brightness: 1.4 },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", brightness: 1.3 },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", brightness: 1.4 },
  { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", brightness: 1.3 },
];

const SkillCard = ({ skill = {} }) => {
  const [hovered, setHovered] = useState(false);

  const { icon = "", name = "", brightness = 2, invert = false } = skill;

  return (
    <div
      className="flex-shrink-0 flex items-center gap-3 px-5 py-3
        border border-[#e67300]/15 rounded-xl bg-white/[0.02]
        transition-all duration-300"
      style={{
        borderColor: hovered ? "rgba(230,115,0,0.45)" : "rgba(230,115,0,0.15)",
        background: hovered ? "rgba(230,115,0,0.07)" : "rgba(255,255,255,0.02)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={icon}
        alt={name}
        className="w-7 h-7"
        style={{
          filter: invert
            ? `invert(1) brightness(${hovered ? 2 : 1.8})`
            : `brightness(${hovered ? brightness + 0.3 : brightness})`,
          transform: hovered ? "scale(1.15)" : "scale(1)",
          transition: "filter 0.3s ease, transform 0.3s ease",
        }}
      />
      <span
        className="font-mono text-sm whitespace-nowrap transition-colors duration-300"
        style={{ color: hovered ? "#e67300" : "rgba(255,255,255,0.6)" }}
      >
        {name}
      </span>
    </div>
  );
};
SkillCard.propTypes = {
  skill: PropTypes.shape({
    icon: PropTypes.string,
    name: PropTypes.string,
    brightness: PropTypes.number,
    invert: PropTypes.bool,
  }),
};

export const SkillsSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const row1 = skills.slice(0, 7);
  const row2 = skills.slice(7);

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden" ref={sectionRef}>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-[#e67300]/5 blur-[80px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div
          className="text-center mb-14"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#e67300]/60 uppercase mb-3">
            — What I Work With —
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            My <span className="text-[#e67300]">Skills</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#e67300] to-transparent mx-auto mt-4 rounded-full" />
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
        }}
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }}
        />

        <div
          className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }}
        />

        <div className="flex gap-5 mb-5 ticker-row">
          {[...row1, ...row1, ...row1, ...row1, ...row1,...row1,...row1].map((skill, i) => (
            <SkillCard key={skill.name + i} skill={skill} />
          ))}
        </div>

        <div className="flex gap-5 ticker-row-reverse">
          {[...row2, ...row2, ...row2, ...row2, ...row2, ...row2, ...row2].map((skill, i) => (
            <SkillCard key={skill.name + i} skill={skill} />
          ))}
        </div>
      </div>

      <style>{`
        .ticker-row {
  width: max-content;
  animation: ticker-ltr 30s linear infinite;
}
.ticker-row:hover { animation-play-state: paused; }
.ticker-row-reverse {
  width: max-content;
  animation: ticker-rtl 35s linear infinite;
}
.ticker-row-reverse:hover { animation-play-state: paused; }
@keyframes ticker-ltr {
  from { transform: translateX(0); }
  to   { transform: translateX(-25%); }
}
@keyframes ticker-rtl {
  from { transform: translateX(-25%); }
  to   { transform: translateX(0); }
}
      `}</style>
    </section>
  );
};