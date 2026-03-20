import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Brand-accurate SVG icons
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="#0A66C2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
    <defs>
      <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497"/>
        <stop offset="5%" stopColor="#fdf497"/>
        <stop offset="45%" stopColor="#fd5949"/>
        <stop offset="60%" stopColor="#d6249f"/>
        <stop offset="90%" stopColor="#285AEB"/>
      </radialGradient>
    </defs>
    <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

export const ContactSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

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

  const contactItems = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "anshulshukla136@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=anshulshukla136@gmail.com",
      external: true,
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 7307843854",
      href: "tel:+917307843854",
      external: false,
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Punjab, India",
      href: null,
      external: false,
    },
  ];

  const socials = [
    {
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/in/anshul-shukla136/",
      label: "LinkedIn",
      hoverBorder: "rgba(10,102,194,0.6)",
      hoverBg: "rgba(10,102,194,0.1)",
      hoverShadow: "0 4px 16px rgba(10,102,194,0.2)",
    },
    {
      icon: <XIcon />,
      href: "https://x.com/AnshulS98130059",
      label: "X",
      hoverBorder: "rgba(255,255,255,0.4)",
      hoverBg: "rgba(255,255,255,0.08)",
      hoverShadow: "0 4px 16px rgba(255,255,255,0.08)",
    },
    {
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/as.anshull/",
      label: "Instagram",
      hoverBorder: "rgba(214,36,159,0.5)",
      hoverBg: "rgba(214,36,159,0.08)",
      hoverShadow: "0 4px 16px rgba(214,36,159,0.2)",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Ambient glows */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[300px] rounded-full bg-[#e67300]/5 blur-[100px] pointer-events-none" />
      <div className="absolute -left-20 bottom-10 w-[300px] h-[300px] rounded-full bg-[#b34700]/5 blur-[70px] pointer-events-none" />
      <div className="absolute -right-20 top-1/3 w-[250px] h-[250px] rounded-full bg-[#e67300]/4 blur-[60px] pointer-events-none" />

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
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Get In <span className="text-[#e67300]">Touch</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#e67300] to-transparent mx-auto mt-4 rounded-full" />
          <p className="font-mono text-muted-foreground mt-5 max-w-xl mx-auto text-sm">
            Let us connect and create something great together
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {contactItems.map((item, i) => (
            <div
              key={i}
              className="group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${0.2 + i * 0.1}s, transform 0.6s ease ${0.2 + i * 0.1}s`,
              }}
            >
              <div
                className="relative flex flex-col items-center text-center gap-3 p-6 rounded-xl border border-[#e67300]/20 bg-background hover:border-[#e67300]/45 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ boxShadow: "0 4px 20px rgba(230,115,0,0.06)" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(230,115,0,0.05) 0%, transparent 60%)" }}
                />
                <div className="p-3 rounded-lg bg-[#e67300]/10 border border-[#e67300]/25 text-[#e67300]">
                  {item.icon}
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[#e67300]/50 tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="font-mono text-sm text-muted-foreground hover:text-[#e67300] transition-colors duration-200 no-underline break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-mono text-sm text-muted-foreground">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="flex items-center gap-4 mb-10"
          style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease 0.55s" }}
        >
          <div className="flex-1 h-px bg-[#e67300]/10" />
          <span className="font-mono text-[10px] text-[#e67300]/40 tracking-widest uppercase">
            Connect With Me
          </span>
          <div className="flex-1 h-px bg-[#e67300]/10" />
        </div>

        {/* Social Links */}
        <div
          className="flex justify-center gap-4"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.65s, transform 0.6s ease 0.65s",
          }}
        >
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              onMouseEnter={() => setHoveredSocial(i)}
              onMouseLeave={() => setHoveredSocial(null)}
              className="relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300"
              style={{
                border: `1px solid ${hoveredSocial === i ? s.hoverBorder : "rgba(230,115,0,0.25)"}`,
                background: hoveredSocial === i ? s.hoverBg : "rgba(230,115,0,0.05)",
                boxShadow: hoveredSocial === i ? s.hoverShadow : "0 2px 10px rgba(230,115,0,0.06)",
                transform: hoveredSocial === i ? "translateY(-4px)" : "translateY(0)",
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
