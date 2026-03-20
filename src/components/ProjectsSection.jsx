import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    id: 1,
    title: "LPU Alumni Hub",
    description: "An Alumni network page where people can connect to each other",
    image: "/achievements/lpualumni.png",
    tags: ["PHP", "TailwindCSS","AWS"],
    demoUrl: "https://lpualumnik23df.infy.uk/",
    githubUrl: "https://github.com/AnshulShukla136/Alumni-portal-Project1",
  },
  {
    id: 2,
    title: "Flood Monitoring System",
    description:
      "Real-time flood monitoring system using IoT, GPS, and predictive analytics.",
    image: "/achievements/floodmonitoring.png",
    tags: ["React.js", "Express.js", "MongoDB"],
    demoUrl: "https://flood-monitoring-system-vtnh.vercel.app/",
    githubUrl: "https://github.com/AnshulShukla136/floodMonitoringSystem",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/achievements/languagetrans.png",
    tags: ["HTML5", "CSS3", "javascript"],
    demoUrl: "https://language-transator.vercel.app/",
    githubUrl: "https://github.com/AnshulShukla136/Language-Transator",
  },
];

const ProjectCard = ({ project, index, inView }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTag, setActiveTag] = useState(null);

  // ── Tilt removed; replaced with a gentle lift + glow on hover only ──

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col rounded-xl overflow-hidden border border-white/8 bg-background cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? `translateY(${isHovered ? "-6px" : "0px"})`
          : "translateY(40px)",
        transition: `opacity 0.7s ease ${0.15 + index * 0.12}s, transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease`,
        boxShadow: isHovered
          ? "0 20px 40px rgba(0,0,0,0.32), 0 0 0 1px rgba(230,115,0,0.18)"
          : "0 4px 24px rgba(0,0,0,0.18)",
      }}
    >
      {/* Shine sweep on hover */}
      <div
        className="absolute inset-0 pointer-events-none z-20 rounded-xl overflow-hidden"
        style={{
          background: isHovered
            ? "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.04) 50%, transparent 70%)"
            : "none",
          transition: "background 0.4s ease",
        }}
      />

      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-white/5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-90"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Action icons */}
        <div
          className="absolute top-3 right-3 flex gap-2"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(-6px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white transition-colors"
          >
            <ExternalLink size={14} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white transition-colors"
          >
            <Github size={14} />
          </a>
        </div>

        {/* Project number badge */}
        <div className="absolute bottom-3 left-4">
          <span
            className="font-mono font-bold text-white/10 leading-none select-none"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Animated tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              onMouseEnter={() => setActiveTag(tag)}
              onMouseLeave={() => setActiveTag(null)}
              className="font-mono px-2.5 py-1 text-[10px] tracking-wider uppercase rounded-md border cursor-default transition-all duration-250"
              style={{
                borderColor: activeTag === tag ? "rgba(230,115,0,0.5)" : "rgba(255,255,255,0.1)",
                color: activeTag === tag ? "#e67300" : undefined,
                background: activeTag === tag ? "rgba(230,115,0,0.08)" : "rgba(255,255,255,0.03)",
                transform: activeTag === tag ? "translateY(-2px)" : "translateY(0)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          className="font-syne text-xl font-semibold mb-2 transition-colors duration-300"
          style={{ color: isHovered ? "#e67300" : undefined }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-mono text-sm text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Bottom bar */}
        <div className="mt-5 pt-4 border-t border-white/6 flex items-center justify-between">
          <span className="font-mono text-[12px] text-muted-foreground/40 tracking-widest uppercase">
            View Project
          </span>
          <div className="flex gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-[#e67300] transition-colors duration-200"
            >
              <ExternalLink size={23} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-[#e67300] transition-colors duration-200"
            >
              <Github size={23} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    demoUrl: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  inView: PropTypes.bool.isRequired,
};

export const ProjectsSection = () => {
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
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden" ref={sectionRef}>

      {/* Subtle ambient glow */}
      <div className="absolute -right-40 top-1/4 w-[350px] h-[350px] rounded-full bg-[#e67300]/3 blur-[100px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(230,115,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(230,115,0,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">

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
            Work
            <span className="w-6 h-px bg-[#e67300]/40" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Featured <span className="text-[#e67300]">Projects</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#e67300] to-transparent mx-auto mt-4 rounded-full" />
          <p className="font-mono text-muted-foreground mt-5 max-w-xl mx-auto text-sm">
            Each project was carefully crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-14"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s",
          }}
        >
          <a
            href="https://github.com/AnshulShukla136"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter inline-flex items-center gap-2 px-6 py-2.5
              border-[1.5px] border-[#e67300] rounded-lg
              text-[#e67300] font-medium no-underline
              hover:bg-[#e67300]/10 hover:gap-3 transition-all duration-300"
          >
          Github <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};
