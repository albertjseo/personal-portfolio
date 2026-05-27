export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <p className="section-subtitle"></p>

      <div className="about-layout">
        <div className="glass-card fade-up">
          <p className="about-text">
            I build computational tools and workflows that support modern research and data-driven storytelling and decision making.
          </p>

          <p className="about-text">
            I work at the intersection of data science and bioinformatics, building scalable Python pipelines and computational tools for analyzing a variety of datasets.
          </p>

          <div className="about-grid">
            <div className="about-pill">Bioinformatics</div>
            <div className="about-pill">Python-based Pipelines</div>
            <div className="about-pill">Data Science & Modeling</div>
            <div className="about-pill">Reproducible Workflows</div>
          </div>
        </div>

        <div className="glass-card fade-up">
          <h3>What I focus on</h3>
          <ul className="skills-list">
            <li>Protein structure workflows (prediction, design, visualization)</li>
            <li>Data wrangling, modeling, and visualization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
