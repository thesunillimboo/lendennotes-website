import "./App.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const features = [
  {
    title: "Money You Lent",
    description: "Keep a clear record of everyone who owes you.",
  },
  {
    title: "Money You Borrowed",
    description: "Remember what you owe and when to repay it.",
  },
  {
    title: "Due Dates",
    description: "Add repayment dates so promises do not get lost.",
  },
  {
    title: "Repayments",
    description: "Track partial payments and settlement progress.",
  },
  {
    title: "Interest Records",
    description: "Record interest clearly when a transaction has it.",
  },
  {
    title: "Multi Currency",
    description: "Useful for Nepal, the UK, and diaspora communities.",
  },
];

function App() {
  if (window.location.pathname === "/#privacy-policy") {
    return <PrivacyPolicy />;
  }
  return (
    <div className="app">
      <header className="header">
        <a className="logo" href="#top" aria-label="LenDen Notes home">
          <img src="/logo.svg" alt="LenDen Notes logo" />
          <span>LenDen Notes</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#waitlist">Waitlist</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Launching soon</p>

            <h1>
              The easiest way to remember who <span>owes what.</span>
            </h1>

            <p className="hero-description">
              LenDen Notes is a simple lending and borrowing tracker app that
              helps you remember money you lent, borrowed, repayments, due
              dates, and interest — without messy notes, WhatsApp chats,
              spreadsheets, or mental math.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#waitlist">
                Join Waitlist
              </a>
              <a className="secondary-button" href="#features">
                See Features
              </a>
            </div>
          </div>

          <div className="hero-preview" aria-label="LenDen Notes app preview">
            <div className="phone-card">
              <div className="phone-header">
                <span>Welcome back 👋</span>
                <small>Here&apos;s your overview</small>
              </div>

              <div className="balance-card">
                <small>You are owed</small>
                <strong>Rs. 120,500</strong>
              </div>

              <div className="mini-grid">
                <div>
                  <small>You Lent</small>
                  <strong>Rs. 150,000</strong>
                  <span>12 People</span>
                </div>
                <div>
                  <small>You Borrowed</small>
                  <strong>Rs. 29,500</strong>
                  <span>5 People</span>
                </div>
              </div>

              <div className="due-card">
                <small>Upcoming Due</small>
                <strong>Rs. 45,000</strong>
                <span>3 payments</span>
              </div>

              <div className="activity-card">
                <div>
                  <strong>Ramesh Gurung</strong>
                  <span>Owes you</span>
                </div>
                <strong>Rs. 5,000</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <p className="eyebrow">Why it matters</p>
          <h2>Informal money is easy to forget.</h2>

          <p>
            Friends borrow money. Family asks for help. Small shops give credit.
            People say “I’ll pay you later.” Then dates, amounts, and promises
            become messy.
          </p>

          <p>
            LenDen Notes keeps those everyday money records simple, clear, and
            stress free — like a personal memory utility for lending and
            borrowing.
          </p>
        </section>

        <section className="features" id="features">
          <p className="eyebrow">Simple on the surface</p>
          <h2>What You Can Track</h2>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="waitlist" id="waitlist">
          <div>
            <p className="eyebrow">Early access</p>
            <h2>Join The Waitlist</h2>
            <p>
              Be among the first users when LenDen Notes launches. Built with a
              simple belief: everyday money promises should not be forgotten.
            </p>
          </div>

          <form
            className="waitlist-form"
            action="https://formspree.io/f/xdajoaaq"
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <input
              type="hidden"
              name="_subject"
              value="New LenDen Notes waitlist signup"
            />
            <button type="submit">Notify Me</button>
          </form>

          <p className="form-message">
            After submitting, you may see a short confirmation from Formspree.
          </p>
        </section>
      </main>

      <footer className="footer">
        <a className="footer-logo" href="#top" aria-label="LenDen Notes home">
          <img src="/logo.svg" alt="LenDen Notes logo" />
          <span>LenDen Notes</span>
        </a>

        <p>© 2026 LenDen Notes. All rights reserved.</p>

        <a className="privacy-link" href="/#privacy-policy">
          Privacy Policy
        </a>

        <div className="social-links" aria-label="Social links">
          <a href="#top" aria-label="Instagram">
            Instagram
          </a>
          <a href="#top" aria-label="Facebook">
            Facebook
          </a>
          <a href="#top" aria-label="TikTok">
            TikTok
          </a>
          <a href="#top" aria-label="LinkedIn">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
