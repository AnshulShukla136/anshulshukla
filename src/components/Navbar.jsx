import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40",
        isScrolled ? "py-3" : "py-5"
      )}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-20px)",
        transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s, padding 0.5s ease",
      }}
    >
      {/* Glassmorphism bar — only when scrolled */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: isScrolled ? "rgba(0, 0, 0, 0.45)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(230, 115, 0, 0.1)" : "none",
          boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.3)" : "none",
        }}
      />

      <div className="container flex items-center relative z-10">

        {/* LEFT — Available for work pill */}
        
         <a href="#contact"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full
            border transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(10px)",
            borderColor: "rgba(255,255,255,0.1)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(230,115,0,0.5)";
            e.currentTarget.style.boxShadow = "0 0 14px rgba(230,115,0,0.2)";
            e.currentTarget.style.background = "rgba(230,115,0,0.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.2)";
            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-xs font-syne text-foreground/80">
            Available for Work
          </span>
        </a>

        {/* RIGHT — Nav links */}
        <div className="hidden md:flex ml-auto items-center gap-1">
          {navItems.map((item, i) => (
            
             <a key={i}
              href={item.href}
              className="relative font-syne text-sm px-3 py-2
                text-foreground/60 hover:text-foreground
                transition-colors duration-300 group"
              style={{
                animationDelay: `${0.4 + i * 0.07}s`,
              }}
            >
              {item.name}

              {/* Glowy underline — slides left to right on hover */}
              <span className="absolute bottom-0 left-0 right-0 flex justify-center">
              <span
                className="h-[0.5px] w-0 group-hover:w-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #e67300, #e67300, #e67300)",
                  boxShadow: "0 0 3px 0.5px rgba(230,115,0,0.35)",
                  transition: "width 0.4s ease",
                  maxWidth: "calc(100% - 24px)",
                }}
              /></span>
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
};