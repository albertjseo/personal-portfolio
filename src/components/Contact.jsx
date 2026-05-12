export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">
        Open to roles in bioinformatics, data science, and computational biology.
      </p>

      <div className="contact-grid">

        <div className="glass-card fade-up">
          <p className="about-text">
            I’d love to talk. I enjoy designing workflows that are technically sound and practical for
            scientific teams.
          </p>
        </div>

        <div className="glass-card fade-up">
          <h3>Connect with Me</h3>
          <div className="contact-links">
            <a className="contact-link" href="mailto:your.email@example.com">Email</a>
            <a className="contact-link" href="https://www.linkedin.com/in/albertjseo" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="contact-link" href="https://github.com/albertjseo" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

      </div>
    </section>
  );
}
