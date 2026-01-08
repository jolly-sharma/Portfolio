import { useState } from "react";
import "./Projects.css";

interface Project {
  name: string;
  summary: string;
  details: string;
  tech: string[];
}

const projects: Project[] = [
  {
    name: "SimplePlan",
    summary: "Project lifecycle management platform",
    details:
      "Designed to manage planning, execution, and workflow visibility with structured task and timeline management.",
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    name: "Viapromeds",
    summary: "Online health consultation platform",
    details:
      "Built guided questionnaires, secure consultations, and subscription-based access to professional medical services.",
    tech: ["React", "Node.js", "Payments"],
  },
  {
    name: "HubMd",
    summary: "Automated data ingestion system",
    details:
      "Implemented scheduled jobs and cloud functions to process, validate, and store structured data reliably.",
    tech: ["Node.js", "PostgreSQL", "Cron Jobs"],
  },
  {
    name: "Hometown",
    summary: "School event management tool",
    details:
      "Developed features to track and display ongoing school events with clean data ingestion pipelines.",
    tech: ["React", "Node.js"],
  },
  {
    name: "Saksham",
    summary: "Inclusive platform for students with disabilities",
    details:
      "Built booking and scheduling flows enabling students to request academic assistance seamlessly.",
    tech: ["React", "TypeScript", "Node.js"],
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number, name: string) => {
    setActiveIndex(activeIndex === index ? null : index);

    window.gtag("event", "project_view_details", {
      event_category: "Projects",
      event_label: name,
    });
  };

  return (
    <section id="projects" className="projects">
      <h2>Selected Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.name} className="project-card">
            <h3>{project.name}</h3>
            <p className="project-summary">{project.summary}</p>

            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            {activeIndex === index && (
              <p className="project-details">{project.details}</p>
            )}

            <button
              className="view-btn"
              onClick={() => handleToggle(index, project.name)}
            >
              {activeIndex === index ? "Hide Details" : "View Details"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
