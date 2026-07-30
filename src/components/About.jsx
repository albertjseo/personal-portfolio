export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <p className="section-subtitle"></p>

      <div className="about-layout">
        <div className="glass-card fade-up">
          <p className="about-text">
            I build computational tools and scalable data workflows that power modern research, analytics, and data‑driven decision making. My work sits at the intersection of data engineering, computational data science, and bioinformatics, where I design Python pipelines, automation systems, and reproducible analytics frameworks for complex scientific and operational datasets.
          </p>
          <p className="about-text">
            With 5+ years of experience across Seattle Children’s Research Institute and the University of Washington, I’ve developed a strong foundation in computational methods, HPC‑scale processing, and structured data engineering. I focus on creating reliable, well‑designed data systems that transform messy, heterogeneous information into clear, actionable insights.
          </p>

          <div className="about-grid">
            <div className="about-pill">Python Pipelines & Automation</div>
            <div className="about-pill">Computational Biology</div>
            <div className="about-pill">Data Science</div>
            <div className="about-pill">Structured Data Modeling</div>
            <div className="about-pill">Reproducible Workflows</div>
          </div>
        </div>

        <div className="glass-card fade-up">
          <h3>What I focus on</h3>
          <ul className="skills-list">
            <li>Scalable Python pipelines for data ingestion, transformation, and validation</li>
            <li>Computational workflows for protein structure prediction, modeling, and analysis</li>
            <li>Data wrangling, modeling, and visualization across scientific and operational datasets</li>
            <li>Automating data collection, reporting, and processing across diverse datasets</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
