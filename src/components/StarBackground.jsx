import { useEffect, useRef } from "react";

export const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create stars
    const count = Math.floor((window.innerWidth * window.innerHeight) / 8000);
    const stars = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.2 + 0.2,
      opacity: Math.random() * 0.6 + 0.2,
      speedX: (Math.random() - 0.5) * 0.12,
      speedY: (Math.random() - 0.5) * 0.12,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
      glowSize: Math.random() * 3 + 1.5,
    }));

    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      stars.forEach((star) => {
        // Move
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Twinkle
        const twinkle = Math.sin(frame * star.twinkleSpeed + star.twinkleOffset);
        const currentOpacity = star.opacity * (0.9 + 0.9 * twinkle);
        const currentSize = star.size * (1.45 + 0.15 * twinkle);

        // Outer glow
        const glow = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.glowSize * (1 + 0.3 * twinkle)
        );
        glow.addColorStop(0, `rgba(255, 200, 120, ${currentOpacity * 0.6})`);
        glow.addColorStop(0.4, `rgba(255, 160, 60, ${currentOpacity * 0.2})`);
        glow.addColorStop(1, "rgba(255, 120, 0, 0)");

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.glowSize * (1 + 0.3 * twinkle), 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(star.x, star.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 230, 180, ${currentOpacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};