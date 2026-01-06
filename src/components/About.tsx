const About = () => {
  return (
    <section>
      <div className="container">
        <h2 style={styles.heading}>How I Work</h2>

        <div style={styles.layout}>
          {/* Left: About */}
          <div>
            <p style={styles.text}>
              I’m a full-stack engineer with a strong backend focus, experienced
              in building scalable, reliable web applications.
            </p>

            <p style={styles.text}>
              I work closely with clients to understand the problem, clarify
              requirements early, and deliver solutions that are maintainable
              and aligned with business goals.
            </p>

            <p style={styles.text}>
              I value clean architecture, clear communication, and taking full
              ownership of the outcomes I’m responsible for.
            </p>
          </div>

          {/* Right: Principles */}
          <div style={styles.card}>
            <h3 style={styles.subheading}>Working Principles</h3>

            <ul style={styles.list}>
              <li>Clear scope and expectations before implementation</li>
              <li>Regular updates and transparent communication</li>
              <li>Focus on reliability, performance, and long-term maintainability</li>
              <li>Ownership-driven mindset — problems don’t get passed around</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  heading: {
    fontSize: "36px",
    marginBottom: "48px",
    letterSpacing: "-0.02em",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: "48px",
  },
  text: {
    color: "#cbd5f5",
    lineHeight: "1.7",
    marginBottom: "16px",
    maxWidth: "680px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "28px",
  },
  subheading: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "16px",
  },
  list: {
    paddingLeft: "18px",
    color: "#94a3b8",
    lineHeight: "1.7",
  },
};

export default About;
