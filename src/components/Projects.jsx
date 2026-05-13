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
              A browser‑based Flask tool that validates FASTA sequences and runs NCBI BLAST queries directly through an integrated interface.
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
              A Python workflow for retrieving, analyzing, and visualizing protein–protein interaction networks using STRING database data.
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
              A machine‑learning pipeline for classifying benign and malignant breast tissue images using statistical modeling and feature‑based analysis.
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
              A single‑cell preprocessing and clustering workflow built with Scanpy to explore transcriptional patterns in ovarian cancer datasets.
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
              A Python toolkit for identifying, annotating, and summarizing mutations in SARS‑CoV‑2 spike protein sequences, with emphasis on RBD variation.
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
              A MATLAB‑based image analysis tool for detecting and quantifying morphological changes in cell samples from microscopy data.
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
              A Flask application that enables interactive exploration of COVID‑19 datasets stored and queried through a structured SQL backend.
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
              A personal research tool designed to streamline the search and evaluation of protein targets for early‑stage vaccine and therapeutic exploration.
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

      <a
      href="https://doi.org/10.1111/all.16651"
      target="_blank"
      rel="noreferrer"
      className="project--title"
      >
        <div className="glass-card pub-card fade-up">
          <h3 className="pub-title">
            Mast Cells Are Intrinsically Primed for Degranulation in DOCK8 Deficiency
          </h3>
          <p className="pub-journal">Allergy (2025)</p>
          <p className="pub-authors">
            Samanas NB, Miralda I, Camp N, Sachen J, Puryear V, Shah L, <span className="author-me">Seo AJ</span>, Foronda JS, Shapiro M, Baris S, Unal E, Eken A, Morrison SD,
            Allenspach EJ, Deutsch GH, James RG, Piliponsky AM
          </p>
          <div className="pub-tags">
            <span>DOI:10.1111/all.16651</span>
          </div>
        </div>
      </a>

      <a
        href="https://doi.org/10.1016/j.celrep.2024.114530"
        target="_blank"
        rel="noreferrer"
        className="project--title"
      >
        <div className="glass-card pub-card fade-up">
          <h3 className="pub-title">
            Mapping immunodominant sites on the MERS‑CoV spike glycoprotein targeted by infection‑elicited antibodies in humans
          </h3>
          <p className="pub-journal">Cell Reports (2024)</p>
          <p className="pub-authors">
            Addetia A, Stewart C, <span className="author-me">Seo AJ</span> Sprouse KR, Asiri AY, Al‑Mozaini M, Memish ZA, Alshukairi AN, Veesler D
          </p>
          <div className="pub-tags">
            <span>DOI: 10.1016/j.celrep.2024.114530</span>
          </div>
        </div>
      </a>

      <a
        href="https://doi.org/10.1016/j.immuni.2024.02.016"
        target="_blank"
        rel="noreferrer"
        className="project--title"
      >
        <div className="glass-card pub-card fade-up">
          <h3 className="pub-title">
            Persistent immune imprinting occurs after vaccination with the COVID‑19 XBB.1.5 mRNA booster in humans
          </h3>
          <p className="pub-journal">Immunity (2024)</p>
          <p className="pub-authors">
            Tortorici MA, Addetia A, <span className="author-me">Seo AJ</span>, Brown J, Sprouse K, Logue J, Clark E, Franko N, Chu H, Veesler D
          </p>
          <div className="pub-tags">
            <span>DOI: 10.1016/j.immuni.2024.02.016</span>
          </div>
        </div>
      </a>

      <a
        href="https://doi.org/10.1016/j.jaci.2023.04.007"
        target="_blank"
        rel="noreferrer"
        className="project--title"
      >
        <div className="glass-card pub-card fade-up">
          <h3 className="pub-title">
            Siglec‑9 is an inhibitory receptor on human mast cells in vitro
          </h3>
          <p className="pub-journal">JACI (2023)</p>
          <p className="pub-authors">
            Miralda I, Samanas NB, <span className="author-me">Seo AJ</span>, Foronda JS, Sachen J, Hui Y, Morrison SD, Oskeritzian CA, Piliponsky AM
          </p>
          <div className="pub-tags">
            <span>DOI: 10.1016/j.jaci.2023.04.007</span>
          </div>
        </div>
      </a>

      <a
        href="https://doi.org/10.1172/JCI157999"
        target="_blank"
        rel="noreferrer"
        className="project--title"
      >
        <div className="glass-card pub-card fade-up">
          <h3 className="pub-title">
            Mast cell‑derived factor XIIIA contributes to sexual dimorphic defense against group B streptococcal infections
          </h3>
          <p className="pub-journal">JCI (2022)</p>
          <p className="pub-authors">
            Piliponsky AM, Sharma K, Quach P, Brokaw A, Nguyen S, Orvis A, Saha SS, Samanas NB, Seepersaud R, Tang YP, Mackey E, Bhise G,
            Gendrin C, Furuta A,  <span className="author-me">Seo AJ</span>, Guga E, Miralda I, Coleman M, Sweeney EL, Bäuml CA, Imhof D, Snyder JM, Moeser AJ, Rajagopal L
          </p>
          <div className="pub-tags">
            <span>DOI: 10.1172/JCI157999</span>
          </div>
        </div>
      </a>

      <a
        href="https://doi.org/10.1016/j.jaci.2021.07.014"
        target="_blank"
        rel="noreferrer"
        className="project--title"
      >
        <div className="glass-card pub-card fade-up">
          <h3 className="pub-title">
            Mast cell surfaceome characterization reveals CD98 heavy chain is critical for optimal cell function
          </h3>
          <p className="pub-journal">JACI (2022)</p>
          <p className="pub-authors">
            Saha SS, Samanas NB, Miralda I, Shubin NJ, Niino K, Bhise G, Acharya M, <span className="author-me">Seo AJ</span>, Camp N, Deutsch GH, James RG, Piliponsky AM
          </p>
          <div className="pub-tags">
            <span>DOI: 10.1016/j.jaci.2021.07.014</span>
          </div>
        </div>
      </a>

    </section>
  );
}
