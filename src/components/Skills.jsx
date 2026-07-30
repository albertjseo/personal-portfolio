export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle"></p>

      <div className="skills-grid">
          {/* Data Engineering & Programming */}
          <div className="glass-card fade-up">
            <h3>Data Engineering & Programming</h3>
            <ul className="skills-list">
              <li>Python, SQL, JavaScript, MATLAB</li>
              <li>Pandas, NumPy, Requests, Matplotlib/Seaborn</li>
              <li>Flask, React, Google Apps Script, BigQuery</li>
              <li>Git, Shell Scripting, HTML/CSS</li>
              <li>ETL Pipelines, Data Modeling, API Integration</li>
            </ul>
          </div>

          {/* Bioinformatics & Scientific Computing */}
          <div className="glass-card fade-up">
            <h3>Bioinformatics & Scientific Computing</h3>
            <ul className="skills-list">
              <li>BLAST, PAUP, Chimera, ImageJ, FlowJo, GraphPad Prism, SnapGene</li>
              <li>AlphaFold3 (structure prediction)</li>
              <li>Comparative Modeling & Structural Analysis</li>
              <li>Protein–Protein Interactions</li>
              <li>Sequence Analysis Workflows</li>
            </ul>
          </div>

          {/* Infrastructure */}
          <div className="glass-card fade-up">
            <h3>Computational Infrastructure</h3>
            <ul className="skills-list">
              <li>Linux Systems, Bash Scripting</li>
              <li>HPC Clusters, SLURM Scheduling</li>
              <li>Parallelization, Job Arrays, Workflow Optimization</li>
              <li>Reproducible Pipelines & Distributed Processing</li>
            </ul>
          </div>

          {/* Wet Lab & Structural Biology */}
          {/* <div className="glass-card fade-up">
            <h3>Protein Science & Structural Biology</h3>
            <ul className="skills-list">
              <li>SEC, Affinity Purification, Protein Purification</li>
              <li>Pseudovirus Workflows</li>
              <li>Biochemical Assays</li>
              <li>Structural Modeling, Interaction Mapping</li>
            </ul>
          </div>

          <div className="glass-card fade-up">
            <h3>Molecular & Cellular Biology</h3>
            <ul className="skills-list">
              <li>RT‑PCR, Flow Cytometry, Immunoassays, Western Blotting</li>
              <li>Adherent & Suspension Culture, PBMCs</li>
              <li>Human & Murine Cell Line Handling</li>
            </ul>
          </div> */}

      </div>
    </section>
  );
}
