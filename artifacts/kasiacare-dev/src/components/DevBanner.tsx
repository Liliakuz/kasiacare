export function DevBanner() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "linear-gradient(90deg, #1a3a5c 0%, #c4667a 100%)",
        color: "#fff",
        textAlign: "center",
        fontSize: "0.78rem",
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
  );
}
