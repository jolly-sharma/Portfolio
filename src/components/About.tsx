import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h2>About Me</h2>

        <p>
          I’m a full-stack software engineer with 3+ years of experience building
          reliable and scalable web applications. I enjoy working across the
          entire development lifecycle — from designing clean user interfaces
          to implementing robust backend systems.
        </p>

        <p>
          I have hands-on experience with modern JavaScript frameworks,
          RESTful APIs, relational databases, and production-grade workflows.
          My focus is always on writing clean, maintainable code and delivering
          solutions that add real value.
        </p>

        <div className="skills">
          <span>React</span>
          <span>Node.js</span>
          <span>TypeScript</span>
          <span>JavaScript</span>
          <span>PostgreSQL</span>
          <span>REST APIs</span>
          <span>Git</span>
          <span>Docker</span>
        </div>
      </div>
    </section>
  );
}
