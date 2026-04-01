import Link from "next/link";

export default function Home() {
  return (
    <div className="animate-in">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-eyebrow animate-in">
              <span>🌱</span> Charlotte, NC Community Initiative
            </div>
            <h1 className="hero-title animate-in delay-1">
              Every child deserves to <span className="accent">grow</span> and be <span className="accent">nourished.</span>
            </h1>
            <p className="hero-desc animate-in delay-2">
              Little Green Thumb helps Charlotte families access fresh food resources and learn to grow their own produce, right in their own homes and communities.
            </p>
            <div className="hero-actions animate-in delay-3">
              <Link href="/grow" className="btn-primary">
                🌿 Start Growing
              </Link>
              <Link href="/find-food" className="btn-secondary">
                🗺 Find Local Food
              </Link>
            </div>
          </div>
          <div className="hero-visual animate-in delay-4">
            <div className="hero-illustration">
              <span className="plant-emoji">🌻</span>
              <p style={{ color: "rgba(255,255,255,.7)", fontSize: ".85rem", textAlign: "center", marginBottom: "16px" }}>
                Serving families across Charlotte, NC
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="num">7+</div>
                  <div className="lbl">Food Resources Listed</div>
                </div>
                <div className="hero-stat">
                  <div className="num">3</div>
                  <div className="lbl">Growing Guides</div>
                </div>
                <div className="hero-stat">
                  <div className="num">Free</div>
                  <div className="lbl">Always & Forever</div>
                </div>
                <div className="hero-stat">
                  <div className="num">CLT</div>
                  <div className="lbl">Charlotte-Focused</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <div className="mission-strip">
        <div className="mission-item"><span>🥦</span> Fight food insecurity</div>
        <div className="mission-item"><span>👩‍🌾</span> Teach kids to grow food</div>
        <div className="mission-item"><span>🤝</span> Connect families to help</div>
        <div className="mission-item"><span>🏙️</span> Strengthen Charlotte communities</div>
      </div>

      {/* CTA cards section */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="section-inner">
          <div className="section-header">
            <div className="section-label">Two paths, one mission</div>
            <h2 className="section-title">Where would you like to start?</h2>
            <p className="section-sub">Whether you need food now or want to learn to grow your own, we've got you covered.</p>
          </div>
          <div className="cta-grid">
            <Link href="/grow" className="cta-card cta-card-grow">
              <span className="card-icon">🌿</span>
              <div className="card-title">Grow Your Own Food</div>
              <p className="card-desc">Step-by-step guides for growing tomatoes, beans, and herbs — even in a small pot on your porch. Includes a special kid-friendly learning section!</p>
              <div className="card-btn">Start Learning →</div>
              <div className="bg-deco">🌱</div>
            </Link>
            <Link href="/find-food" className="cta-card cta-card-find">
              <span className="card-icon">🏪</span>
              <div className="card-title">Find Food Near You</div>
              <p className="card-desc">Browse food banks, pantries, and mobile food resources right here in Charlotte, NC. No judgment. No barriers. Just help when you need it.</p>
              <div className="card-btn">Find Resources →</div>
              <div className="bg-deco">🥕</div>
            </Link>
          </div>
        </div>
      </section>

      {/* About / Why section */}
      <section className="section">
        <div className="section-inner">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <div className="section-label">Why it matters</div>
              <h2 className="section-title">Charlotte has food deserts. We're helping change that.</h2>
              <p style={{ color: "var(--text-mid)", lineHeight: "1.8", marginBottom: "16px", fontSize: "1rem" }}>
                A food desert is a neighborhood where it's hard to find affordable, healthy food nearby. Many families in Charlotte, especially in the west and north corridors, live more than a mile from a grocery store.
              </p>
              <p style={{ color: "var(--text-mid)", lineHeight: "1.8", fontSize: "1rem" }}>
                RootSprout bridges two gaps at once: teaching families to <strong>grow their own food</strong> and making it easy to <strong>find immediate help</strong> when they need it most.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ background: "var(--sky)", borderRadius: "var(--radius-md)", padding: "28px 20px", textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", fontFamily: "var(--font-serif)", fontWeight: "900", color: "var(--leaf)" }}>23%</div>
                <div style={{ fontSize: ".85rem", color: "var(--text-soft)", marginTop: "6px", lineHeight: "1.5" }}>of Charlotte residents live in low-income, low-access food areas</div>
              </div>
              <div style={{ background: "#FFF8E1", borderRadius: "var(--radius-md)", padding: "28px 20px", textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", fontFamily: "var(--font-serif)", fontWeight: "900", color: "#D4A017" }}>1 in 7</div>
                <div style={{ fontSize: ".85rem", color: "var(--text-soft)", marginTop: "6px", lineHeight: "1.5" }}>children in Mecklenburg County face food insecurity</div>
              </div>
              <div style={{ background: "#FCE4EC", borderRadius: "var(--radius-md)", padding: "28px 20px", textAlign: "center", gridColumn: "1/-1" }}>
                <div style={{ fontSize: ".85rem", color: "var(--text-soft)", lineHeight: "1.6" }}>
                  Growing your own food. even in a single pot, can provide <strong style={{ color: "var(--text-dark)" }}>meaningful nutrition</strong> and build lifelong healthy habits in children.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}