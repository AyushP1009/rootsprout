"use client";
import { useState } from "react";

// Hardcoded data embedded for the demo since the GrowModule backend API is not yet built
const LIFECYCLE_STAGES = [
  { emoji: "🫘", name: "The Seed", title: "🫘 The Seed", body: "A seed is like a tiny sleeping baby plant! Inside each seed is everything it needs to start growing. It's just waiting for warmth, water, and soil to wake it up. When you plant a seed, you're starting an amazing journey!" },
  { emoji: "💧", name: "Watering", title: "💧 Watering", body: "When you add water to the soil, the seed wakes up! Water travels into the seed and triggers it to start growing. Too much water can drown it, too little and it stays asleep. Getting the balance right is your first gardening superpower!" },
  { emoji: "🌱", name: "Sprouting", title: "🌱 Sprouting", body: "The seed has cracked open and a tiny root is pushing down, while a tiny shoot pushes UP through the soil. This is called germination. You'll see a little green bump push through the dirt, that's your plant saying hello! 🎉" },
  { emoji: "🌿", name: "Growing", title: "🌿 Growing", body: "Now your plant starts making leaves! Leaves are like solar panels, they capture sunlight and turn it into food for the plant. This is called photosynthesis. The more sun your plant gets, the bigger and stronger it grows." },
  { emoji: "☀️", name: "Flowering", title: "☀️ Flowering", body: "Flowers aren't just pretty, they're how the plant makes fruit! Bees and butterflies visit flowers and carry pollen from one flower to another. This is called pollination, and it's what tells the plant to start making your food!" },
  { emoji: "🍅", name: "Harvest!", title: "🍅 Harvest!", body: "The fruit is finally ready to pick! All that watering, sunlight, and care paid off. When you pick a tomato, bean, or herb that YOU grew, it tastes extra delicious because you know exactly how much love went into it. 🌟" },
];

const GROW_MODULES = [
  {
    id: 1, title: "Grow Cherry Tomatoes", cropName: "Cherry Tomato", difficulty: "EASY", daysToHarvest: 65, containerOk: true, sunNeeds: "Full sun (6–8 hrs/day)", waterNeeds: "2–3x per week", isKidsCorner: true, emoji: "🍅", description: "Cherry tomatoes are one of the easiest and most rewarding crops to grow at home, even in a small pot on a porch.",
    steps: [
      { stepNumber: 1, title: "Fill your container", iconEmoji: "🪣", body: "Choose a pot at least 12 inches deep. Fill it with potting mix, leaving 2 inches from the top.", tipForKids: "Think of the pot as the tomato's bed, it needs to be big enough to stretch out!" },
      { stepNumber: 2, title: "Plant your seedling", iconEmoji: "🌱", body: "Dig a small hole and place your seedling inside. Cover the roots gently with soil and press down lightly.", tipForKids: "Tuck the seedling in like you're tucking a friend in for a nap." },
      { stepNumber: 3, title: "Water & wait", iconEmoji: "💧", body: "Water until liquid drains from the bottom. Keep the soil moist, not soggy. Check it every day!", tipForKids: "Plants get thirsty too! Check the soil each morning before school." },
      { stepNumber: 4, title: "Add a stake", iconEmoji: "🪵", body: "As the plant grows taller, tie it gently to a wooden stake so it doesn't fall over.", tipForKids: "The stake is like a little walking stick that keeps the plant standing up tall." },
      { stepNumber: 5, title: "Harvest time!", iconEmoji: "🍅", body: "When tomatoes are fully red and feel firm but slightly soft, they're ready! Gently twist and pull.", tipForKids: "It's like picking candy, except healthier and YOU grew it!" },
    ]
  },
  {
    id: 2, title: "Grow Green Beans", cropName: "Green Bean", difficulty: "EASY", daysToHarvest: 55, containerOk: true, sunNeeds: "Full sun (6+ hrs/day)", waterNeeds: "1 inch per week", isKidsCorner: true, emoji: "🫘", description: "Green beans grow fast, produce abundantly, and can thrive in containers, making them perfect for small spaces.",
    steps: [
      { stepNumber: 1, title: "Soak your seeds", iconEmoji: "🫘", body: "Place seeds in a small bowl of water overnight. This helps them sprout faster.", tipForKids: "The seeds are waking up! They need a drink before they start their big journey." },
      { stepNumber: 2, title: "Plant 1 inch deep", iconEmoji: "✏️", body: "Push each seed about 1 inch into moist soil, spaced 3 inches apart.", tipForKids: "Use your finger like a pencil to poke the perfect hole!" },
      { stepNumber: 3, title: "Watch them sprout", iconEmoji: "🔍", body: "In 5–10 days you'll see tiny green sprouts push through the soil!", tipForKids: "Check every morning, it's like a surprise is coming up from underground!" },
      { stepNumber: 4, title: "Keep weeds away", iconEmoji: "🧹", body: "Pull out any weeds growing nearby so they don't steal water from your beans.", tipForKids: "Weeds are the sneaky bullies of the garden. Pull them out to protect your beans!" },
      { stepNumber: 5, title: "Pick when 4–6 inches", iconEmoji: "📏", body: "Harvest beans when they're 4–6 inches long and snap cleanly when bent.", tipForKids: "If it snaps with a crisp sound, it's ready to eat!" },
    ]
  },
  {
    id: 3, title: "Grow Fresh Basil", cropName: "Basil", difficulty: "EASY", daysToHarvest: 30, containerOk: true, sunNeeds: "Full sun (6+ hrs/day)", waterNeeds: "When top inch dries out", isKidsCorner: false, emoji: "🌿", description: "Basil is one of the fastest herbs to grow and adds incredible flavor to home cooking. Perfect on a sunny windowsill.",
    steps: [
      { stepNumber: 1, title: "Start with a small pot", iconEmoji: "🪴", body: "A 6-inch pot works great. Use well-draining potting mix and place it in your sunniest window.", tipForKids: "Basil loves the sun just like you might love a warm, sunny day!" },
      { stepNumber: 2, title: "Sprinkle seeds on top", iconEmoji: "✨", body: "Scatter a pinch of seeds on the soil surface and lightly press them down. Don't bury them deep.", tipForKids: "Basil seeds are so small! Be very gentle, they're like tiny sleeping babies." },
      { stepNumber: 3, title: "Mist with water", iconEmoji: "🌫️", body: "Use a spray bottle to keep the soil lightly moist until seeds sprout (about 5–7 days).", tipForKids: "A gentle mist is like a soft little rain shower for your seeds!" },
      { stepNumber: 4, title: "Pinch off flowers", iconEmoji: "✂️", body: "If flower buds appear, pinch them off. This keeps the leaves flavorful and encourages more growth.", tipForKids: "This sounds mean, but it actually helps the plant make more yummy leaves!" },
      { stepNumber: 5, title: "Harvest leaves", iconEmoji: "🌿", body: "Pick leaves from the top down. Always leave at least 2 pairs of leaves on the stem so it keeps growing.", tipForKids: "Smell your fingers after picking basil, it smells amazing!" },
    ]
  },
  {
    id: 4, title: "Grow Sweet Strawberries", cropName: "Strawberry", difficulty: "MEDIUM", daysToHarvest: 60, containerOk: true, sunNeeds: "Full sun (6–8 hrs/day)", waterNeeds: "1–2 inches per week", isKidsCorner: true, emoji: "🍓", description: "Strawberries represent the Fruit group! They are sweet, juicy, and grow wonderfully in pots or hanging baskets.",
    steps: [
      { stepNumber: 1, title: "Plant the crown", iconEmoji: "🪴", body: "Dig a hole and place the plant in. Make sure the 'crown' (where the leaves meet the roots) rests just above the dirt.", tipForKids: "Don't bury it too deep! The plant needs its crown above the dirt so it can breathe." },
      { stepNumber: 2, title: "Water and watch", iconEmoji: "💧", body: "Keep the soil moist but not soggy. Soon, you will see little white flowers bloom.", tipForKids: "Keep a close eye on those white flowers—they will magically turn into red berries!" },
      { stepNumber: 3, title: "Give them a bed", iconEmoji: "🛏️", body: "Place some straw or mulch around the plant to keep the growing berries off the wet dirt.", tipForKids: "It's literally a straw-bed for your straw-berries to keep them clean." },
      { stepNumber: 4, title: "Wait for color", iconEmoji: "🎨", body: "Wait until the berry is completely bright red all the way to the top before picking.", tipForKids: "If it has green or white 'shoulders' at the top, it needs a little more time in the sun!" },
      { stepNumber: 5, title: "Snip and enjoy!", iconEmoji: "🍓", body: "Use scissors to carefully snip the stem just above the berry. Give it a wash and eat up!", tipForKids: "The sweetest, freshest treat you can possibly grow!" }
    ]
  },
  {
    id: 5, title: "Grow Popcorn", cropName: "Popcorn", difficulty: "MEDIUM", daysToHarvest: 100, containerOk: false, sunNeeds: "Full sun (8+ hrs/day)", waterNeeds: "1–2 inches per week", isKidsCorner: true, emoji: "🌽", description: "Popcorn represents the Grains group! Did you know you can grow your own popcorn? It grows on tall stalks just like sweet corn.",
    steps: [
      { stepNumber: 1, title: "Plant in a square", iconEmoji: "🔲", body: "Plant the seeds 1 inch deep in a square block instead of one long row. This helps them pollinate each other.", tipForKids: "Corn plants like to stand close together in a group so they can share the wind!" },
      { stepNumber: 2, title: "Feed them water", iconEmoji: "🚿", body: "Corn grows very fast and gets very thirsty. Water them deeply at the roots at least twice a week.", tipForKids: "Imagine having to drink enough water to grow taller than YOU!" },
      { stepNumber: 3, title: "Watch for silks", iconEmoji: "🌾", body: "Look for the silky strings growing out of the tops of the corn ears.", tipForKids: "It looks like the corn is growing blonde or red hair!" },
      { stepNumber: 4, title: "Let it dry", iconEmoji: "🍂", body: "Leave the ears on the stalk until the plant turns totally brown and dry. The kernels need to be hard.", tipForKids: "We want super dry kernels so that they explode into popcorn later!" },
      { stepNumber: 5, title: "Pop it!", iconEmoji: "🍿", body: "Twist the cob off the plant, rub the kernels off into a bowl, and ask an adult to heat them in a covered pan.", tipForKids: "Watch your homegrown corn pop into the best movie snack ever!" }
    ]
  },
  {
    id: 6, title: "Grow Edamame", cropName: "Edamame", difficulty: "EASY", daysToHarvest: 80, containerOk: true, sunNeeds: "Full sun (6+ hrs/day)", waterNeeds: "Keep soil evenly moist", isKidsCorner: true, emoji: "🫛", description: "Edamame represents the Protein group! They are young soybeans packed with plant protein and are super fun to pop out of their pods.",
    steps: [
      { stepNumber: 1, title: "Plant the seeds", iconEmoji: "🌱", body: "Push the seeds 1 inch deep into warm soil, spacing them about 2 to 3 inches apart.", tipForKids: "Tuck them into the warm dirt so they can start growing their strong roots!" },
      { stepNumber: 2, title: "Water nicely", iconEmoji: "💧", body: "Water them well, but don't let the soil get muddy or soggy.", tipForKids: "Beans don't like to go swimming, they just like to take a nice big sip!" },
      { stepNumber: 3, title: "Spot the fuzz", iconEmoji: "🔍", body: "Look closely at the new green pods as they form. They have tiny little hairs all over them.", tipForKids: "Gently touch the pods—they feel exactly like little fuzzy caterpillars!" },
      { stepNumber: 4, title: "The squeeze test", iconEmoji: "🤏", body: "When the pods look bright green and plump, give them a gentle squeeze to feel the beans inside.", tipForKids: "If the pod feels fat and tight, the beans are ready to be picked!" },
      { stepNumber: 5, title: "Boil and pop", iconEmoji: "🍲", body: "Ask an adult to boil them in salty water for a few minutes. Then, squeeze the pod to pop the beans into your mouth!", tipForKids: "It's like opening a little green treasure chest full of protein!" }
    ]
  },
  {
    id: 7, title: "Grow Super Spinach", cropName: "Spinach", difficulty: "EASY", daysToHarvest: 40, containerOk: true, sunNeeds: "Partial to Full sun (4–6 hrs/day)", waterNeeds: "Keep soil consistently moist", isKidsCorner: true, emoji: "🥬", description: "Spinach represents our Dairy alternative! Since we can't grow milk in the garden, we grow spinach because it is packed with bone-building calcium.",
    steps: [
      { stepNumber: 1, title: "Sow in cool weather", iconEmoji: "🌤️", body: "Sprinkle seeds in early spring or fall. Spinach loves cool weather and might stop growing if it gets too hot.", tipForKids: "Spinach likes wearing a light sweater, not a bathing suit!" },
      { stepNumber: 2, title: "Keep it wet", iconEmoji: "🧽", body: "Water often enough to keep the dirt feeling like a wrung-out sponge.", tipForKids: "Happy, hydrated roots make the yummiest, crunchiest leaves!" },
      { stepNumber: 3, title: "Look for baby leaves", iconEmoji: "🍃", body: "In just a few weeks, you will see bright green oval leaves popping up from the soil.", tipForKids: "They are incredibly soft when they are young!" },
      { stepNumber: 4, title: "Give them a haircut", iconEmoji: "✂️", body: "Use scissors to snip the outside leaves first. Leave the center alone so it keeps growing back.", tipForKids: "It's a magic plant that keeps growing back after you give it a haircut!" },
      { stepNumber: 5, title: "Build strong bones", iconEmoji: "🦖", body: "Wash the leaves and toss them in a salad, or blend them into a fruit smoothie.", tipForKids: "It's dinosaur food that gives you super strong bones!" }
    ]
  },
  {
    id: 8, title: "Grow Juicy Grapes", cropName: "Grape", difficulty: "HARD", daysToHarvest: 730, containerOk: false, sunNeeds: "Full sun (8+ hrs/day)", waterNeeds: "1 inch per week", isKidsCorner: true, emoji: "🍇", description: "Grapes represent the Fruit group! They grow on beautiful, climbing vines. They teach us patience, because a grapevine needs a couple of years to grow strong before it makes fruit.",
    steps: [
      { stepNumber: 1, title: "Plant your vine", iconEmoji: "🌱", body: "Dig a hole wide enough for the roots to spread out. Plant the bare vine in early spring.", tipForKids: "It might look like a bare stick at first, but it's just sleeping!" },
      { stepNumber: 2, title: "Give it a jungle gym", iconEmoji: "🪜", body: "Grapes love to climb. Plant them next to a strong trellis or fence so the vines have something to grab onto.", tipForKids: "The vines have little curly arms called tendrils that grab the fence like monkeys!" },
      { stepNumber: 3, title: "Prune the branches", iconEmoji: "✂️", body: "In the winter when the plant is asleep, ask an adult to help trim back the old branches so new ones can grow.", tipForKids: "A winter haircut helps the plant save its energy to make sweet fruit next year." },
      { stepNumber: 4, title: "Spot the clusters", iconEmoji: "🔍", body: "In the spring of its second or third year, look for tiny, hard green bumps. These are baby grapes!", tipForKids: "They look like tiny green beads grouped together!" },
      { stepNumber: 5, title: "Taste test time", iconEmoji: "🍇", body: "Wait until the grapes are fully colored (purple, red, or green, depending on the type) and slightly soft before picking.", tipForKids: "Birds love grapes too, so you might have to race them to the harvest!" }
    ]
  },
  {
    id: 9, title: "Grow Nutritious Oats", cropName: "Oats", difficulty: "MEDIUM", daysToHarvest: 100, containerOk: false, sunNeeds: "Full sun (6–8 hrs/day)", waterNeeds: "Keep soil evenly moist", isKidsCorner: true, emoji: "🌾", description: "Oats represent the Grains group! The exact same oats that make up your cozy morning oatmeal start out growing as tall, beautiful grass.",
    steps: [
      { stepNumber: 1, title: "Scatter the seeds", iconEmoji: "✨", body: "Rake the dirt so it's loose, then throw handfuls of oat seeds across the soil. Rake the dirt lightly over them.", tipForKids: "Throwing the seeds like confetti is called 'broadcasting'!" },
      { stepNumber: 2, title: "Water the lawn", iconEmoji: "🚿", body: "Water the area gently so the seeds don't wash away. Keep the dirt moist.", tipForKids: "Soon, it will look like you are growing a giant patch of bright green lawn hair." },
      { stepNumber: 3, title: "Watch the stalks grow", iconEmoji: "📏", body: "The grass will grow tall and grow little seed heads at the very top that dance in the wind.", tipForKids: "They look like little green bells hanging from the top of the stalks." },
      { stepNumber: 4, title: "Wait for the gold", iconEmoji: "🟡", body: "Stop watering when the plants start turning yellow. Wait until the stalks are completely golden and dry.", tipForKids: "When they look like golden straw, the oats are baked by the sun and ready!" },
      { stepNumber: 5, title: "Rub and roll", iconEmoji: "🤲", body: "Pull the seed heads off. Rub them hard between your hands to get the hard outer shell (the hull) off the oat inside.", tipForKids: "It's like unwrapping a tiny present to find the oatmeal hiding inside!" }
    ]
  },
  {
    id: 10, title: "Grow Crunchy Chickpeas", cropName: "Chickpea", difficulty: "MEDIUM", daysToHarvest: 100, containerOk: true, sunNeeds: "Full sun (6–8 hrs/day)", waterNeeds: "Let top inch dry out", isKidsCorner: true, emoji: "🫘", description: "Chickpeas (also known as garbanzo beans) represent the Protein group! They are the magical ingredient used to make hummus.",
    steps: [
      { stepNumber: 1, title: "Plant in warm dirt", iconEmoji: "🌡️", body: "Wait until the weather is nice and warm, then push the seeds 1 inch into the soil.", tipForKids: "Chickpeas love warm weather. They won't sprout if their toes (roots) are cold!" },
      { stepNumber: 2, title: "Don't overwater!", iconEmoji: "🌵", body: "Chickpeas like it a little dry. Let the top layer of dirt dry out completely before watering again.", tipForKids: "They are originally from dry climates, so they don't like soggy socks!" },
      { stepNumber: 3, title: "Find the puffy pods", iconEmoji: "🎈", body: "The plant will grow tiny white or purple flowers, which turn into cute, puffy little green pods.", tipForKids: "The pods look like little green balloons inflated with air!" },
      { stepNumber: 4, title: "A tiny harvest", iconEmoji: "🤏", body: "Did you know each puffy pod usually only holds one or two chickpeas inside?", tipForKids: "It's a secret hiding spot just for them!" },
      { stepNumber: 5, title: "Pop them open", iconEmoji: "🥣", body: "Pick them when green to eat them fresh, or wait until the plant turns brown to store them dry. Pop them out of the pod!", tipForKids: "Mash them up with some garlic and lemon, and you've made your very own hummus!" }
    ]
  },
  {
    id: 11, title: "Grow Leafy Greens", cropName: "Lettuce", difficulty: "EASY", daysToHarvest: 45, containerOk: true, sunNeeds: "Partial to Full sun (4–6 hrs/day)", waterNeeds: "Keep soil consistently moist", isKidsCorner: true, emoji: "🥗", description: "Leafy greens like lettuce represent the Vegetable group! They grow incredibly fast and make the perfect crunchy base for a healthy salad.",
    steps: [
      { stepNumber: 1, title: "Sprinkle the tiny seeds", iconEmoji: "🧂", body: "Lettuce seeds are very small. Sprinkle them lightly over the dirt and barely cover them with a dusting of soil.", tipForKids: "The seeds are so small they look like speckles of pepper!" },
      { stepNumber: 2, title: "Keep them cool", iconEmoji: "😎", body: "Lettuce loves the spring and fall. Keep the soil wet so the seeds can sprout quickly.", tipForKids: "If it gets too hot, the lettuce gets bitter. They like to chill!" },
      { stepNumber: 3, title: "Give them space", iconEmoji: "↔️", body: "If too many seeds sprout close together, carefully pull a few out so the others have room to grow big leaves.", tipForKids: "If everyone is crowded in one bed, no one can stretch their arms!" },
      { stepNumber: 4, title: "The cut-and-come-again trick", iconEmoji: "✂️", body: "Instead of pulling the whole plant, just cut the outer leaves with scissors. The center will keep growing!", tipForKids: "It's a magic trick! You can make a salad this week AND next week from the same plant." },
      { stepNumber: 5, title: "Toss a salad", iconEmoji: "🥗", body: "Wash the leaves gently in cold water, dry them off, and toss them in a bowl with your favorite dressing.", tipForKids: "The crunchiest, freshest salad you will ever eat!" }
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
          <p>Easy guides for growing fresh food at home, even in a small space. Perfect for beginners and kids!</p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          {/* Kids Corner */}
          <div className="kids-corner">
            <div className="kids-corner-badge">⭐ Kid's Corner</div>
            <h2>How Does a Plant Grow?</h2>
            <p>Learning about plants is the first step to growing your own food! Click each stage below to learn what's happening underground and above it!</p>

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
            <p className="section-sub">Each guide is written for beginners. All three crops can be grown in containers, perfect if you don't have a yard.</p>
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