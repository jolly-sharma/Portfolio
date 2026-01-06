const Services = () => {
  return (
    <section>
      <div className="container">
        <h2 style={styles.heading}>How I Can Help</h2>

        <div style={styles.grid}>
          <div style={{ ...styles.card, borderTop: "4px solid #6366f1" }}>
            <h3>Full-Stack Development</h3>
            <p>
              End-to-end web applications using React, Node.js, TypeScript,
              and PostgreSQL.
            </p>
          </div>

          <div style={{ ...styles.card, borderTop: "4px solid #22d3ee" }}>
            <h3>Backend APIs & Databases</h3>
            <p>
              Secure REST APIs, database schemas, authentication, and
              optimized queries.
            </p>
          </div>

          <div style={{ ...styles.card, borderTop: "4px solid #a855f7" }}>
            <h3>Feature Development</h3>
            <p>
              New features, bug fixes, performance improvements, and
              clean refactors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  heading: {
    fontSize: "32px",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "#020617",
    padding: "28px",
    borderRadius: "16px",
    border: "1px solid #1e293b",
  },
};

export default Services;
