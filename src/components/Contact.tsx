import "./Contact.css";

export default function Contact() {
  const handleClick = (label: string) => {
    window.gtag("event", "contact_click", {
      event_category: "Contact",
      event_label: label,
    });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p>
          I’m currently open to freelance opportunities and full-time roles.
          Reach out if you have a project in mind or want to collaborate.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:jollykumari9168@gmail.com"
            className="contact-btn primary"
            onClick={() => handleClick("Email")}
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/jolly-sharma-a7611a147"
            target="_blank"
            rel="noreferrer"
            className="contact-btn secondary"
            onClick={() => handleClick("LinkedIn")}
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/jolly-sharma"
            target="_blank"
            rel="noreferrer"
            className="contact-btn secondary"
            onClick={() => handleClick("GitHub")}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
