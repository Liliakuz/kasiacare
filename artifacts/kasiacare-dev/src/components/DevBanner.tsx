export function DevBanner() {
  return (
    <>
      {/* Top header badge */}
      <div
        className="text-base md:text-xs"
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10000,
          background: "#c4667a",
          color: "#fff",
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          padding: "3px 14px",
          borderRadius: "0 0 8px 8px",
          pointerEvents: "none",
          userSelect: "none",
          boxShadow: "0 2px 8px rgba(196,102,122,0.35)",
        }}
      >
        Dev Preview
      </div>

      {/* Bottom bar */}
      <div
        className="text-base md:text-xs"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: "linear-gradient(90deg, #1a3a5c 0%, #c4667a 100%)",
          color: "#fff",
          textAlign: "center",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "6px 16px",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        ⚙ Development Preview — Changes here are not live
      </div>
    </>
  );
}
