export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle"></p>

      <div className="skills-grid">
        <div className="glass-card fade-up">
          <h3>Bioinformatics</h3>
          <ul className="skills-list">
            <li>Protein structure prediction (AlphaFold3)</li>
            <li>Inverse folding (ProteinMPNN)</li>
            <li>Sequence analysis (BLAST, MSA)</li>
            <li>Structural visualization (ChimeraX, PyMOL)</li>
          </ul>
        </div>

        <div className="glass-card fade-up">
          <h3>Data Science & Analytics</h3>
          <ul className="skills-list">
            <li>Python (pandas, NumPy, SciPy, scikit‑learn)</li>
            <li>Exploratory analysis & statistical modeling</li>
            <li>Data wrangling, validation, and QC automation</li>
            <li>Visualization (Matplotlib, Seaborn, Plotly)</li>
            <li>SQL, BigQuery, and large‑scale data processing</li>
            <li>Web tools (Flask, HTML/CSS/JS, Apps Script)</li>
          </ul>
        </div>

        <div className="glass-card fade-up">
          <h3>Engineering & Workflows</h3>
          <ul className="skills-list">
            <li>HPC environments & batch scheduling</li>
            <li>Pipeline design</li>
            <li>Git‑based collaboration</li>
            <li>Automation (Selenium, ETL pipelines)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
