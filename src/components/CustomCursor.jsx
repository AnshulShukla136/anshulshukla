import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const spotRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const spot = spotRef.current;
    const dot = dotRef.current;

    const onMouseMove = (e) => {
      spot.style.background = `radial-gradient(circle 120px at ${e.clientX}px ${e.clientY}px, rgba(230,115,0,0.12) 0%, transparent 80%)`;
      dot.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
    };

    const onEnter = () => dot.classList.add("cd4-dot--hover");
    const onLeave = () => dot.classList.remove("cd4-dot--hover");
    const addListeners = () => document.querySelectorAll("a, button, [role='button']").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMouseMove);
    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => { window.removeEventListener("mousemove", onMouseMove); observer.disconnect(); };
  }, []);

  return (
    <>
      <div ref={spotRef} className="cd4-spotlight" />
      <div ref={dotRef} className="cd4-dot" />
      <style>{`
        * { cursor: none !important; }
        .cd4-spotlight {
          position: fixed; inset: 0;
          pointer-events: none; z-index: 9998;
          transition: background 0.05s;
        }
        .cd4-dot {
          position: fixed; top: 0; left: 0;
          width: 10px; height: 10px;
          background: #e67300; border-radius: 50%;
          pointer-events: none; z-index: 99999;
          box-shadow: 0 0 10px 3px rgba(230,115,0,0.7);
          transition: width 0.2s, height 0.2s, box-shadow 0.2s;
        }
        .cd4-dot--hover {
          width: 14px; height: 14px;
          box-shadow: 0 0 20px 6px rgba(230,115,0,0.9);
        }
      `}</style>
    </>
  );
};