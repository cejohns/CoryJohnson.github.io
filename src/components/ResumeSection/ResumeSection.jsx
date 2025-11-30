import './ResumeSection.css';

export default function ResumeSection() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-inner">
        <div className="resume-card">
          <div className="resume-card-header">
            <p className="section-kicker">PROFESSIONAL EXPERIENCE</p>
            <h2 className="resume-title">Experience &amp; Resume</h2>
            <p className="resume-subtitle">
              Explore my work history in aerospace manufacturing, web
              development, game development, and IT support — showing how I
              moved from teaching and tech support into full-stack and gameplay
              engineering.
            </p>
          </div>

          <div className="resume-body">
            <ul className="resume-highlights">
              <li>
                <span className="dot" />
                <span>
                  <strong>Mid-Level engineer</strong> with hands-on experience in
                  React/Node, C#/Unity, and Unreal Engine 5.
                </span>
              </li>
              <li>
                <span className="dot" />
                <span>
                  <strong>Aerospace composite technician</strong> background,
                  used to strict processes, documentation, and quality gates.
                </span>
              </li>
              <li>
                <span className="dot" />
                <span>
                  <strong>Freelance + studio projects</strong> spanning
                  full-stack apps, tools, and shipped indie games.
                </span>
              </li>
            </ul>

            <div className="resume-actions">
              {/* Update these hrefs to your actual resume/work history links */}
              <a
                href="/workHistory.html"
                className="resume-button resume-button-primary"
              >
                View Full Work History
              </a>
              <a
                href="https://www.linkedin.com/in/coryevanjohnson"
                target="_blank"
                rel="noreferrer"
                className="resume-button resume-button-ghost"
              >
                Open LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
