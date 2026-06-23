<script>
  import { base } from '$app/paths';
  import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';

  // ─── DATI PROGETTI ───────────────────────────────────────────────────────────
  // Per ogni progetto:
  //   previewSrc  → URL diretto a un'immagine (es. '/img/progetto1.jpg' nella cartella static/)
  //   embedUrl    → URL embed di Canva o Google Slides (vedi NOTE sotto)
  //   projectUrl  → link opzionale al progetto (es. GitHub, sito, PDF)
  //
  // NOTE EMBED:
  //   Canva   → Condividi → Incorpora → copia l'URL src dell'<iframe>
  //   G.Slide → File → Pubblica sul web → Incorpora → copia l'URL src dell'<iframe>
  // ─────────────────────────────────────────────────────────────────────────────

const progetti = [
  {
    anno: '3',
    annoLabel: 'Terzo Anno',
    items: [
      {
        id: '3-01',
        titolo: 'Calcolatore di codice fiscale',
        materia: 'Informatica',
        materiaColor: '#2ecc71',
        desc: 'Un programma sviluppato in C capace di generare automaticamente il codice fiscale partendo dai dati anagrafici dell’utente.',
        punti: [
          'Strutture base del linguaggio C',
          'Gestione di stringhe e input utente',
          'Logica di calcolo del codice fiscale italiano'
        ],
        previewSrc: `${base}/img_antep/ante_cod_c.jpg`,
        embedUrl: null,
        projectUrl: 'https://github.com/Attanasio-Edoardo/codice_fiscale_c',
      },
      {
        id: '3-02',
        titolo: "'NDRANGHETA",
        materia: 'Storia',
        materiaColor: '#27ae60',
        desc: 'Un approfondimento storico e sociale sulla ’Ndrangheta, dalle sue origini in Calabria fino alla sua espansione internazionale.',
        punti: [
          'Origini storiche della ’Ndrangheta',
          'Struttura e organizzazione criminale',
          'Influenza economica e sociale delle mafie'
        ],
        previewSrc: `${base}/img_antep/ndra.jpg`,
        embedUrl: 'https://www.canva.com/design/DAGG-7buDY4/1BvN8SU1LeJpUaMNs5HdA/view?embed',
        projectUrl: null,
      },
      {
        id: '3-03',
        titolo: "La Mattanza",
        materia: 'Storia',
        materiaColor: '#27ae60',
        desc: 'Un progetto dedicato al fenomeno delle stragi mafiose e alla violenza utilizzata dalla criminalità organizzata durante gli anni più critici della lotta alla mafia.',
        punti: [
          'Le stragi mafiose in Italia',
          'Figure simbolo della lotta alla mafia',
          'Impatto sociale e politico della criminalità organizzata'
        ],
        previewSrc: `${base}/img_antep/mattanza.jpeg`,
        embedUrl: null,
        projectUrl: null,
      },
    ],
  },
  {
    anno: '4',
    annoLabel: 'Quarto Anno',
    items: [
      {
        id: '4-01',
        titolo: 'QuizDrive',
        materia: 'Informatica',
        materiaColor: '#2ecc71',
        desc: "Un simulatore di quiz della patente sviluppato in Python con Tkinter, progettato per esercitarsi in modo realistico e interattivo.",
        punti: [
          'Interfacce grafiche con Tkinter',
          'Gestione di domande e punteggi',
          'Simulazione realistica dei quiz patente'
        ],
        previewSrc: `${base}/img_antep/quiz_pat.jpg`,
        embedUrl: null,
        projectUrl: 'https://github.com/Attanasio-Edoardo/QuizDrive',
      },
      {
        id: '4-02',
        titolo: 'Presbiterianesimo',
        materia: 'Italiano & Storia',
        materiaColor: '#2ecc71',
        desc: 'Un’analisi del Presbiterianesimo, delle sue origini nella Riforma protestante e del suo impatto religioso e culturale.',
        punti: [
          'La Riforma protestante',
          'Principi del Presbiterianesimo',
          'Diffusione e influenza storica'
        ],
        previewSrc: `${base}/img_antep/presbi.png`,
        embedUrl: 'https://www.canva.com/design/DAGXZpW1i0E/TCdK2NoGalyfswRDvOycEQ/view?embed',
        projectUrl: null,
      },
    ],
  },
  {
    anno: '5',
    annoLabel: 'Quinto Anno',
    items: [
      {
        id: '5-01',
        titolo: 'Lager',
        materia: 'Informatica & Filosofia',
        materiaColor: '#27ae60',
        desc: 'Un percorso interdisciplinare dedicato ai lager nazisti, alla disumanizzazione e alla riflessione filosofica sulla perdita dei diritti umani.',
        punti: [
          'I campi di concentramento nazisti',
          'La negazione della dignità umana',
          'Memoria storica e riflessione etica'
        ],
        previewSrc: `${base}/img_antep/lager.jpeg`,
        embedUrl: 'https://www.canva.com/design/DAHJ9aEgIgw/2uBiUGDhyoxr03Mwe5km-A/view?embed',
        projectUrl: null,
      },
      {
        id: '5-02',
        titolo: '1522',
        materia: 'Informatica & Filosofia',
        materiaColor: '#27ae60',
        desc: 'Un progetto dedicato agli eventi storici e culturali del 1522, con riferimento ai cambiamenti politici, religiosi e sociali del XVI secolo.',
        punti: [
          'Contesto storico del Cinquecento',
          'Trasformazioni religiose e politiche',
          'Impatto culturale degli eventi del 1522'
        ],
        previewSrc: `${base}/img_antep/1522.png`,
        embedUrl: '',
        projectUrl: 'https://github.com/Attanasio-Edoardo/progetto_1522',
      },
      {
        id: '5-03',
        titolo: 'Aktion T4 e progetto Lebensborn',
        materia: 'Sistemi & Storia',
        materiaColor: '#58d68d',
        desc: 'Un approfondimento sui programmi eugenetici nazisti Aktion T4 e Lebensborn, simboli della propaganda razziale del Terzo Reich.',
        punti: [
          'Eugenetica e ideologia nazista',
          'Il programma Aktion T4',
          'Il progetto Lebensborn e la propaganda razziale'
        ],
        previewSrc: `${base}/img_antep/lebensborn.jpg`,
        embedUrl: 'https://www.canva.com/design/DAHJ9Syb6Pw/xS9OpptKBKzgCnwA4tTByA/view?embed',
        projectUrl: null,
      },
      {
        id: '5-04',
        titolo: "'68 e Costituzione",
        materia: 'Storia e cultura generale',
        materiaColor: '#58d68d',
        desc: 'Un’analisi del Sessantotto italiano e dei cambiamenti sociali, politici e culturali collegati ai principi della Costituzione.',
        punti: [
          'Il movimento del Sessantotto',
          'Diritti civili e partecipazione politica',
          'Valori costituzionali e cambiamento sociale'
        ],
        previewSrc: `${base}/img_antep/Costi.jpg`,
        embedUrl: 'https://www.canva.com/design/DAHJ_nsTC_I/WBnV7oHXu_0QbsKzRbBAVQ/view?embed',
        projectUrl: null,
      },
      {
        id: '5-05',
        titolo: "La prigione domestica",
        materia: 'Cultura generale ed educazione civica',
        materiaColor: '#58d68d',
        desc: 'Un’analisi del Sessantotto italiano e dei cambiamenti sociali, politici e culturali collegati ai principi della Costituzione.',
        punti: [
          'Il movimento del Sessantotto',
          'Diritti civili e partecipazione politica',
          'Valori costituzionali e cambiamento sociale'
        ],
        previewSrc: `${base}/img_antep/prig_dom.webp`,
        embedUrl: null,
        projectUrl: '/pdfs/prigione_domestica.pdf',
      },
      {
        id: '5-06',
        titolo: "L'amore mio non muore - Roberto Saviano",
        materia: 'Cultura generale ed educazione civica',
        materiaColor: '#58d68d',
        desc: 'Un’analisi del Sessantotto italiano e dei cambiamenti sociali, politici e culturali collegati ai principi della Costituzione.',
        punti: [
          'Il movimento del Sessantotto',
          'Diritti civili e partecipazione politica',
          'Valori costituzionali e cambiamento sociale'
        ],
        previewSrc: `${base}/img_antep/saviano.webp`,
        embedUrl: null,
        projectUrl: null,
      },
      {
        id: '5-07',
        titolo: "La zona grigia - Primo Levi",
        materia: 'Cultura generale ed educazione civica',
        materiaColor: '#58d68d',
        desc: 'Un’analisi del Sessantotto italiano e dei cambiamenti sociali, politici e culturali collegati ai principi della Costituzione.',
        punti: [
          'Il movimento del Sessantotto',
          'Diritti civili e partecipazione politica',
          'Valori costituzionali e cambiamento sociale'
        ],
        previewSrc: `${base}/img_antep/primo.jpeg`,
        embedUrl: null,
        projectUrl: null,
      },
      {
        id: '5-08',
        titolo: "Social and ethical problems of Internet",
        materia: 'Inglese ed educazione civica',
        materiaColor: '#58d68d',
        desc: 'A list of problems that the use of Internet lead to',
        punti: [
          'Digital divide',
          'Erosion of cultural industries',
          'Censorship'
        ],
        previewSrc: `${base}/img_antep/social.jpeg`,
        embedUrl: null,
        projectUrl: null,
      },
      {
        id: '5-08',
        titolo: "Social and ethical problems of Internet",
        materia: 'Inglese ed educazione civica',
        materiaColor: '#58d68d',
        desc: 'A list of problems that the use of Internet lead to',
        punti: [
          'Digital divide',
          'Erosion of cultural industries',
          'Censorship'
        ],
        previewSrc: `${base}/img_antep/social.jpeg`,
        embedUrl: null,
        projectUrl: null,
      },
      {
        id: '5-09',
        titolo: "Online dangers and how to use the Internet safely",
        materia: 'Inglese ed educazione civica',
        materiaColor: '#58d68d',
        desc: 'A list of problems that the use of Internet lead to',
        punti: [
          'Malware',
          'Worm',
          'Firewall'
        ],
        previewSrc: `${base}/img_antep/intsec.jpeg`,
        embedUrl: null,
        projectUrl: null,
      },
    ],
  },
];

  let selectedProject = null;

  function openProject(p) { selectedProject = p; }
  function closeProject() { selectedProject = null; }
</script>

<svelte:head>
  <title>Educazione Civica — Portfolio Maturità</title>
</svelte:head>

<!-- Hero -->
<section class="page-hero">
  <AnimatedBackground />
  <div class="hero-glow"></div>
  <div class="container hero-inner">
    <div class="section-label reveal">02 / Educazione Civica</div>
    <h1 class="reveal">
      Portfolio<br/>
      <span class="gradient-text">Digitale</span>
    </h1>
    <p class="reveal">
      I temi trasversali che collegano tecnologia, società e responsabilità civile.
      Un percorso interdisciplinare tra informatica, diritto, storia e scienze.
    </p>
  </div>
</section>

<!-- Progetti per anno -->
{#each progetti as gruppo}
<section class="section anno-section">
  <div class="container">
    <div class="anno-header reveal">
      <div class="anno-badge">{gruppo.anno}</div>
      <div>
        <div class="section-label">{gruppo.annoLabel}</div>
        <h2>Progetti del <span class="gradient-text">{gruppo.annoLabel}</span></h2>
      </div>
    </div>

    <div class="progetti-grid">
      {#each gruppo.items as progetto, i}
        <div
          class="progetto-card glass-card reveal"
          style="animation-delay:{i*0.1}s"
          on:click={() => openProject(progetto)}
          role="button"
          tabindex="0"
          on:keydown={(e) => e.key === 'Enter' && openProject(progetto)}
        >
          <!-- Anteprima -->
          <div class="progetto-preview">
            {#if progetto.previewSrc}
              <img src={progetto.previewSrc} alt="Anteprima {progetto.titolo}" class="preview-img" />
            {:else}
              <div class="preview-placeholder">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M4 28l12-10 8 8 6-5 14 11" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                  <circle cx="16" cy="18" r="4" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <span class="mono">Anteprima</span>
              </div>
            {/if}
            <div class="materia-badge" style="background: {progetto.materiaColor}20; border-color: {progetto.materiaColor}40; color: {progetto.materiaColor}">
              {progetto.materia}
            </div>
            {#if progetto.embedUrl}
              <div class="slide-badge">
                <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12"><path d="M2 2h12v10H2V2zm1 1v8h10V3H3zm2 1h6v1H5V4zm0 2h6v1H5V6zm0 2h4v1H5V8z"/></svg>
                Presentazione
              </div>
            {/if}
          </div>

          <!-- Info -->
          <div class="progetto-info">
            <h3 class="progetto-titolo">{progetto.titolo}</h3>
            <p class="progetto-desc">{progetto.desc}</p>
            <div class="progetto-footer">
              <span class="view-link" style="color: {progetto.materiaColor}">Apri progetto →</span>
            </div>
          </div>

          <div class="accent-bar" style="background: linear-gradient(90deg, {progetto.materiaColor}, {progetto.materiaColor}44)"></div>
        </div>
      {/each}
    </div>
  </div>
</section>
{/each}

<!-- Modal dettaglio -->
{#if selectedProject}
  <div class="modal-overlay" on:click={closeProject} role="dialog" aria-modal="true">
    <div class="modal-panel glass-card" on:click|stopPropagation>

      <button class="modal-close btn-icon" on:click={closeProject} aria-label="Chiudi">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>

      <!-- Embed presentazione (Canva / Google Slides) -->
      {#if selectedProject.embedUrl}
        <div class="modal-embed">
          <iframe
            src={selectedProject.embedUrl}
            title="Presentazione {selectedProject.titolo}"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      {:else if selectedProject.previewSrc}
        <div class="modal-preview-img-wrap">
          <img src={selectedProject.previewSrc} alt="Anteprima {selectedProject.titolo}" />
        </div>
      {:else}
        <div class="modal-preview-placeholder">
          <svg viewBox="0 0 64 64" fill="none">
            <rect x="4" y="8" width="56" height="48" rx="6" stroke="currentColor" stroke-width="1.5"/>
            <path d="M4 40l18-14 10 10 8-7 20 16" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
            <circle cx="20" cy="22" r="6" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          <p class="mono">Presentazione non ancora disponibile</p>
        </div>
      {/if}

      <!-- Body -->
      <div class="modal-body">
        <div class="modal-meta">
          <span class="materia-badge-inline" style="background: {selectedProject.materiaColor}20; border-color: {selectedProject.materiaColor}40; color: {selectedProject.materiaColor}">
            {selectedProject.materia}
          </span>
        </div>

        <h2 class="modal-title">{selectedProject.titolo}</h2>
        <p class="modal-desc">{selectedProject.desc}</p>

        <ul class="modal-punti">
          {#each selectedProject.punti as punto}
            <li>
              <span class="punto-dot" style="background:{selectedProject.materiaColor}; box-shadow: 0 0 6px {selectedProject.materiaColor}"></span>
              {punto}
            </li>
          {/each}
        </ul>

        <!-- CTA buttons -->
        <div class="modal-actions">
          {#if selectedProject.embedUrl}
            <a href={selectedProject.embedUrl} target="_blank" rel="noopener" class="btn-solid">
              Apri presentazione
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          {/if}
          {#if selectedProject.projectUrl}
            <a href={selectedProject.projectUrl} target="_blank" rel="noopener" class="btn-glow">
              Vai al progetto →
            </a>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .page-hero {
    position: relative;
    min-height: 55vh;
    display: flex;
    align-items: flex-end;
    padding: calc(var(--navbar-h,72px) + 60px) 0 80px;
    overflow: hidden;
    border-bottom: 1px solid var(--border-subtle);
  }

  .hero-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 40% 40%, rgba(46, 204, 113, 0.1), transparent 60%);
    pointer-events: none;
  }

  .hero-inner h1 { font-size: clamp(3rem, 7vw, 6rem); margin-bottom: 16px; }
  .hero-inner p { font-size: 1.05rem; color: var(--text-secondary); max-width: 560px; }

  /* Anno section */
  .anno-section { border-bottom: 1px solid var(--border-subtle); }
  .anno-section:last-of-type { border-bottom: none; }

  .anno-header {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    margin-bottom: 48px;
  }

  .anno-badge {
    width: 64px; height: 64px;
    border-radius: 50%;
    background: rgba(46, 204, 113, 0.1);
    border: 2px solid rgba(46, 204, 113, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--accent-cyan);
    flex-shrink: 0;
  }

  .anno-header h2 { font-size: clamp(1.8rem, 3vw, 2.5rem); }

  /* Grid */
  .progetti-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .progetto-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
  }

  .progetto-card:hover {
    transform: translateY(-6px);
    border-color: rgba(46, 204, 113, 0.3);
    box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 30px rgba(46, 204, 113, 0.1);
  }

  /* Preview */
  .progetto-preview {
    width: 100%; height: 200px;
    position: relative;
    overflow: hidden;
    background: rgba(46, 204, 113, 0.03);
    border-bottom: 1px solid var(--border-subtle);
  }

  .preview-img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .progetto-card:hover .preview-img { transform: scale(1.04); }

  .preview-placeholder {
    width: 100%; height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: var(--text-muted);
  }

  .preview-placeholder svg { width: 48px; height: 48px; opacity: 0.4; }
  .preview-placeholder span { font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; opacity: 0.4; }

  .materia-badge {
    position: absolute;
    top: 12px; left: 12px;
    padding: 4px 10px;
    border-radius: 100px;
    border: 1px solid;
    font-family: var(--font-mono);
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
  }

  .slide-badge {
    position: absolute;
    top: 12px; right: 12px;
    padding: 4px 10px;
    border-radius: 100px;
    background: rgba(46, 204, 113, 0.15);
    border: 1px solid rgba(46, 204, 113, 0.4);
    color: var(--accent-cyan);
    font-family: var(--font-mono);
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  /* Info */
  .progetto-info {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
  }

  .progetto-titolo { font-size: 1.05rem; line-height: 1.3; }
  .progetto-desc { font-size: 0.83rem; color: var(--text-muted); line-height: 1.6; }

  .progetto-footer {
    margin-top: auto;
    padding-top: 12px;
    border-top: 1px solid var(--border-subtle);
  }

  .view-link {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: opacity 0.2s;
  }

  .accent-bar {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .progetto-card:hover .accent-bar { opacity: 1; }

  /* Modal */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(2, 4, 8, 0.85);
    backdrop-filter: blur(8px);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .modal-panel {
    width: 100%;
    max-width: 860px;
    max-height: 90vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    position: relative;
    animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Chiudi modal — usa btn-icon locale */
  .btn-icon {
    position: absolute;
    top: 16px; right: 16px;
    width: 36px; height: 36px;
    background: rgba(255,255,255,0.05);
    border: 1px solid var(--border-subtle);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    z-index: 10;
    transition: all 0.2s;
  }

  .btn-icon:hover {
    background: rgba(255,255,255,0.1);
    color: var(--text-primary);
    border-color: var(--border-glow);
  }

  .btn-icon svg { width: 16px; height: 16px; }

  /* Embed iframe */
  .modal-embed {
    width: 100%;
    aspect-ratio: 16/9;
    background: #000;
    flex-shrink: 0;
    border-bottom: 1px solid var(--border-subtle);
  }

  .modal-embed iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }

  /* Preview immagine grande */
  .modal-preview-img-wrap {
    width: 100%;
    max-height: 320px;
    overflow: hidden;
    border-bottom: 1px solid var(--border-subtle);
    flex-shrink: 0;
  }

  .modal-preview-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Placeholder modal */
  .modal-preview-placeholder {
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    color: var(--text-muted);
    background: rgba(46, 204, 113, 0.02);
    border-bottom: 1px solid var(--border-subtle);
  }

  .modal-preview-placeholder svg { width: 64px; height: 64px; opacity: 0.3; }
  .modal-preview-placeholder p { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; opacity: 0.4; }

  /* Modal body */
  .modal-body {
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .modal-meta { display: flex; gap: 10px; flex-wrap: wrap; }

  .materia-badge-inline {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    border-radius: 100px;
    border: 1px solid;
    font-family: var(--font-mono);
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
  }

  .modal-title { font-size: 1.6rem; }

  .modal-desc {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  .modal-punti {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    background: rgba(46, 204, 113, 0.03);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-sm);
  }

  .modal-punti li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.87rem;
    color: var(--text-secondary);
  }

  .punto-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* Modal actions — usa btn-solid e btn-glow dal design system globale */
  .modal-actions {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    padding-top: 4px;
  }

  @media (max-width: 900px) {
    .progetti-grid { grid-template-columns: 1fr; }
    .anno-header { flex-direction: column; gap: 12px; }
  }

  @media (max-width: 600px) {
    .modal-panel { max-height: 95vh; }
    .modal-body { padding: 20px; }
    .modal-embed { aspect-ratio: 4/3; }
  }
</style>