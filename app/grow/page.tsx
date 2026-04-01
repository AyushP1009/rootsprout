"use client";
import { useState } from "react";

// Hardcoded data embedded for the demo since the GrowModule backend API is not yet built
const LIFECYCLE_STAGES = [
  { emoji: "🫘", name: "The Seed", title: "🫘 The Seed", body: "A seed is like a tiny sleeping baby plant! Inside each seed is everything it needs to start growing. It's just waiting for warmth, water, and soil to wake it up. When you plant a seed, you're starting an amazing journey!" },
  { emoji: "💧", name: "Watering", title: "💧 Watering", body: "When you add water to the soil, the seed wakes up! Water travels into the seed and triggers it to start growing. Too much water can drown it, too little and it stays asleep. Getting the balance right is your first gardening superpower!" },
  { emoji: "🌱", name: "Sprouting", title: "🌱 Sprouting", body: "The seed has cracked open and a tiny root is pushing down, while a tiny shoot pushes UP through the soil. This is called germination. You'll see a little green bump push through the dirt — that's your plant saying hello! 🎉" },
  { emoji: "🌿", name: "Growing", title: "🌿 Growing", body: "Now your plant starts making leaves! Leaves are like solar panels — they capture sunlight and turn it into food for the plant. This is called photosynthesis. The more sun your plant gets, the bigger and stronger it grows." },
  { emoji: "☀️", name: "Flowering", title: "☀️ Flowering", body: "Flowers aren't just pretty — they're how the plant makes fruit! Bees and butterflies visit flowers and carry pollen from one flower to another. This is called pollination, and it's what tells the plant to start making your food!" },
  { emoji: "🍅", name: "Harvest!", title: "🍅 Harvest!", body: "The fruit is finally ready to pick! All that watering, sunlight, and care paid off. When you pick a tomato, bean, or herb that YOU grew, it tastes extra delicious because you know exactly how much love went into it. 🌟" },
];

const GROW_MODULES = [
  {
    id: 1, title: "Grow Cherry Tomatoes", cropName: "Cherry Tomato", difficulty: "EASY", daysToHarvest: 65, containerOk: true, sunNeeds: "Full sun (6–8 hrs/day)", waterNeeds: "2–3x per week", isKidsCorner: true, emoji: "🍅", description: "Cherry tomatoes are one of the easiest and most rewarding crops to grow at home — even in a small pot on a porch.",
    steps: [
      { stepNumber: 1, title: "Fill your container", iconEmoji: "🪣", body: "Choose a pot at least 12 inches deep. Fill it with potting mix, leaving 2 inches from the top.", tipForKids: "Think of the pot as the tomato's bed — it needs to be big enough to stretch out!" },
      { stepNumber: 2, title: "Plant your seedling", iconEmoji: "🌱", body: "Dig a small hole and place your seedling inside. Cover the roots gently with soil and press down lightly.", tipForKids: "Tuck the seedling in like you're tucking a friend in for a nap." },
      { stepNumber: 3, title: "Water & wait", iconEmoji: "💧", body: "Water until liquid drains from the bottom. Keep the soil moist — not soggy. Check it every day!", tipForKids: "Plants get thirsty too! Check the soil each morning before school." },
      { stepNumber: 4, title: "Add a stake", iconEmoji: "🪵", body: "As the plant grows taller, tie it gently to a wooden stake so it doesn't fall over.", tipForKids: "The stake is like a little walking stick that keeps the plant standing up tall." },
      { stepNumber: 5, title: "Harvest time!", iconEmoji: "🍅", body: "When tomatoes are fully red and feel firm but slightly soft, they're ready! Gently twist and pull.", tipForKids: "It's like picking candy — except healthier and YOU grew it!" },
    ]
  },
  {
    id: 2, title: "Grow Green Beans", cropName: "Green Bean", difficulty: "EASY", daysToHarvest: 55, containerOk: true, sunNeeds: "Full sun (6+ hrs/day)", waterNeeds: "1 inch per week", isKidsCorner: true, emoji: "🫘", description: "Green beans grow fast, produce abundantly, and can thrive in containers — making them perfect for small spaces.",
    steps: [
      { stepNumber: 1, title: "Soak your seeds", iconEmoji: "🫘", body: "Place seeds in a small bowl of water overnight. This helps them sprout faster.", tipForKids: "The seeds are waking up! They need a drink before they start their big journey." },
      { stepNumber: 2, title: "Plant 1 inch deep", iconEmoji: "✏️", body: "Push each seed about 1 inch into moist soil, spaced 3 inches apart.", tipForKids: "Use your finger like a pencil to poke the perfect hole!" },
      { stepNumber: 3, title: "Watch them sprout", iconEmoji: "🔍", body: "In 5–10 days you'll see tiny green sprouts push through the soil!", tipForKids: "Check every morning — it's like a surprise is coming up from underground!" },
      { stepNumber: 4, title: "Keep weeds away", iconEmoji: "🧹", body: "Pull out any weeds growing nearby so they don't steal water from your beans.", tipForKids: "Weeds are the sneaky bullies of the garden. Pull them out to protect your beans!" },
      { stepNumber: 5, title: "Pick when 4–6 inches", iconEmoji: "📏", body: "Harvest beans when they're 4–6 inches long and snap cleanly when bent.", tipForKids: "If it snaps with a crisp sound, it's ready to eat!" },
    ]
  },
  {
    id: 3, title: "Grow Fresh Basil", cropName: "Basil", difficulty: "EASY", daysToHarvest: 30, containerOk: true, sunNeeds: "Full sun (6+ hrs/day)", waterNeeds: "When top inch dries out", isKidsCorner: false, emoji: "🌿", description: "Basil is one of the fastest herbs to grow and adds incredible flavor to home cooking. Perfect on a sunny windowsill.",
    steps: [
      { stepNumber: 1, title: "Start with a small pot", iconEmoji: "🪴", body: "A 6-inch pot works great. Use well-draining potting mix and place it in your sunniest window.", tipForKids: "Basil loves the sun just like you might love a warm, sunny day!" },
      { stepNumber: 2, title: "Sprinkle seeds on top", iconEmoji: "✨", body: "Scatter a pinch of seeds on the soil surface and lightly press them down. Don't bury them deep.", tipForKids: "Basil seeds are so small! Be very gentle — they're like tiny sleeping babies." },
      { stepNumber: 3, title: "Mist with water", iconEmoji: "🌫️", body: "Use a spray bottle to keep the soil lightly moist until seeds sprout (about 5–7 days).", tipForKids: "A gentle mist is like a soft little rain shower for your seeds!" },
      { stepNumber: 4, title: "Pinch off flowers", iconEmoji: "✂️", body: "If flower buds appear, pinch them off. This keeps the leaves flavorful and encourages more growth.", tipForKids: "This sounds mean, but it actually helps the plant make more yummy leaves!" },
      { stepNumber: 5, title: "Harvest leaves", iconEmoji: "🌿", body: "Pick leaves from the top down. Always leave at least 2 pairs of leaves on the stem so it keeps growing.", tipForKids: "Smell your fingers after picking basil — it smells amazing!" },
    ]
  }
];

export default function GrowPage() {
  const [activeStage, setActiveStage] = useState(0);
  const [openSteps, setOpenSteps] = useState<number[]>([]);

  const handleToggleSteps = (id: number) => {
    setOpenSteps((prev) =>
      prev.includes(id) ? prev.filter((stepId) => stepId !== id) : [...prev, id]
    );
  };

  return (
    <div className="animate-in">
      <div className="grow-hero">
        <div className="locator-hero-inner">
          <h1>🌿 Grow Your Own</h1>
          <p>Easy guides for growing fresh food at home — even in a small space. Perfect for beginners and kids!</p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          {/* Kids Corner */}
          <div className="kids-corner">
            <div className="kids-corner-badge">⭐ Kid's Corner</div>
            <h2>How Does a Plant Grow?</h2>
            <p>Learning about plants is the first step to growing your own food! Click each stage below to learn what's happening underground — and above it!</p>

            <div className="lifecycle">
              {LIFECYCLE_STAGES.map((stage, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center" }}>
                  <div
                    className={`lifecycle-stage ${activeStage === idx ? "active" : ""}`}
                    onClick={() => setActiveStage(idx)}
                  >
                    <span className="stage-emoji">{stage.emoji}</span>
                    <div className="stage-name">{stage.name}</div>
                  </div>
                  {idx < LIFECYCLE_STAGES.length - 1 && <div className="lifecycle-arrow">→</div>}
                </div>
              ))}
            </div>

            <div className="stage-detail">
              <h3>{LIFECYCLE_STAGES[activeStage].title}</h3>
              <p>{LIFECYCLE_STAGES[activeStage].body}</p>
            </div>
          </div>

          {/* Growing Guides */}
          <div className="section-header">
            <div className="section-label">Step-by-step guides</div>
            <h2 className="section-title">Pick a crop, start growing</h2>
            <p className="section-sub">Each guide is written for beginners. All three crops can be grown in containers — perfect if you don't have a yard.</p>
          </div>

          <div className="grow-grid">
            {GROW_MODULES.map((m) => (
              <div key={m.id} className="grow-card">
                <div className="grow-card-thumb">{m.emoji}</div>
                <div className="grow-card-body">
                  <div className="grow-card-meta">
                    <span className={`diff-badge diff-${m.difficulty.toLowerCase()}`}>{m.difficulty}</span>
                    {m.containerOk && <span className="container-badge">🪴 Container-friendly</span>}
                    {m.isKidsCorner && (
                      <span style={{ fontSize: ".72rem", background: "#FFF8E1", color: "#7B5800", padding: "3px 9px", borderRadius: "40px", fontWeight: "600" }}>
                        ⭐ Kids Pick
                      </span>
                    )}
                  </div>
                  <div className="grow-card-name">{m.cropName}</div>
                  <p className="grow-card-desc">{m.description}</p>
                  <div className="grow-card-stats">
                    <div className="grow-card-stat">⏱ <strong>{m.daysToHarvest} days</strong> to harvest</div>
                    <div className="grow-card-stat">☀️ <strong>{m.sunNeeds.split(' ')[0]}</strong></div>
                  </div>
                  <button className="view-steps-btn" onClick={() => handleToggleSteps(m.id)}>
                    {openSteps.includes(m.id) ? "Hide Steps ▴" : "View Growing Steps ▾"}
                  </button>
                  <div className={`steps-container ${openSteps.includes(m.id) ? "open" : ""}`}>
                    <div className="steps-list">
                      {m.steps.map((s, idx) => (
                        <div key={idx} className="step-item">
                          <div className="step-num">{s.stepNumber}</div>
                          <div className="step-content">
                            <div className="step-title">{s.iconEmoji} {s.title}</div>
                            <div className="step-body">{s.body}</div>
                            {s.tipForKids && <div className="step-kids-tip">{s.tipForKids}</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}