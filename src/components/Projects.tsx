import { useState, memo } from "react";

/* ======Types====== */
type Project = {
  id: number;
  title: string;
  summary: string;
  details: string[];
  stack: string;
};

/* ======Data====== */
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Project Planning & Management Platform",
    summary:
      "Platform to manage the complete project lifecycle with improved visibility and coordination.",
    details: [
      "Designed scalable backend APIs for tasks, resources, and timelines",
      "Improved collaboration using structured workflows",
      "Focused on reliability, performance, and maintainability",
    ],
    stack: "React · Node.js · TypeScript · PostgreSQL",
  },
  {
    id: 2,
    title: "Healthcare Consultation Platform",
    summary:
      "Secure consultation and subscription-based system for personalized services.",
    details: [
      "Built structured questionnaire flows",
      "Implemented subscriptions with secure payment handling",
      "Ensured role-based access and data security",
    ],
    stack: "React · Node.js · TypeScript · PostgreSQL",
  },
  {
    id: 3,
    title: "Data Ingestion & Processing System",
    summary:
      "Backend system for scheduled ingestion, transformation, and storage of external data.",
    details: [
      "Implemented cron-based ingestion pipelines",
      "Handled data mapping and validation",
      "Optimized storage for large structured datasets",
    ],
    stack: "Node.js · Cloud Functions · PostgreSQL",
  },
  {
    id: 4,
    title: "Inclusive Booking Platform",
    summary:
      "Accessibility-focused booking and scheduling platform with real-time coordination.",
    details: [
      "Built booking flows similar to ride-hailing systems",
      "Implemented real-time status updates",
      "Focused on usability and accessibility",
    ],
    stack: "React · Node.js · TypeScript · PostgreSQL",
  },
];

/* ======Main Component====== */
const Projects = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleDetails = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects">
      <div className="container">
        <h2 style={styles.heading}>Selected Work</h2>
        <p style={styles.intro}>
          A selection of projects demonstrating backend strength, system design,
          and real-world problem solving.
        </p>

        <div style={styles.list}>
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isOpen={activeId === project.id}
              onToggle={toggleDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ======Project Card (Memoized)====== */
const ProjectCard = memo(
  ({
    project,
    isOpen,
    onToggle,
  }: {
    project: Project;
    isOpen: boolean;
    onToggle: (id: number) => void;
  }) => {
    return (
      <article style={styles.card}>
        <header>
          <h3 style={styles.title}>{project.title}</h3>
          <p style={styles.summary}>{project.summary}</p>
        </header>

        <div style={styles.meta}>
          <span style={styles.stack}>{project.stack}</span>
          <button
            type="button"
            onClick={() => onToggle(project.id)}
            style={styles.button}
            aria-expanded={isOpen}
          >
            {isOpen ? "Hide details ↑" : "View details →"}
          </button>
        </div>

        {isOpen && (
          <ul style={styles.details}>
            {project.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </article>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

/* ======Styles====== */
const styles = {
  heading: {
    fontSize: "36px",
    marginBottom: "12px",
    letterSpacing: "-0.02em",
  },
  intro: {
    color: "#94a3b8",
    maxWidth: "720px",
    marginBottom: "48px",
    lineHeight: "1.6",
  },
  list: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "24px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "28px",
  },
  title: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "6px",
  },
  summary: {
    color: "#94a3b8",
    lineHeight: "1.6",
  },
  meta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "16px",
  },
  stack: {
    fontSize: "13px",
    color: "#6366f1",
    fontWeight: 500,
  },
  button: {
    background: "none",
    border: "none",
    color: "#c7d2fe",
    cursor: "pointer",
    fontSize: "13px",
    padding: 0,
  },
  details: {
    marginTop: "16px",
    paddingLeft: "18px",
    color: "#cbd5f5",
    lineHeight: "1.6",
  },
};

export default Projects;
