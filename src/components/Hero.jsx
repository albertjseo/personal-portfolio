export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>

      <div className="hero-inner fade-up">
        <p className="hero-kicker">Data Engineer · Data Science · Bioinformatics</p>

        <h1 className="hero-title">
          Hi, I’m <span className="hero-name">Albert Seo</span>
        </h1>

        <p className="hero-subtitle">
          I bring a unique blend of data engineering, data science, and bioinformatics.
          With 5+ years of experience across Seattle Children’s Research Institute and the University of Washington,
          I’ve built scalable pipelines, automated workflows, and reproducible analytics systems in data‑driven scientific environments.
          My background in computational methods and biomedical data gives me a strong foundation for engineering reliable data systems and
          transforming complex datasets into meaningful insights.
        </p>

        <div className="hero-tags">
          <span className="hero-tag">Python Pipelines</span>
          <span className="hero-tag">Data Engineering</span>
          <span className="hero-tag">Data Science</span>
        </div>

        <a href="#skills" className="hero-cta">View Skills</a>
        <a href="#projects" className="hero-cta">View Projects</a>

      </div>
    </section>
  );
}
