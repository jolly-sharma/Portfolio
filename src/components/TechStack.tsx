const TechStack = () => {
  return (
    <section>
      <div className="container">
        <h2 style={styles.heading}>Tech Stack</h2>

        <div style={styles.grid}>
          <StackCard
            title="Frontend"
            items={[
              "React",
              "TypeScript",
              "Vite",
              "HTML5",
              "CSS3",
            ]}
          />

          <StackCard
            title="Backend"
            items={[
              "Node.js",
              "REST APIs",
              "Authentication & Authorization",
              "Cron Jobs",
              "Cloud Functions",
            ]}
          />

          <StackCard
            title="Database"
            items={[
              "PostgreSQL",
              "SQL Optimization",
              "Schema Design",
              "Data Migration",
            ]}
          />

          <StackCard
            title="Tools & Practices"
            items={[
              "Git & GitHub",
              "Docker",
              "Environment Configuration",
              "Code Reviews",
              "Production Debugging",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const StackCard = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.subheading}>{title}</h3>
      <ul style={styles.list}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  heading: {
    fontSize: "36px",
    marginBottom: "48px",
    letterSpacing: "-0.02em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
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
    marginBottom: "12px",
  },
  list: {
    paddingLeft: "18px",
    color: "#94a3b8",
    lineHeight: "1.7",
  },
};

export default TechStack;
