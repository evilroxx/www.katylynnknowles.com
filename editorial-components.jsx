// Components for Katy Lynn Knowles' site.
const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ---------- Small primitives ----------
function Eyebrow({ children, ...rest }) {
  return <div className="eyebrow" {...rest}>{children}</div>;
}

function StarRule() {
  return (
    <div className="star-rule" role="presentation">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.5 7.5H22l-6.2 4.5 2.4 7.5L12 17l-6.2 4.5 2.4-7.5L2 9.5h7.5z"/></svg>
    </div>
  );
}

function Reveal({ children, delay = 0, as: As = "div", ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setTimeout(() => setShown(true), delay);
            obs.disconnect();
          }
        }
      },
      { rootMargin: "-10% 0px -10% 0px", threshold: 0.05 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <As ref={ref} className={`reveal ${shown ? "in" : ""} ${rest.className || ""}`} {...rest}>
      {children}
    </As>
  );
}

// ---------- Nav ----------
function Nav({ active, onJump }) {
  const items = [
    { id: "about", label: "Artist" },
    { id: "educator", label: "Educator" },
    { id: "journey", label: "Journey" },
    { id: "portfolio", label: "Portfolio" },
    { id: "resume", label: "Resume" },
    { id: "testimonials", label: "Praise" },
  ];
  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <a href="#top" onClick={(e)=>{e.preventDefault(); onJump("top");}} className="brand">
          <span className="brand-mark">k</span>
          <span>Katy <em>Lynn</em> Knowles</span>
        </a>
        <ul className="nav-links">
          {items.map(it => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={active === it.id ? "active" : ""}
                onClick={(e)=>{e.preventDefault(); onJump(it.id);}}
              >{it.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" onClick={(e)=>{e.preventDefault(); onJump("contact");}} className="nav-cta">Get in touch</a>
      </div>
    </nav>
  );
}

// ---------- Hero variants ----------
function HeroEditorial({ portrait }) {
  return (
    <section className="hero shell" id="top">
      <div className="hero-grid">
        <div className="hero-meta">
          <Eyebrow>Sarasota · New York · Greensboro</Eyebrow>
          <h1 className="hero-pos">
            I make <em>theatre</em><br/>
            that asks <span className="accent">questions.</span>
          </h1>
          <div className="hero-roles">
            <span>Theatre Educator</span>
            <span className="dot">✺</span>
            <span>Director</span>
            <span className="dot">✺</span>
            <span>Choreographer</span>
          </div>
        </div>
        <Reveal>
          <div className="hero-portrait">
            <img src={portrait} alt="Katy Lynn Knowles" />
            <div className="hero-caption">Studio · 2014</div>
          </div>
        </Reveal>
      </div>

      <div className="hero-foot">
        <div className="col">
          <Eyebrow>Currently</Eyebrow>
          <div style={{marginTop: 6}}>M.A. Educational Theatre<br/>New York University</div>
        </div>
        <div className="col" style={{textAlign:'center'}}>
          <div className="meta-num">15<span style={{fontSize:'0.5em', verticalAlign:'super'}}>+</span></div>
          <Eyebrow style={{marginTop: 4}}>Productions directed</Eyebrow>
        </div>
        <div className="col" style={{textAlign:'right'}}>
          <Eyebrow>Latest</Eyebrow>
          <div style={{marginTop: 6}}><em style={{fontFamily:'var(--font-display)'}}>Behind Closed Doors</em><br/>Original devised work</div>
        </div>
      </div>
    </section>
  );
}

function HeroMarquee({ portrait }) {
  return (
    <section className="hero shell" id="top">
      <Eyebrow style={{marginBottom: 24}}>Theatre Educator · Director · Choreographer</Eyebrow>
      <h1 className="marquee-name">
        <span className="line first">KATY</span>
        <span className="line last">Knowles</span>
      </h1>
      <div className="marquee-band">
        <div className="strip"><img src={portrait} alt="Katy Lynn Knowles" /></div>
        <p className="pull">
          The journey and the process are just as important as the final product.
        </p>
        <div className="strip"><img src="assets/portfolio/behind_closed_doors/2.jpg" alt="Behind Closed Doors" /></div>
      </div>
    </section>
  );
}

function HeroPortrait({ portrait }) {
  return (
    <section className="hero shell" id="top">
      <div className="portrait-hero">
        <div className="left">
          <Eyebrow>Est. 2004</Eyebrow>
          <h1 className="name">
            Katy<br/>
            <span className="it">Lynn</span><br/>
            Knowles
          </h1>
          <div className="hero-roles" style={{marginTop: 0}}>
            <span>Educator</span>
            <span className="dot">·</span>
            <span>Director</span>
            <span className="dot">·</span>
            <span>Choreographer</span>
          </div>
        </div>
        <div className="right">
          <img src={portrait} alt="Katy Lynn Knowles" />
        </div>
      </div>
    </section>
  );
}

function Hero({ variant, portrait }) {
  if (variant === "marquee") return <HeroMarquee portrait={portrait} />;
  if (variant === "portrait") return <HeroPortrait portrait={portrait} />;
  return <HeroEditorial portrait={portrait} />;
}

// ---------- About / Values ----------
function About() {
  return (
    <section className="section" id="about">
      <span className="scrollspy-marker" id="about-anchor"></span>
      <div className="shell">
        <Reveal className="section-head">
          <div>
            <div className="num">01 / Artist</div>
          </div>
          <div>
            <h2 className="display h-2">A practice grounded in <em>collaboration,</em> curiosity, and a high tolerance for risk.</h2>
            <p className="lead body-lg" style={{marginTop: 24}}>
              Ten core convictions about the work — what gets brought into the rehearsal room, and what gets left out.
            </p>
          </div>
        </Reveal>

        <div className="values-grid">
          {VALUES_LEFT.map((v, i) => (
            <Reveal key={`l-${i}`} delay={i * 60} className="value">
              <div className="idx">{String(i+1).padStart(2,'0')}</div>
              <p>{v}</p>
            </Reveal>
          ))}
          {VALUES_RIGHT.map((v, i) => (
            <Reveal key={`r-${i}`} delay={i * 60} className="value">
              <div className="idx">{String(i+6).padStart(2,'0')}</div>
              <p>{v}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Educator ----------
function Educator() {
  return (
    <section className="section" id="educator">
      <div className="shell">
        <Reveal className="section-head">
          <div>
            <div className="num">02 / Educator</div>
          </div>
          <div>
            <h2 className="display h-2">Teaching as <em>enrichment</em> — for the mind, the heart, the body.</h2>
          </div>
        </Reveal>

        <div className="educator-grid">
          <Reveal>
            <p className="philosophy">
              <span className="first">I</span> am a strong advocate for giving students an opportunity to find success in the performing arts — through the freedom to explore their own sense of self, their cultures, and the world in which they live. The mission is to enrich students' lives through performance and theatre education, with challenging activities that engage their minds, hearts, and bodies. Through that enrichment students will attain higher levels of academic achievement, gain self-esteem, and develop higher levels of empathy and tolerance for others. This can only be achieved in a safe and creative environment where students can celebrate their differences — integrating academics, performance, and life into preparation for becoming responsible citizens in our 21st-century pluralistic society.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="inspirations">
              <h4>Artistic Inspirations</h4>
              <ul>
                {INSPIRATIONS.map((p, i) => (
                  <li key={i}>
                    <span>{p.name}</span>
                    <span className="craft">{p.craft}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ---------- Journey ----------
function Journey() {
  return (
    <section className="section" id="journey">
      <div className="shell">
        <Reveal className="journey-intro">
          <Eyebrow>03 / Journey</Eyebrow>
          <p className="big" style={{marginTop: 16}}>
            It's not about the destination —<br/>
            it's about the <em className="accent">journey.</em>
          </p>
        </Reveal>

        <div className="timeline">
          {JOURNEY.map((j, i) => (
            <Reveal key={i} delay={Math.min(i * 30, 240)} className={`tl-row ${j.major ? 'major' : ''}`}>
              <div className="tl-year">{j.year}</div>
              <div className="tl-dot"></div>
              <div className="tl-card">
                <div className="mob-year">{j.year}</div>
                <div className="title">{j.title}</div>
                <div className="sub">{j.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Portfolio ----------
function Portfolio({ onOpen }) {
  return (
    <section className="section" id="portfolio">
      <div className="shell">
        <Reveal className="section-head">
          <div>
            <div className="num">04 / Portfolio</div>
          </div>
          <div>
            <h2 className="display h-2">Selected <em>productions</em> — direction, choreography, devised work.</h2>
            <p className="lead body-lg" style={{marginTop: 24}}>
              Nine projects across high school, college, summer programmes, and original work. Tap any image to step inside.
            </p>
          </div>
        </Reveal>

        <div className="portfolio-grid">
          {PRODUCTIONS.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i * 50, 240)} className={`pcard ${p.layout} ${p.isVideo ? 'video' : ''}`}>
              <div
                className="pcard-inner"
                onClick={() => onOpen(p)}
                style={{position:'absolute', inset:0}}
                role="button"
                tabIndex={0}
                onKeyDown={(e)=>{ if(e.key==='Enter') onOpen(p); }}
              >
                <div
                  className="img"
                  style={p.images[0] ? { backgroundImage: `url('${p.images[0]}')` } : {}}
                ></div>
                <div className="meta">
                  <div className="role">{p.year} · {p.role}</div>
                  <h3 className="title">{p.title}</h3>
                </div>
                <div className="corner">
                  {p.isVideo ? (
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8"/></svg>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Resume ----------
function Resume() {
  const items = [
    {
      label: "Artistic Résumé",
      title: "Director / Choreographer",
      preview: "assets/dir_choreo.png",
      file: "assets/k_knowles_artistic_resume.pdf",
    },
    {
      label: "Curriculum Vitae",
      title: "Educator / Scholar",
      preview: "assets/cv.png",
      file: "assets/k_knowles_cv_official.pdf",
    },
  ];
  return (
    <section className="section" id="resume">
      <div className="shell">
        <Reveal className="section-head">
          <div>
            <div className="num">05 / Documents</div>
          </div>
          <div>
            <h2 className="display h-2">The <em>paperwork</em>, for the curious.</h2>
          </div>
        </Reveal>

        <div className="resume-grid">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 80}>
              <a href={it.file} target="_blank" rel="noopener noreferrer" className="resume-card" style={{textDecoration:'none', color:'inherit'}}>
                <div className="label">{it.label}</div>
                <h3>{it.title}</h3>
                <div className="preview"><img src={it.preview} alt={it.title} /></div>
                <div className="download">
                  Download PDF
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v14m-6-6l6 6 6-6M5 21h14"/></svg>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Testimonials ----------
function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="shell">
        <Reveal className="section-head">
          <div>
            <div className="num">06 / Praise</div>
          </div>
          <div>
            <h2 className="display h-2">From <em>collaborators,</em> mentors, and students.</h2>
          </div>
        </Reveal>

        <div className="test-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={Math.min(i * 80, 320)} className="test">
              <p>{t.body}</p>
              <footer>
                <div className="name">{t.name}</div>
                <div>{t.role}</div>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Now ticker ----------
function NowTicker() {
  const items = [
    { live: true, label: "Currently", value: "M.A. Educational Theatre · NYU" },
    { label: "Based in", value: "New York / Sarasota" },
    { label: "Available for", value: "Direction · Choreography · Residencies" },
    { label: "Latest", value: "Behind Closed Doors — devised work" },
    { label: "Teaching", value: "Workshops & masterclasses" },
    { label: "Reach me", value: "katyknowles@hotmail.com" },
  ];
  // Duplicate items for seamless loop
  const renderItem = (it, i, prefix) => (
    <React.Fragment key={`${prefix}-${i}`}>
      <span className={`item ${it.live ? 'live' : ''}`}>
        <span className="dot"></span>
        <span>{it.label}</span>
        <span className="lab">— {it.value}</span>
      </span>
      <span className="sep" aria-hidden="true"></span>
    </React.Fragment>
  );
  return (
    <div className="ticker" aria-label="Now / Upcoming">
      <div className="ticker-track">
        {items.map((it, i) => renderItem(it, i, 'a'))}
        {items.map((it, i) => renderItem(it, i, 'b'))}
      </div>
    </div>
  );
}

// ---------- Contact Form (mocked) ----------
function ContactForm() {
  const [state, setState] = useState({ name: "", email: "", role: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onChange = (k) => (e) => setState(s => ({ ...s, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!state.name || !state.email || !state.message) return;
    setSubmitting(true);
    // Simulated send (no backend)
    await new Promise(r => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
  };

  const ready = state.name && state.email && state.message;

  return (
    <section className="contact-section" id="contact">
      <div className="shell">
        <Reveal className="section-head">
          <div><div className="num">07 / Contact</div></div>
          <div>
            <h2 className="display h-2">Let's <em>make</em> something together.</h2>
            <p className="lead body-lg" style={{marginTop: 24}}>
              For productions, residencies, workshops, or to say hello.
            </p>
          </div>
        </Reveal>

        <div className="contact-layout">
          <Reveal className="contact-left">
            <Eyebrow>About a project?</Eyebrow>
            <p className="lede">
              Tell me what<br/>
              you're <em>making.</em>
            </p>

            <div className="quick">
              <div className="row">
                <span className="k">Email</span>
                <a href="mailto:katyknowles@hotmail.com">katyknowles@hotmail.com</a>
              </div>
              <div className="row">
                <span className="k">Phone</span>
                <a href="tel:+19414474521">+1 (941) 447 · 4521</a>
              </div>
              <div className="row">
                <span className="k">Tumblr</span>
                <a href="https://katy-knowles.tumblr.com/" target="_blank" rel="noopener noreferrer">katy-knowles.tumblr.com</a>
              </div>
              <div className="row">
                <span className="k">Instagram</span>
                <a href="https://instagram.com/katyknowles/" target="_blank" rel="noopener noreferrer">@katyknowles</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {done ? (
              <div className="form-success" role="status">
                <h3>Thank you — got it.</h3>
                <p>I'll reply within a few days. In the meantime, the work above will keep you company.</p>
                <p style={{marginTop: 10, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--mute)'}}>
                  Sent: {state.name} · {state.email}
                </p>
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit} noValidate>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="cf-name">Your name</label>
                    <input id="cf-name" type="text" autoComplete="name"
                      placeholder="Jane Doe"
                      value={state.name} onChange={onChange('name')} required />
                  </div>
                  <div className="field">
                    <label htmlFor="cf-email">Email</label>
                    <input id="cf-email" type="email" autoComplete="email"
                      placeholder="jane@theatre.org"
                      value={state.email} onChange={onChange('email')} required />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="cf-role">What's this about?</label>
                  <select id="cf-role" value={state.role} onChange={onChange('role')}>
                    <option value="">Pick one</option>
                    <option>A directing opportunity</option>
                    <option>Choreography</option>
                    <option>A teaching residency or workshop</option>
                    <option>Press / media</option>
                    <option>Just saying hello</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="cf-msg">Message</label>
                  <textarea id="cf-msg" rows="4"
                    placeholder="Tell me a little about your project — what, when, where."
                    value={state.message} onChange={onChange('message')} required />
                </div>
                <div className="submit-row">
                  <span className="note">{submitting ? "Sending…" : ready ? "Ready to send" : "Three fields are enough."}</span>
                  <button type="submit" className="submit-btn" disabled={!ready || submitting}>
                    {submitting ? "Sending" : "Send message"}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <Reveal className="footer-grid">
          <div>
            <Eyebrow>Elsewhere</Eyebrow>
            <h2 style={{marginTop: 18, fontSize: 'clamp(36px, 5vw, 64px)'}}>
              Katy <span className="it">Lynn</span> Knowles
            </h2>
            <p style={{maxWidth: '38ch', color: 'var(--ink-2)', marginTop: 8}}>
              Theatre educator, director, and choreographer. Process is the curriculum.
            </p>
          </div>
          <div className="links">
            <a href="https://katy-knowles.tumblr.com/" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22c-3.5 0-5.5-2-5.5-5.5V11H5V8c2.5-.8 4-2.5 4.5-5H12v4.5h4.5V11H12v5c0 1 .5 1.5 1.5 1.5h3v4.5h-3z"/></svg>
              Tumblr
            </a>
            <a href="https://instagram.com/katyknowles/" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
              Instagram
            </a>
            <a href="mailto:katyknowles@hotmail.com">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></svg>
              Email
            </a>
          </div>
        </Reveal>

        <div className="colophon">
          <div>© {new Date().getFullYear()} Katy Lynn Knowles · All rights reserved</div>
          <div>New York · Sarasota</div>
        </div>
      </div>
    </footer>
  );
}

// ---------- Lightbox ----------
function Lightbox({ production, onClose }) {
  const [idx, setIdx] = useState(0);
  const total = production.images.length;

  const prev = useCallback(() => setIdx(i => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIdx(i => (i + 1) % total), [total]);

  useEffect(() => {
    document.body.classList.add("lb-open");
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("lb-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [prev, next, onClose]);

  return (
    <div className="lb-backdrop" onClick={onClose}>
      <div className="lb" onClick={(e) => e.stopPropagation()}>
        <button className="lb-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>

        <div className="lb-stage">
          {production.isVideo ? (
            <iframe
              src={`https://player.vimeo.com/video/${production.vimeoId}`}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{position:'absolute', inset:0, width:'100%', height:'100%'}}
              title={production.title}
            ></iframe>
          ) : (
            <>
              {production.images.map((src, i) => (
                <div key={i} className={`frame ${i === idx ? "active" : ""}`}>
                  <img src={src} alt={`${production.title} — ${i+1}`} />
                </div>
              ))}
              {total > 1 && (
                <>
                  <button className="lb-nav-btn prev" onClick={prev} aria-label="Previous">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6"/></svg>
                  </button>
                  <button className="lb-nav-btn next" onClick={next} aria-label="Next">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
                  </button>
                  <div className="lb-counter">{String(idx + 1).padStart(2,'0')} / {String(total).padStart(2,'0')}</div>
                </>
              )}
            </>
          )}
        </div>

        <div className="lb-info">
          <div className="eyebrow">{production.year} · {production.venue}</div>
          <h3>{production.title}</h3>
          <div className="role">{production.role}</div>
          {production.subtitle && (
            <div style={{
              fontFamily:'var(--font-display)', fontStyle:'italic',
              fontSize: '18px', color:'var(--ink-2)'
            }}>{production.subtitle}</div>
          )}
          <p className="body">{production.summary}</p>
          {!production.isVideo && production.images.length > 1 && (
            <div className="lb-thumbs">
              {production.images.map((src, i) => (
                <div
                  key={i}
                  className={`lb-thumb ${i === idx ? "active" : ""}`}
                  style={{ backgroundImage: `url('${src}')` }}
                  onClick={() => setIdx(i)}
                ></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  Nav, Hero, About, Educator, Journey, Portfolio, Resume, Testimonials, Footer, Lightbox, Reveal, Eyebrow,
  NowTicker, ContactForm,
});
