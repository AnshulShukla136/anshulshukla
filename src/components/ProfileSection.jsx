export const ProfileSection = () => {
  return (
    <section id="profile" className="py-40 px-4 relative overflow-hidden">

      {/* Soft ambient glow — subtle, not overpowering */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,140,0,0.18) 0%, rgba(255,140,0,0.06) 50%, transparent 75%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl flex justify-center items-center relative z-10">

        <div className="profile-mount" style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>

          {/* Thin static outer ring */}
          <div
            className="absolute rounded-full"
            style={{
              width: "calc(100% + 28px)",
              height: "calc(100% + 28px)",
              border: "1px solid rgba(139, 69, 19, 0.25)",
              borderRadius: "50%",
            }}
          />

          {/* Spinning dashed ring */}
          <div
            className="absolute rounded-full profile-spin"
            style={{
              width: "calc(100% + 52px)",
              height: "calc(100% + 52px)",
              border: "1px dashed rgba(255, 140, 0, 0.35)",
              borderRadius: "50%",
            }}
          />

          {/* Thin accent ring */}
          <div
            className="absolute rounded-full profile-spin-reverse"
            style={{
              width: "calc(100% + 76px)",
              height: "calc(100% + 76px)",
              border: "0.5px solid rgba(139, 69, 19, 0.12)",
              borderRadius: "50%",
            }}
          />

          {/* Single orbiting dot on dashed ring */}
          <div
            className="absolute profile-spin"
            style={{
              width: "calc(100% + 52px)",
              height: "calc(100% + 52px)",
              borderRadius: "50%",
            }}
          >
            <div style={{
              position: "absolute",
              top: "-4px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#CD853F",
              boxShadow: "0 0 8px 2px rgba(205, 133, 63, 0.6)",
            }} />
          </div>

          {/* Profile image */}
          <img
            src="/achievements/profile.jpeg"
            alt="Profile"
            className="profile-img"
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              objectPosition: "center 80%",
              borderRadius: "50%",
              border: "2px solid rgba(139, 69, 19, 0.3)",
              display: "block",
            }}
          />
        </div>
      </div>

      <style>{`

        /* ── Entrance ──────────────────────────────────────── */
        .profile-mount {
          opacity: 0;
          transform: scale(0.92);
          animation: profile-reveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
        }

        @keyframes profile-reveal {
          0%   { opacity: 0; transform: scale(0.88); filter: blur(8px); }
          60%  { opacity: 1; filter: blur(0px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0px); }
        }

        /* ── Float ─────────────────────────────────────────── */
        .profile-img {
          animation: profile-float 5s ease-in-out infinite;
        }

        @keyframes profile-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }

        /* ── Rings ─────────────────────────────────────────── */
        .profile-spin {
          animation: spin-cw 18s linear infinite;
        }

        .profile-spin-reverse {
          animation: spin-ccw 24s linear infinite;
        }

        @keyframes spin-cw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes spin-ccw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};