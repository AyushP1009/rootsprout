import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="animate-in">
      {/* Hero */}
      <div className="about-hero">
        <div className="about-hero-inner">
          <div className="hero-eyebrow" style={{ marginBottom: "16px" }}>
            <span>🌻</span> PAL Jayden's Group · Emerging Leaders Program
          </div>
          <h1>Meet Group London</h1>
          <p>We're a group of young leaders from Charlotte who built this platform to shine a light on food insecurity and help our community do something about it.</p>
        </div>
      </div>

      {/* ── Group photo + intro card ───────────────── */}
      <div style={{ padding: "0 24px" }}>
        <div className="about-intro-card">

          {/* Left: group photo */}
          <div className="about-photo-frame">
            {
              
            }
            
            {<img src="/group-photo.jpg" alt="Group London" /> }
            <div className="about-photo-caption"></div>
          </div>

          {/* Right: who we are */}
          <div className="about-intro-text">
            <span className="team-badge">👋 Who We Are</span>
            <h2>We are Group London and this is our project.</h2>
            <p>
              We're a team of students in <strong>PAL Jayden's group</strong>, participating in the <strong>Emerging Leaders program</strong> at UNC Charlotte. We came together around one shared belief: that where you live should never decide whether you eat well.
            </p>
            <p>
              Charlotte has real food deserts, neighborhoods where families, especially young children, struggle to find fresh and affordable food. We built Plant 2 Plate to <strong>raise awareness of this issue</strong> and give our community real tools to take action.
            </p>
            <p>
              This site is our Emerging Leaders project, but more than that, it's our commitment to the city we call home.
            </p>
            <div className="about-program-pills">
              <span className="about-program-pill">🎓 Emerging Leaders Program</span>
              <span className="about-program-pill">👥 PAL Jayden's Group</span>
              <span className="about-program-pill">🏙️ Charlotte, NC</span>
              <span className="about-program-pill">🌱 Group London</span>
            </div>
          </div>

        </div>
      </div>

      {/* ── Mission quote ─────────────────────────── */}
      <div className="about-quote-banner" style={{ padding: "0 24px" }}>
        <div className="about-quote-inner">
          <div className="about-quote-mark">"</div>
          <div className="about-quote-text">
            We didn't build this website to get a grade. We built it because <em>real kids in our city</em> go to bed hungry and we think that's something worth fighting for.
            <div style={{ fontSize: ".85rem", fontWeight: "500", color: "rgba(251,247,240,.55)", marginTop: "12px", fontFamily: "var(--font-sans)" }}>
              — Group London, Emerging Leaders Program
            </div>
          </div>
        </div>
      </div>

      {/* ── Why we made this ──────────────────────── */}
      <section className="section" style={{ background: "var(--white)", paddingBottom: "16px" }}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">Our purpose</div>
            <h2 className="section-title">Why we created Plant 2 Plate</h2>
            <p className="section-sub">Three goals guided every decision we made when building this platform.</p>
          </div>
          <div className="about-values">
            <div className="about-value-card">
              <span className="val-icon">📢</span>
              <div className="val-title">Spread awareness</div>
              <div className="val-body">Most people don't realize how many families right here in Charlotte lack access to healthy food. We want to change that, starting with this website.</div>
            </div>
            <div className="about-value-card">
              <span className="val-icon">🗺️</span>
              <div className="val-title">Connect families to help</div>
              <div className="val-body">Awareness isn't enough. We built the Food Locator so that any parent in Charlotte can find a food bank or pantry near them in seconds, no searching required.</div>
            </div>
            <div className="about-value-card">
              <span className="val-icon">🌱</span>
              <div className="val-title">Teach long-term solutions</div>
              <div className="val-body">The Grow Your Own hub teaches families and kids how to grow their own food at home, a skill that lasts a lifetime and doesn't depend on a pantry being nearby.</div>
            </div>
            <div className="about-value-card">
              <span className="val-icon">💡</span>
              <div className="val-title">Lead by example</div>
              <div className="val-body">As Emerging Leaders, we believe young people have a responsibility to use what we learn to make a real difference. This project is us putting that belief into action.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats row ─────────────────────────────── */}
      <div style={{ padding: "0 24px" }}>
        <div className="about-stats-row">
          <div className="about-stat-card">
            <div className="stat-num">7+</div>
            <div className="stat-lbl">Local food resources listed across Charlotte, NC</div>
          </div>
          <div className="about-stat-card">
            <div className="stat-num">3</div>
            <div className="stat-lbl">Step-by-step growing guides built for beginners and kids</div>
          </div>
          <div className="about-stat-card">
            <div className="stat-num">1 in 7</div>
            <div className="stat-lbl">Children in Mecklenburg County face food insecurity, that's why we're here</div>
          </div>
        </div>
      </div>

      {/* ── CTA strip ──────────────────────────────── */}
      <div className="mission-strip" style={{ flexDirection: "column", gap: "16px", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: "800", color: "#fff", maxWidth: "480px", lineHeight: "1.3" }}>
          Explore what we built.
        </p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/grow" className="btn-secondary">🌿 Grow Your Own</Link>
          <Link href="/find-food" className="btn-primary" style={{ background: "rgba(255,255,255,.15)", border: "1.5px solid rgba(255,255,255,.4)", boxShadow: "none" }}>
            🗺 Find Local Food
          </Link>
        </div>
      </div>

    </div>
  );
}