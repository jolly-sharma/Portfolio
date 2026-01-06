const Hero = () => {
  return (
    <section>
      <div className="container" style={styles.wrapper}>
        <span style={styles.badge}>Available for freelance & contract work</span>

        <h1 style={styles.heading}>
          Full-Stack Engineer
          <br />
          <span style={styles.highlight}>focused on scalable backend systems</span>
        </h1>

        <p style={styles.subtext}>
          I design and build reliable web applications with clean architecture,
          strong APIs, and maintainable databases — from planning to production.
        </p>

        <div style={styles.cta}>
          <a href="#contact" style={styles.primaryBtn}>
            Get in touch
          </a>
          <a href="#projects" style={styles.secondaryBtn}>
            View work
          </a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    maxWidth: "820px",
  },
  badge: {
    display: "inline-block",
    marginBottom: "16px",
    padding: "6px 14px",
    borderRadius: "999px",
    fontSize: "13px",
    background: "rgba(99,102,241,0.12)",
    color: "#a5b4fc",
  },
  heading: {
    fontSize: "48px",
    lineHeight: "1.15",
    marginBottom: "20px",
    letterSpacing: "-0.03em",
  },
  highlight: {
    background: "linear-gradient(90deg, #6366f1, #22d3ee)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  subtext: {
    fontSize: "18px",
    color: "#94a3b8",
    maxWidth: "700px",
    lineHeight: "1.6",
    marginBottom: "32px",
  },
  cta: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap" as const,
  },
  primaryBtn: {
    padding: "14px 32px",
    borderRadius: "999px",
    background: "linear-gradient(90deg, #6366f1, #22d3ee)",
    color: "#fff",
    fontWeight: 600,
  },
  secondaryBtn: {
    padding: "14px 32px",
    borderRadius: "999px",
    border: "1px solid #1e293b",
    color: "#cbd5f5",
  },
};

export default Hero;
