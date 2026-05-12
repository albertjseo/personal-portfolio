export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>

      <div className="hero-inner fade-up">
        <p className="hero-kicker">Data Science · Bioinformatics</p>

        <h1 className="hero-title">
          Hi, I’m <span className="hero-name">Albert Seo</span>
        </h1>

        <p className="hero-subtitle">
          I'm a data analyst with a strong passion and focus on data-driven story-telling.
          With 5+ years of experience working at Seattle Children's Research Institute and the University of Washington, I've developed
          a deep understanding of data-driven environments and the biomedical field. Combining my programming skills and critical thinking, I
          aim to leverage my expertise to contribute to advancements in data science and the biomedical field.
        </p>

        <div className="hero-tags">
          <span className="hero-tag">Protein Structure</span>
          <span className="hero-tag">Structural Biology</span>
          <span className="hero-tag">Python Pipelines</span>
          <span className="hero-tag">Data Engineering</span>
          <span className="hero-tag">Data Analysis & Visualization</span>
        </div>

        <a href="#skills" className="hero-cta">View Skills ↓</a>
        <a href="#projects" className="hero-cta">View Projects ↓</a>

      </div>
    </section>
  );
}
