export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects & Publications</h2>
      <p className="section-subtitle">
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
              A Flask application for validating FASTA sequences and directly running NCBI BLAST searches within a browser.
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
              Python-based tool used for fetching, analyzing, and visualizing protein-protein interaction networks using data from the STRING database.
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
              Python-based analytical pipeline for classifying benign and malignant breast cancer histopathology images
              using statistical and machine learning methods.
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
              Practice pf preprocessing and clustering single-cell data for ovarian cancer cells by using the scanpy toolkit.
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
              Python‑based toolkit to identify and catalog mutations in SARS‑CoV‑2 sequences, focusing on the receptor‑binding
              domain (RBD) of the spike protein.
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
              MATLAB‑based image analysis tool to detect and quantify morphological changes in cell samples from microscope
              slides.
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
              A Flask App that provides a user the ability to interact with COVID19 data that was managed with the use of SQL queries
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
              On-going personal project that stemmed from professional
              experiences to optimize searching online sources for specific protein targets to explore vaccine candidates in a research setting.
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
