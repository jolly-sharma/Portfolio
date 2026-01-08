import "./Hero.css";

export default function Hero() {
  const handleResumeDownload = () => {
    window.gtag("event", "download_resume", {
      event_category: "Resume",
      event_label: "Hero Section",
    });
  };

  const handleViewProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
      window.gtag("event", "view_projects", {
        event_category: "Navigation",
        event_label: "Hero Section",
      });
    }
  };

  const handleContactMe = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      window.gtag("event", "view_contact", {
        event_category: "Navigation",
        event_label: "Hero Section",
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <h1>Hi, I’m Jolly Sharma</h1>
        <h2>Full-Stack Software Engineer</h2>
        <p>
          I build scalable and modern web applications using React, Node.js,
          TypeScript, and PostgreSQL.
        </p>
        <div className="hero-actions">
          <button className="primary-btn" onClick={handleViewProjects}>
            View Projects
          </button>
          <button className="primary-btn" onClick={handleContactMe}>
            Contact Me
          </button>
          <a
            href="/Jolly-Sharma-SDE-Resume.pdf"
            target="_blank"
            className="secondary-btn"
            onClick={handleResumeDownload}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
