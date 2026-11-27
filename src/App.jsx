import React, { useState } from "react";
import "./App.css";

const navigation = [
  ["vision", "The Vision"],
  ["architecture", "Architecture"],
  ["experience", "Experiences"],
  ["dining", "Dining"],
  ["events", "Events"],
];

const architecture = [
  {
    image: "timber.webp",
    title: "Massive Timber Beams",
    description:
      "The grandeur and permanence of a classic alpine lodge, inspired by Tennessee heritage.",
  },
  {
    image: "stone.webp",
    title: "Native Stone",
    description:
      "Locally sourced Tennessee limestone brings warmth, authenticity and natural character.",
  },
  {
    image: "glass.webp",
    title: "Expansive Glass Walls",
    description:
      "Blurring the line between indoor luxury and the natural beauty of the Wolf River.",
  },
];

const amenities = [
  {
    image: "spa.webp",
    title: "Chi, The Spa",
    description:
      "A full-service spa delivering soul-soothing and life-enriching wellness treatments.",
  },
  {
    image: "pool.webp",
    title: "Heated Infinity Pool",
    description:
      "A Vail-style, four-season outdoor pool offering stunning river views.",
  },
  {
    image: "concierge.webp",
    title: "Valet & Concierge",
    description:
      "Seamless, personalized service ensuring every need is anticipated and met.",
  },
  {
    image: "porch.webp",
    title: "River Porches & Terraces",
    description:
      "Private and public spaces designed for enjoying the landscape in comfort.",
  },
];

const stats = [
  { value: "4.8", label: "Acres of Private Riverfront" },
  { value: "100", label: "Luxury Units" },
  { value: "300", label: "Restaurant Seats" },
  { value: "5,000+", label: "Sq. Ft. Event Space" },
];

const seasons = [
  {
    number: "01",
    title: "Winter",
    description: "Massive indoor fireplaces and cozy gathering spaces.",
  },
  {
    number: "02",
    title: "Spring",
    description: "Lush gardens and access to the blooming Wolf River trail.",
  },
  {
    number: "03",
    title: "Summer",
    description: "A heated infinity pool and shaded river porches.",
  },
  {
    number: "04",
    title: "Autumn",
    description: "Outdoor fire pits and stunning riverfront fall foliage.",
  },
];

const revenueDrivers = [
  {
    title: "Events & Weddings",
    description:
      "A premium, 300-person capacity venue capturing the regional event calendar.",
  },
  {
    title: "Culinary Destination",
    description:
      "A signature restaurant and bar operating as a standalone revenue center.",
  },
  {
    title: "High-Yield Occupancy",
    description:
      "A premium mix of boutique suites and private residences catering to leisure and business travelers.",
  },
];

const specifications = [
  [
    "Accommodations",
    "100 luxury units, including boutique suites and private residences",
  ],
  ["Dining", "300-seat signature farm-to-table restaurant"],
  ["Events", "5,000+ sq. ft. flexible event center"],
  ["Land Use", "4.8 acres of private riverfront"],
  ["Amenities", "Full-service spa, heated infinity pool and valet transit"],
];

const architecturalConcepts = [
  {
    id: "wedding",
    label: "Wedding Venue",
    eyebrow: "The Wedding Experience",
    title: "Where forever begins.",
    image: "public/images/Wolf River Lodge Wedding Floor Plan.png",
    alt: "Hand-rendered architectural watercolor floor plan of the Wolf River Lodge wedding venue",
    description:
      "Envisioned as an extraordinary setting for life's most meaningful celebrations, the Great Hall brings together timeless timber craftsmanship, natural stone and the warmth of Southern hospitality.",
    details: [
      { value: "5,388", label: "Square Feet" },
      { value: "Great Hall", label: "Reception Space" },
      { value: "Terrace", label: "Outdoor Experience" },
    ],
  },
  {
    id: "unit-a",
    label: "Residential — Unit A",
    eyebrow: "The Residential Experience",
    title: "A place to call your own.",
    image: "public/images/venue-a.png",
    alt: "Architectural watercolor floor plans showing both versions of Unit A at Wolf River Lodge",
    description:
      "Thoughtfully envisioned private residences that balance the warmth of alpine architecture with contemporary living. Two distinct configurations offer flexibility, comfort and understated elegance.",
    details: [
      { value: "892", label: "Version 1 · Sq. Ft." },
      { value: "900", label: "Version 2 · Sq. Ft." },
      { value: "1", label: "Bedroom" },
    ],
  },
];

function SectionHeading({ label, title, children }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function PhotoCard({ item }) {
  return (
    <article className="photo-card">
      <div className="card-image">
        <img src={`/images/${item.image}`} alt={item.title} loading="lazy" />
      </div>

      <div className="card-copy">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <a href="#home" className="brand">
        <span className="brand-mark">◇</span>

        <span>
          WOLF RIVER LODGE
          <small>A SHANGRI-LA VISION</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav id="navigation" className={`nav ${menuOpen ? "open" : ""}`}>
        {navigation.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}

        <a
          className="nav-cta"
          href="#investment"
          onClick={() => setMenuOpen(false)}
        >
          Project Overview
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <span className="eyebrow">Germantown · Tennessee</span>

        <h1>
          Shangri-La on
          <br />
          the Wolf River.
        </h1>

        <p>
          A vision for a new kind of luxury. Alpine grandeur meets the quiet
          beauty of the American South.
        </p>

        <a className="button" href="#vision">
          Discover the Vision
          <span>↗</span>
        </a>

        <small className="concept">
          Proposed development · Concept imagery
        </small>
      </div>

      <div className="hero-image">
        <img
          src="public/images/WhatsApp Image 2026-11-27 at 8.06.32 PM.jpeg"
          alt="Architectural rendering of Wolf River Lodge"
        />
      </div>
    </section>
  );
}

function Vision() {
  return (
    <>
      <section className="section intro" id="vision">
        <SectionHeading
          label="01 / The Vision"
          title="Alpine sanctuary, Southern soul."
        />

        <div>
          <p className="lead">A destination within a destination.</p>

          <p>
            On a private 4.8-acre riverfront estate, the Wolf River Lodge
            proposes to blend the rugged, high-altitude luxury of a Vail-style
            lodge with the serene natural beauty of the Wolf River ecosystem.
          </p>

          <p>
            Reimagining the Shangri-La promise of soul-soothing hospitality and
            life-enriching experiences, the lodge creates a sophisticated, warm
            and exclusive multi-generational retreat.
          </p>
        </div>
      </section>

      <section className="stats">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>
    </>
  );
}

function Architecture() {
  return (
    <section className="section" id="architecture">
      <SectionHeading
        label="02 / Design Philosophy"
        title="Architecture as experience."
      >
        Mountain modern meets Tennessee heritage.
      </SectionHeading>

      <div className="cards three">
        {architecture.map((item) => (
          <PhotoCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function Estate() {
  const features = [
    "Direct access to Wolf River trails",
    "Scenic river overlooks",
    "Intimate outdoor fire pits",
    "Beautifully landscaped gardens",
  ];

  return (
    <section className="estate">
      <div>
        <span className="eyebrow">03 / The Estate</span>

        <h2>Nature, at your doorstep.</h2>

        <p>
          Thoughtfully integrated into the landscape to preserve natural beauty
          and create a sense of secluded tranquility.
        </p>
      </div>

      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </section>
  );
}

function Experiences() {
  return (
    <section className="section" id="experience">
      <SectionHeading
        label="04 / Signature Amenities"
        title="An enduring escape."
      >
        Curated comfort, natural beauty and elevated experiences for body and
        soul.
      </SectionHeading>

      <div className="cards four">
        {amenities.map((item) => (
          <PhotoCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function Dining() {
  return (
    <section className="feature" id="dining">
      <img
        src="/images/dining.webp"
        alt="Luxury lodge restaurant overlooking the river"
        loading="lazy"
      />

      <div className="feature-copy">
        <span className="eyebrow">05 / Culinary Destination</span>

        <h2>
          Rooted in Tennessee.
          <br />
          Inspired by nature.
        </h2>

        <p>
          A proposed 300-seat signature restaurant with commanding river views,
          farm-to-table dining showcasing Tennessee producers, and a
          sophisticated wild game menu.
        </p>

        <p>
          Envisioned as a regional epicurean landmark for guests and local
          diners alike.
        </p>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section className="section event" id="events">
      <div>
        <span className="eyebrow">06 / Gatherings</span>

        <h2>Made for extraordinary occasions.</h2>

        <p>
          A flexible 5,000+ sq. ft. event center designed for memorable
          celebrations, corporate gatherings and extraordinary social
          experiences.
        </p>

        <ul className="ruled-list">
          <li>Luxury Weddings</li>
          <li>Corporate Retreats & Conferences</li>
          <li>Charity Galas & Social Functions</li>
        </ul>
      </div>

      <img
        src="/images/events.webp"
        alt="Elegant wedding reception inside the lodge"
        loading="lazy"
      />
    </section>
  );
}

function Seasons() {
  return (
    <section className="section seasons">
      <SectionHeading
        label="07 / Year-Round Appeal"
        title="A sanctuary for every season."
      >
        A four-season destination, engineered for 365-day appeal.
      </SectionHeading>

      <div className="season-grid">
        {seasons.map((season) => (
          <article key={season.number}>
            <span className="eyebrow">{season.number}</span>
            <h3>{season.title}</h3>
            <p>{season.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Investment() {
  return (
    <section className="section investment" id="investment">
      <SectionHeading
        label="08 / The Opportunity"
        title="A new landmark for Germantown."
      >
        An opportunity to introduce an immersive, nature-centric luxury lodge
        experience to the Memphis and Germantown market.
      </SectionHeading>

      <div className="revenue">
        {revenueDrivers.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>

      <h3 className="table-title">Project Specifications</h3>

      <dl className="specs">
        {specifications.map(([title, description]) => (
          <div key={title}>
            <dt>{title}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>

      <div className="next">
        <h3>The path from vision to reality.</h3>

        <p>
          The next step is to translate this strategic vision into a detailed
          financial framework through a preliminary pro forma and comprehensive
          SWOT analysis.
        </p>

        <p>
          The project aims to combine sustainable luxury with protection of the
          Wolf River watershed.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a className="brand" href="#home">
        <span className="brand-mark">◇</span>

        <span>
          WOLF RIVER LODGE
          <small>GERMANTOWN, TENNESSEE</small>
        </span>
      </a>

      <p>
        A proposed luxury development concept. All facilities and specifications
        are conceptual.
      </p>

      <a href="#home">Back to top ↑</a>
    </footer>
  );
}

function ArchitecturalConcepts() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = architecturalConcepts[activeIndex];

  return (
    <section
      className="section architectural-concepts"
      id="architectural-concepts"
    >
      <SectionHeading
        label="06.1 / Architectural Concepts"
        title="A closer look at the vision."
      >
        Explore the spaces envisioned for Wolf River Lodge, where thoughtful
        architecture meets timeless hospitality.
      </SectionHeading>

      <div
        className="concept-tabs"
        role="group"
        aria-label="Architectural concepts"
      >
        {architecturalConcepts.map((concept, index) => (
          <button
            key={concept.id}
            type="button"
            className={`concept-tab ${activeIndex === index ? "active" : ""}`}
            aria-pressed={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          >
            <span className="concept-tab-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            {concept.label}
          </button>
        ))}
      </div>

      <div className="concept-showcase" key={active.id}>
        <figure className="concept-figure">
          <div className="concept-artwork">
            <img
              src={active.image}
              alt={active.alt}
              loading="lazy"
              width={1448}
              height={1086}
            />

            <a
              href={active.image}
              target="_blank"
              rel="noopener noreferrer"
              className="concept-expand"
              aria-label={`View full ${active.label} illustration`}
            >
              View full plan <span>↗</span>
            </a>
          </div>

          <figcaption>
            Architectural concept illustration · Not to scale
          </figcaption>
        </figure>

        <div className="concept-information">
          <div className="concept-description">
            <span className="eyebrow">{active.eyebrow}</span>

            <h3>{active.title}</h3>

            <p>{active.description}</p>
          </div>

          <div className="concept-specifications">
            {active.details.map((detail) => (
              <div className="concept-specification" key={detail.label}>
                <strong>{detail.value}</strong>
                <span>{detail.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Vision />
        <Architecture />
        <ArchitecturalConcepts />
        <Estate />
        <Experiences />
        <Dining />
        <Events />
        <Seasons />
        <Investment />
      </main>

      <Footer />
    </>
  );
}
