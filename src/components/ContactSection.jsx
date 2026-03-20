import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const ContactSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

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
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/anshul-shukla136/",
      label: "LinkedIn",
    },
    {
      icon: <X className="h-5 w-5" />,
      href: "https://x.com/AnshulS98130059",
      label: "X",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/as.anshull/",
      label: "Instagram",
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
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#e67300]/60 tracking-widest uppercase mb-4">
            
          </div>
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
                style={{
                  boxShadow: "0 4px 20px rgba(230,115,0,0.06)",
                }}
              >
                {/* Hover shimmer */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(230,115,0,0.05) 0%, transparent 60%)",
                  }}
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
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease 0.55s",
          }}
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
              className="group relative flex items-center justify-center w-11 h-11 rounded-xl border border-[#e67300]/25 bg-[#e67300]/5 text-muted-foreground hover:text-[#e67300] hover:border-[#e67300]/50 hover:bg-[#e67300]/10 hover:-translate-y-1 transition-all duration-300"
              style={{
                boxShadow: "0 2px 10px rgba(230,115,0,0.06)",
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