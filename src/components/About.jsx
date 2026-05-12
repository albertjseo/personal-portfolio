export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <p className="section-subtitle"></p>

      <div className="about-layout">
        <div className="glass-card fade-up">
          <p className="about-text">
            I’m a computational scientist with a foundation in molecular biology and hands‑on experience building data pipelines.
            I develop systems that transform raw data into interpretable, reproducible insights—spanning analysis, workflows, and large‑scale comparative modeling.
          </p>

          <p className="about-text">
            My work sits at the intersection of bioinformatics, data engineering, and scientific computing.
            I care deeply about reproducibility, documentation, and building tools that researchers can trust—whether.
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
