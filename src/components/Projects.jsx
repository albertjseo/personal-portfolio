export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects & Publications</h2>
      <p className="section-subtitle">
        Selected work spanning protein structure prediction, sequence analysis, and data‑driven modeling.
      </p>

      {/* Separator */}
      <div className="experience-separator">
        <div className="separator-line"></div>
        <span className="separator-text">Projects</span>
        <div className="separator-line"></div>
      </div>

      <div className="projects-grid">

        <a
          href="https://github.com/albertjseo/blast_app"
          target="_blank"
          rel="noreferrer"
          className="project--title"
        >
          <article className="glass-card fade-up">
            <h3>BLAST App</h3>
            <p className="project-text">
            </p>
            <div className="project-tags">
              <span>Python</span>
              <span>HTML</span>
              <span>Jinja</span>
              <span>FLASK</span>
              <span>BLAST</span>
              <span>API</span>
            </div>
          </article>
        </a>

        <a
          href="https://github.com/albertjseo/connectome-explorer"
          target="_blank"
          rel="noreferrer"
          className="project--title"
        >
          <article className="glass-card fade-up">
            <h3>Connectome Explorer</h3>
            <p className="project-text">
            </p>
            <div className="project-tags">
              <span>Python</span>
              <span>Pandas</span>
              <span>Networkx</span>
              <span>Matplotlib</span>
            </div>
          </article>
        </a>

        <a
          href="https://github.com/albertjseo/breast-cancer-histopathology-classifier"
          target="_blank"
          rel="noreferrer"
          className="project--title"
        >
          <article className="glass-card fade-up">
            <h3>Breast Cancer Histopathology Classifier</h3>
            <p className="project-text">
            </p>
            <div className="project-tags">
              <span>Python</span>
              <span>SVM</span>
              <span>SciPy</span>
            </div>
          </article>
        </a>

        <a
          href="https://github.com/albertjseo/ovarian-cancer-metrics"
          target="_blank"
          rel="noreferrer"
          className="project--title"
        >
          <article className="glass-card fade-up">
            <h3>Ovarian Cancer Analysis</h3>
            <p className="project-text">
            </p>
            <div className="project-tags">
              <span>Python</span>
              <span>ScanPy</span>
              <span>Seaborn</span>
              <span>Matplotlib</span>
            </div>
          </article>
        </a>

        <a
          href="https://github.com/albertjseo/covid19-mutations"
          target="_blank"
          rel="noreferrer"
          className="project--title"
        >
          <article className="glass-card fade-up">
            <h3>Covid‑19 Mutation Characterization</h3>
            <p className="project-text">
            </p>
            <div className="project-tags">
              <span>Python</span>
              <span>BioPython</span>
            </div>
          </article>
        </a>

        <a
          href="https://github.com/albertjseo/cell-image-processing"
          target="_blank"
          rel="noreferrer"
          className="project--title"
        >
          <article className="glass-card fade-up">
            <h3>Cell Morphology Tracker</h3>
            <p className="project-text">
            </p>
            <div className="project-tags">
              <span>MATLAB</span>
              <span>Computer Vision</span>
            </div>
          </article>
        </a>

        <a
          href="https://github.com/albertjseo/covid19-analysis-with-sql"
          target="_blank"
          rel="noreferrer"
          className="project--title"
        >
          <article className="glass-card fade-up">
            <h3>Covid‑19 with SQL</h3>
            <p className="project-text">
            </p>
            <div className="project-tags">
              <span>Python</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>SQL</span>
              <span>FLASK</span>
            </div>
          </article>
        </a>

        <a
          href="https://github.com/albertjseo/drug-discovery"
          target="_blank"
          rel="noreferrer"
          className="project--title"
        >
          <article className="glass-card fade-up">
            <h3>Drug Discovery</h3>
            <p className="project-text">
            </p>
            <div className="project-tags">
              <span>Python</span>
            </div>
          </article>
        </a>
      </div>

      {/* Separator */}
      <div className="experience-separator">
        <div className="separator-line"></div>
        <span className="separator-text">Publications</span>
        <div className="separator-line"></div>
      </div>

    </section>
  );
}
