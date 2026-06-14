<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';

  let typed = '';
  let titleVisible = false;

  const fullTitle = 'Portfolio Digitale — Maturità Informatica';

  const sections = [
    { href: '/chi-sono', label: 'Chi Sono', desc: 'La mia storia e il mio percorso', color: '#2ecc71' },
    { href: '/educazione-civica', label: 'Ed. Civica', desc: 'Cittadinanza e consapevolezza', color: '#27ae60' },
  ];

  onMount(() => {
    setTimeout(() => { titleVisible = true; }, 300);

    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullTitle.length) {
        typed += fullTitle[i++];
      } else {
        clearInterval(typeInterval);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  });
</script>

<svelte:head>
  <title>Portfolio Maturità — Home</title>
</svelte:head>

<!-- Hero Section -->
<section class="hero">
  <AnimatedBackground variant="hero" />

  <div class="hero-content" class:visible={titleVisible}>
    <!-- <div class="hero-badge reveal">
      <span class="mono">v2025</span>
      <span class="badge-dot"></span>
      <span class="mono">Indirizzo Informatico</span>
    </div> -->

    <h1 class="hero-name reveal">
      <span class="name-pre">Edoardo</span>
      <span class="name-surname gradient-text">Attanasio</span>
    </h1>

    <div class="hero-title reveal">
      <span class="mono typing-text">{typed}<span class="cursor-blink">|</span></span>
    </div>

    <p class="hero-desc reveal">
      Studente di informatica, appassionato di tecnologia, sviluppo software e innovazione digitale.
      Questo portfolio racconta il mio percorso dalla terza alla quinta superiore — un viaggio
      tra codice, sistemi e crescita personale.
    </p>

    <div class="hero-cta reveal">
      <a href="{base}/chi-sono" class="btn-solid">
        Scopri il Percorso
        <span>→</span>
      </a>
      <a href="{base}/educazione-civica" class="btn-glow">
        Ed. Civica
      </a>
    </div>

    <!-- <div class="hero-stats reveal">
      <div class="stat">
        <span class="stat-num">3</span>
        <span class="stat-label mono">Anni di studio</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-num">12</span>
        <span class="stat-label mono">Materie</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-num">∞</span>
        <span class="stat-label mono">Passione</span>
      </div>
    </div> -->
  </div>

  <div class="hero-scroll">
    <span class="mono scroll-label">Scorri</span>
    <div class="scroll-arrow"></div>
  </div>
</section>

<!-- Preview sections -->
<section class="sections-preview section">
  <div class="container">
    <div class="section-label reveal">
      <span>Esplora il Portfolio</span>
    </div>
    <h2 class="preview-title reveal">
      Un percorso completo,<br/><span class="gradient-text">una storia da raccontare</span>
    </h2>

    <div class="preview-grid">
      {#each sections as item, i}
        <a
          href={item.href}
          class="preview-card glass-card-hover reveal"
          style="animation-delay: {i * 0.1}s; --card-color: {item.color}"
        >
          <div class="card-content">
            <h3 class="card-title">{item.label}</h3>
            <p class="card-desc">{item.desc}</p>
          </div>
          <div class="card-arrow">→</div>
          <div class="card-glow" style="background: radial-gradient(circle at 50% 100%, {item.color}18, transparent 70%)"></div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- About teaser -->
<section class="teaser-section section">
  <div class="container">
    <div class="teaser-inner">
      <div class="teaser-left reveal-left">
        <div class="section-label">Chi sono</div>
        <h2>Studente.<br/>Sviluppatore.<br/><span class="gradient-text">Creativo.</span></h2>
        <p class="teaser-text">
          In questo spazio raccolgo il mio percorso scolastico, i progetti realizzati e le competenze sviluppate durante gli anni all’Istituto Internazionale Edoardo Agnelli, indirizzo Informatica e Telecomunicazioni. Un viaggio tra tecnologia, programmazione e crescita personale.
        </p>
        <a href="{base}/chi-sono" class="btn-glow" style="margin-top: 32px">Scopri di più →</a>
      </div>

      <div class="teaser-right reveal-right">
        <div class="avatar-wrapper">
          <div class="avatar-frame">
            <div class="avatar-placeholder">
              <img src="/edo.jpeg" alt="Edoardo Attanasio" class="avatar-img">
            </div>
          </div>
          <div class="avatar-ring ring-1"></div>
          <div class="avatar-ring ring-2"></div>
          <div class="avatar-badge">
            <span class="mono">2026</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* ─── HERO ─── */
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: calc(var(--navbar-h, 72px) + 60px) 0 80px;
    overflow: hidden;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 32px;
    display: flex;
    flex-direction: column;
    gap: 28px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .hero-content.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 16px;
    background: rgba(46, 204, 113, 0.06);
    border: 1px solid rgba(46, 204, 113, 0.2);
    border-radius: 100px;
    font-size: 0.75rem;
    color: var(--text-secondary);
    width: fit-content;
  }

  .badge-dot {
    width: 4px; height: 4px;
    background: var(--accent-cyan);
    border-radius: 50%;
    box-shadow: 0 0 6px var(--accent-cyan);
  } */

  .hero-name {
    font-size: clamp(3.5rem, 9vw, 8rem);
    font-weight: 800;
    line-height: 0.95;
    letter-spacing: -0.04em;
  }

  .name-pre {
    display: block;
    color: var(--text-primary);
  }

  .hero-title {
    min-height: 2rem;
  }

  .typing-text {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    color: var(--text-secondary);
    letter-spacing: 0.02em;
  }

  .cursor-blink {
    color: var(--accent-cyan);
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .hero-desc {
    max-width: 600px;
    font-size: 1.05rem;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  .hero-cta {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .hero-stats {
    display: flex;
    align-items: center;
    gap: 32px;
    padding-top: 16px;
  }

  .stat { display: flex; flex-direction: column; gap: 4px; }

  .stat-num {
    font-family: var(--font-display);
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--accent-cyan);
    text-shadow: var(--glow-text);
    line-height: 1;
  }

  .stat-label {
    font-size: 0.7rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .stat-divider {
    width: 1px; height: 48px;
    background: var(--border-subtle);
  }

  .hero-scroll {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    z-index: 2;
  }

  .scroll-label {
    font-size: 0.65rem;
    color: var(--text-muted);
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .scroll-arrow {
    width: 1px; height: 40px;
    background: linear-gradient(var(--accent-cyan), transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }

  @keyframes scrollPulse {
    0%, 100% { opacity: 1; transform: scaleY(1); }
    50% { opacity: 0.3; transform: scaleY(0.6); }
  }

  /* ─── PREVIEW GRID ─── */
  .preview-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 60px;
    max-width: 700px;
  }

  .preview-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .preview-card {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 28px;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .preview-card:hover {
    border-color: var(--card-color, var(--accent-cyan));
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 30px color-mix(in srgb, var(--card-color, #2ecc71) 20%, transparent);
  }

  .card-content { flex: 1; }
  .card-title {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 6px;
  }

  .card-desc {
    font-size: 0.82rem;
    color: var(--text-muted);
    line-height: 1.5;
  }

  .card-arrow {
    color: var(--text-muted);
    font-size: 1.1rem;
    transition: all 0.3s;
    flex-shrink: 0;
  }

  .preview-card:hover .card-arrow {
    color: var(--card-color, var(--accent-cyan));
    transform: translateX(4px);
  }

  .card-glow {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }

  .preview-card:hover .card-glow { opacity: 1; }

  /* ─── TEASER ─── */
  .teaser-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  .teaser-left { display: flex; flex-direction: column; gap: 20px; }

  .teaser-left h2 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1.05;
  }

  .teaser-text {
    color: var(--text-secondary);
    line-height: 1.7;
    max-width: 480px;
  }

  .teaser-right {
    display: flex;
    justify-content: center;
  }

  .avatar-wrapper {
    position: relative;
    width: 280px; height: 280px;
  }

  .avatar-frame {
    width: 280px; height: 280px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--border-glow);
    position: relative;
    z-index: 2;
    background: var(--bg-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatar-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    color: var(--text-muted);
  }

  .avatar-placeholder svg {
    width: 80px; height: 80px;
  }

  .avatar-label {
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  .avatar-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }

  .ring-1 {
    width: 320px; height: 320px;
    border-color: rgba(46, 204, 113, 0.15);
    animation: ringPulse 3s ease-in-out infinite;
  }

  .ring-2 {
    width: 360px; height: 360px;
    border-color: rgba(39, 174, 96, 0.1);
    animation: ringPulse 3s ease-in-out infinite 1.5s;
  }

  @keyframes ringPulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    50% { transform: translate(-50%, -50%) scale(1.04); opacity: 0.5; }
  }

  .avatar-badge {
    position: absolute;
    bottom: 20px; right: -10px;
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-green));
    border-radius: 100px;
    padding: 6px 14px;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: white;
    z-index: 3;
    box-shadow: 0 4px 20px rgba(46, 204, 113, 0.3);
  }

  @media (max-width: 1024px) {
    .preview-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 768px) {
    .hero-content { padding: 0 20px; }
    .preview-grid { grid-template-columns: 1fr; }
    .teaser-inner { grid-template-columns: 1fr; gap: 40px; }
    .teaser-right { display: none; }
    .hero-stats { gap: 20px; }
    .stat-num { font-size: 2rem; }
  }
</style>
