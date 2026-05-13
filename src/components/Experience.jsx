export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience & Education</h2>
      <p className="section-subtitle"></p>

      {/* Separator */}
      <div className="experience-separator">
        <div className="separator-line"></div>
        <span className="separator-text">Experience</span>
        <div className="separator-line"></div>
      </div>

      {/* Work Experience */}
      <div className="glass-card fade-up">
        <div className="experience-item">
          <img src="/logos/uiuc-logo.png" alt="UIUC Logo" className="experience-logo-small" />
          <div className="experience-content">
            <div className="timeline-title">Bioinformatician</div>
            <div className="timeline-meta">University of Illinois Urbana-Champaign - GCA Lab</div>
           <div className="timeline-meta">March 2026 - Present</div>
          </div>
        </div>
      </div>

      <br />

      <div className="glass-card fade-up">
        <div className="experience-item">
          <img src="/logos/costco-logo.png" alt="Costco Logo" className="experience-logo-small" />
          <div className="experience-content">
            <div className="timeline-title">Data Analyst III, Data Analyst II</div>
            <div className="timeline-meta">Costco Corporate</div>
            <div className="timeline-meta">June 2024 - Present</div>
          </div>
        </div>
      </div>

      <div className="glass-card fade-up">
        <div className="experience-item">
          <img src="/logos/uw-logo.png" alt="UW Logo" className="experience-logo-small" />
          <div className="experience-content">
            <div className="timeline-title">Research Scientist/Engineer</div>
            <div className="timeline-meta">University of Washington - Veesler Lab</div>
            <div className="timeline-meta">June 2023 – May 2024</div>
          </div>
        </div>
      </div>

      <div className="glass-card fade-up">
        <div className="experience-item">
          <img src="/logos/seattle-childrens-logo.png" alt="Seattle Children's Logo" className="experience-logo-small" />
          <div className="experience-content">
            <div className="timeline-title">Research Technician II, I, Student Helper, Volunteer</div>
            <div className="timeline-meta">Seattle Children's Research Institute - Piliponsky Lab</div>
            <div className="timeline-meta">June 2019 – June 2023</div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="experience-separator">
        <div className="separator-line"></div>
        <span className="separator-text">Education</span>
        <div className="separator-line"></div>
      </div>

      {/* Education */}
      <div className="glass-card fade-up">
        <div className="experience-item">
          <img src="/logos/uiuc-logo.png" alt="UIUC Logo" className="experience-logo" />
          <div className="experience-content">
            <div className="timeline-title">Masters</div>
            <div className="timeline-meta"><b>Bioengineering: Computational Biology</b></div>
            <div className="timeline-meta">University of Illinois Urbana-Champaign</div>
          </div>
        </div>
      </div>

      <div className="glass-card fade-up">
        <div className="experience-item">
          <img src="/logos/uw-logo.png" alt="UW Logo" className="experience-logo" />
          <div className="experience-content">
            <div className="timeline-title">Bachelor of Science</div>
            <div className="timeline-meta"><b>Physics: Biophysics</b></div>
            <div className="timeline-meta">University of Washington</div>
          </div>
        </div>
      </div>
    </section>
  );
}
