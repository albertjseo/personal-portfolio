export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <p className="section-subtitle"></p>

      <div className="about-layout">
        <div className="glass-card fade-up">
          <p className="about-text">
            I build computational tools and workflows that support modern research — including protein modeling, sequence analysis, and large‑scale data processing.
          </p>

          <p className="about-text">
            My work bridges bioinformatics and data engineering. I focus on designing scalable data pipelines, automation, and scientific software that bring engineering reliability to large datasets and research workflows.
          </p>

          <div className="about-grid">
            <div className="about-pill">Computational & Structural Biology</div>
            <div className="about-pill">Python-based Pipelines</div>
            <div className="about-pill">Data Science & Modeling</div>
            <div className="about-pill">Reproducible Workflows</div>
          </div>
        </div>

        <div className="glass-card fade-up">
          <h3>What I focus on</h3>
          <ul className="skills-list">
            <li>Protein structure workflows (prediction, design, visualization)</li>
            <li>Sequence analysis and similarity search</li>
            <li>Data wrangling, modeling, and visualization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
