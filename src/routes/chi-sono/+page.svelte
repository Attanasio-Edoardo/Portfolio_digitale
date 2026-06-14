<script>
  import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';

  const skills = [
    { name: 'HTML / CSS', level: 90, color: '#00d4ff' },
    { name: 'JavaScript', level: 82, color: '#7c3aed' },
    { name: 'Python', level: 75, color: '#a855f7' },
    { name: 'Java', level: 70, color: '#00d4ff' },
    { name: 'SQL / Database', level: 72, color: '#ff006e' },
    { name: 'Reti & Sistemi', level: 78, color: '#ffd700' },
  ];



  // const timeline = [
  //   { year: '2022', label: 'Terza Superiore', desc: 'Primo approccio alla programmazione e ai sistemi informatici.' },
  //   { year: '2023', label: 'Quarta Superiore', desc: 'Approfondimento delle reti, database e sviluppo di applicazioni.' },
  //   { year: '2024', label: 'Quinta Superiore', desc: 'Progetto capolavoro, tirocinio e preparazione alla maturità.' },
  //   { year: '2025', label: 'Maturità', desc: 'Il traguardo finale di un percorso di crescita straordinario.' },
  // ];
</script>

<svelte:head>
  <title>Chi Sono — Portfolio Maturità</title>
</svelte:head>

<!-- Hero -->
<section class="page-hero">
  <AnimatedBackground />
  <div class="hero-inner container">
    <div class="section-label reveal">01 / Chi Sono</div>
    <h1 class="reveal">
      Presentazione<br/>
      <span class="gradient-text">Personale</span>
    </h1>
    <p class="hero-sub reveal">Un'introduzione al mio percorso, alle mie passioni e ai miei obiettivi.</p>
  </div>
</section>

<!-- Main content -->
<section class="section">
  <div class="container">
    <div class="profile-grid">
      <!-- Avatar column -->
      <div class="profile-left reveal-left">
        <div class="avatar-wrap">
          <div class="avatar-frame">
            <div class="avatar-placeholder">
              <img src="/edo.jpeg" alt="Edoardo Attanasio" class="avatar-img">
            </div>
          </div>
          <div class="avatar-ring r1"></div>
          <div class="avatar-ring r2"></div>
        </div>

        <!-- Info cards -->
        <!-- <div class="info-card glass-card">
          <span class="info-label mono">Nome</span>
          <span class="info-value">Nome Cognome</span>
        </div> -->
        <div class="info-card glass-card">
          <span class="info-label mono">Scuola</span>
          <span class="info-value">Istituto Tecnico Edoardo Agnelli</span>
        </div>
        <div class="info-card glass-card">
          <span class="info-label mono">Indirizzo</span>
          <span class="info-value">Informatica e Telecomunicazioni</span>
        </div>
        <div class="info-card glass-card">
          <span class="info-label mono">Anno</span>
          <span class="info-value">2025/2026</span>
        </div>
      </div>

      <!-- Text column -->
      <div class="profile-right">
        <div class="section-label reveal">Descrizione</div>
        <h2 class="reveal">Ciao, sono<br/><span class="glow-text">Edoardo Attanasio</span></h2>

        <p class="bio reveal">
          Ciao, sono Edoardo Attanasioz, studente del quinto anno presso l’Istituto Internazionale Edoardo Agnelli, indirizzo Informatica e Telecomunicazioni.

Fin da piccolo sono sempre stato affascinato dal mondo della tecnologia, dei computer e dell’innovazione digitale. Durante il mio percorso scolastico ho sviluppato competenze nell’ambito della programmazione, dei sistemi e delle reti, approfondendo linguaggi di sviluppo, cybersecurity, database e progettazione software.

Questo portfolio digitale rappresenta il mio percorso di crescita personale e scolastica: una raccolta di progetti, esperienze e attività svolte nel corso degli anni, che raccontano la mia passione per l’informatica e la voglia di continuare a imparare e migliorarmi.

Attraverso queste pagine desidero condividere non solo ciò che ho studiato, ma anche il modo in cui la tecnologia è diventata per me uno strumento creativo, capace di trasformare idee in progetti concreti.

Il mio obiettivo futuro è continuare a crescere nel settore informatico, esplorando nuove tecnologie e mettendo in pratica le competenze acquisite per affrontare le sfide del mondo digitale.

        </p>

        <p class="bio reveal">
          In questi tre anni ho imparato non solo a programmare, ma a pensare come un
          informatico: analizzare problemi, trovare soluzioni eleganti e costruire
          sistemi che funzionino. La tecnologia per me non è solo uno strumento —
          è un linguaggio con cui comunicare idee.
        </p>

        
      </div>
    </div>
  </div>
</section>

<!-- Skills -->
<!-- <section class="section skills-section">
  <div class="container">
    <div class="section-label reveal">Competenze</div>
    <h2 class="reveal">Le mie <span class="gradient-text">Skills</span></h2>

    <div class="skills-grid">
      {#each skills as skill, i}
        <div class="skill-item reveal" style="animation-delay:{i*0.1}s">
          <div class="skill-header">
            <span class="skill-name">{skill.name}</span>
            <span class="skill-pct mono" style="color:{skill.color}">{skill.level}%</span>
          </div>
          <div class="skill-bar">
            <div
              class="skill-fill"
              style="width:{skill.level}%; background: linear-gradient(90deg, {skill.color}, {skill.color}88); box-shadow: 0 0 10px {skill.color}66"
            ></div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section> -->

<!-- Timeline -->
<!-- <section class="section">
  <div class="container">
    <div class="section-label reveal">Percorso</div>
    <h2 class="reveal">La mia <span class="gradient-text">Timeline</span></h2>

    <div class="timeline">
      {#each timeline as item, i}
        <div class="timeline-item reveal" style="animation-delay:{i*0.15}s">
          <div class="timeline-left">
            <span class="timeline-year glow-text mono">{item.year}</span>
          </div>
          <div class="timeline-connector">
            <div class="tl-dot"></div>
            <div class="tl-line"></div>
          </div>
          <div class="timeline-content glass-card">
            <h3>{item.label}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section> -->

<style>
  .page-hero {
    position: relative;
    min-height: 50vh;
    display: flex;
    align-items: flex-end;
    padding: calc(var(--navbar-h,72px) + 60px) 0 80px;
    overflow: hidden;
    border-bottom: 1px solid var(--border-subtle);
  }

  .hero-inner h1 {
    font-size: clamp(3rem, 7vw, 6rem);
    margin-bottom: 16px;
  }

  .hero-sub {
    font-size: 1.05rem;
    color: var(--text-secondary);
    max-width: 500px;
  }

  .profile-grid {
    display: grid;
    grid-template-columns: 360px 1fr;
    gap: 80px;
    align-items: start;
  }

  .profile-left {
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: sticky;
    top: 100px;
  }

  .avatar-wrap {
    position: relative;
    width: 240px; height: 240px;
    margin: 0 auto 16px;
  }

  .avatar-frame {
    width: 240px; height: 240px;
    border-radius: 50%;
    background: var(--bg-secondary);
    border: 2px solid var(--border-glow);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    overflow: hidden;
  }

  .avatar-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: var(--text-muted);
  }

  .avatar-inner svg { width: 64px; height: 64px; }

  .avatar-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    animation: ringPulse 3s ease-in-out infinite;
  }

  .r1 {
    width: 280px; height: 280px;
    border-color: rgba(0, 212, 255, 0.15);
  }

  .r2 {
    width: 320px; height: 320px;
    border-color: rgba(124, 58, 237, 0.08);
    animation-delay: 1.5s;
  }

  @keyframes ringPulse {
    0%, 100% { opacity: 1; transform: translate(-50%,-50%) scale(1); }
    50% { opacity: 0.4; transform: translate(-50%,-50%) scale(1.03); }
  }

  .info-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 18px;
  }

  .info-label {
    font-size: 0.7rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .info-value {
    font-size: 0.9rem;
    color: var(--text-primary);
    font-weight: 500;
    text-align: right;
  }

  .profile-right { display: flex; flex-direction: column; gap: 24px; }
  .profile-right h2 { font-size: clamp(2rem, 4vw, 3rem); }

  .bio {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.8;
  }

  .passioni-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-top: 8px;
  }

  .passione-chip {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 16px;
    transition: all 0.25s;
  }

  .passione-chip:hover {
    border-color: var(--border-glow);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,212,255,0.1);
  }

  .passione-icon { font-size: 1.2rem; }
  .passione-label { font-size: 0.82rem; color: var(--text-secondary); font-weight: 500; }

  /* Skills */
  .skills-section { background: var(--bg-secondary); }

  .skills-section h2 { font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 48px; }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  .skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .skill-name { font-weight: 600; font-size: 0.95rem; }
  .skill-pct { font-size: 0.85rem; }

  .skill-bar {
    height: 4px;
    background: var(--border-subtle);
    border-radius: 2px;
    overflow: hidden;
  }

  .skill-fill {
    height: 100%;
    border-radius: 2px;
    width: 0;
    transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
    animation: skillFill 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .reveal.visible .skill-fill { animation-play-state: running; }

  @keyframes skillFill {
    from { width: 0; }
  }

  /* Timeline */
  .timeline { display: flex; flex-direction: column; gap: 0; margin-top: 48px; }

  .timeline-item {
    display: grid;
    grid-template-columns: 100px 40px 1fr;
    gap: 0 20px;
    align-items: start;
  }

  .timeline-left {
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
  }

  .timeline-year { font-size: 1rem; font-weight: 700; }

  .timeline-connector {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tl-dot {
    width: 12px; height: 12px;
    background: var(--accent-cyan);
    border-radius: 50%;
    border: 2px solid var(--bg-primary);
    box-shadow: 0 0 12px var(--accent-cyan);
    margin-top: 22px;
    flex-shrink: 0;
    z-index: 1;
  }

  .tl-line {
    width: 1px;
    flex: 1;
    min-height: 40px;
    background: linear-gradient(var(--accent-cyan), transparent);
    margin-top: 4px;
  }

  .timeline-item:last-child .tl-line { display: none; }

  .timeline-content {
    padding: 20px 24px;
    margin-bottom: 20px;
  }

  .timeline-content h3 {
    font-size: 1.1rem;
    margin-bottom: 8px;
    color: var(--text-primary);
  }

  .timeline-content p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    .profile-grid { grid-template-columns: 1fr; }
    .profile-left { position: static; }
    .passioni-grid { grid-template-columns: repeat(2, 1fr); }
    .skills-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 480px) {
    .timeline-item { grid-template-columns: 70px 30px 1fr; gap: 0 10px; }
    .timeline-year { font-size: 0.85rem; }
  }
</style>
