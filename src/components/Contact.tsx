const Contact = () => {
  return (
    <section id="contact">
      <div className="container" style={styles.wrapper}>
        <h2>Let’s work together</h2>
        <p>
            Available for freelance and contract work.  
            I typically respond within 24 hours.
        </p>

        <p style={styles.text}>
          Available for freelance & contract work. Response within 24 hours.
        </p>

        <div style={styles.links}>
          <a href="mailto:jollykumari9168@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/jolly-sharma-a7611a147" target="_blank">LinkedIn</a>
          {/* <a href="https://contra.com" target="_blank">Contra</a> */}
        </div>
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    textAlign: "center" as const,
  },
  heading: {
    fontSize: "34px",
    marginBottom: "12px",
  },
  text: {
    color: "#94a3b8",
    marginBottom: "24px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "32px",
    fontWeight: 600,
    color: "#6366f1",
  },
};

export default Contact;
