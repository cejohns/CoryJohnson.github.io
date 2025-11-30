import './ContactSection.css';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-card">
          <header className="contact-header">
            <p className="section-kicker">GET IN TOUCH</p>
            <h2 className="contact-title">Contact Me</h2>
            <p className="contact-subtitle">
              Open to mid-level software engineering, full-stack, and gameplay
              roles — remote or in North Carolina. Feel free to reach out about
              roles, collaborations, or contract work.
            </p>
          </header>

          <div className="contact-body">
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <a
                href="mailto:cejohns3@gmail.com"
                className="contact-value contact-link"
              >
                cejohns3@gmail.com
              </a>
            </div>

            <div className="contact-row">
              <span className="contact-label">GitHub</span>
              <a
                href="https://github.com/cejohns"
                target="_blank"
                rel="noreferrer"
                className="contact-value contact-link"
              >
                github.com/cejohns
              </a>
            </div>

            <div className="contact-row">
              <span className="contact-label">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/coryevanjohnson"
                target="_blank"
                rel="noreferrer"
                className="contact-value contact-link"
              >
                linkedin.com/in/coryevanjohnson
              </a>
            </div>
          </div>

          <div className="contact-actions">
            <a
              href="mailto:cejohns3@gmail.com?subject=Hi%20Cory%20%E2%80%94%20Let%27s%20Connect"
              className="contact-button"
            >
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
