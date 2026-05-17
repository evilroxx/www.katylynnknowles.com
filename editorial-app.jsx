// Root app for Katy Lynn Knowles' site.
const { useState, useEffect, useCallback } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "cream",
  "type": "classic",
  "hero": "editorial",
  "portrait": "profile",
  "accent": "#a8412c"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = useState("top");
  const [openProj, setOpenProj] = useState(null);

  // ---- Scrollspy ----
  useEffect(() => {
    const ids = ["about", "educator", "journey", "portfolio", "resume", "testimonials", "contact"];
    const els = ids.map(id => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry above 0.2
        let best = null;
        for (const e of entries) {
          if (e.intersectionRatio > 0.2 && (!best || e.intersectionRatio > best.intersectionRatio)) {
            best = e;
          }
        }
        if (best) setActive(best.target.id);
      },
      { threshold: [0, 0.2, 0.4, 0.6] }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // ---- Smooth scroll ----
  const onJump = useCallback((id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  // ---- Apply accent override ----
  useEffect(() => {
    if (t.accent) {
      document.documentElement.style.setProperty("--accent", t.accent);
      // derive a soft variant
      try {
        const hex = t.accent.replace("#","");
        const r = parseInt(hex.substr(0,2),16);
        const g = parseInt(hex.substr(2,2),16);
        const b = parseInt(hex.substr(4,2),16);
        document.documentElement.style.setProperty("--accent-soft", `rgba(${r},${g},${b},0.12)`);
      } catch(e) {}
    }
  }, [t.accent]);

  const portraitMap = {
    profile: "assets/profile.png",
    alt: "assets/profile_alt.png",
  };

  return (
    <div data-palette={t.palette} data-type={t.type}>
      <Nav active={active} onJump={onJump} />
      <Hero variant={t.hero} portrait={portraitMap[t.portrait] || portraitMap.profile} />
      <NowTicker />
      <About />
      <Educator />
      <Journey />
      <Portfolio onOpen={setOpenProj} />
      <Resume />
      <Testimonials />
      <ContactForm />
      <Footer />

      {openProj && <Lightbox production={openProj} onClose={() => setOpenProj(null)} />}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette">
          <TweakRadio
            value={t.palette}
            onChange={(v) => setTweak('palette', v)}
            options={[
              { value: 'cream', label: 'Cream' },
              { value: 'paper', label: 'Paper' },
              { value: 'oxblood', label: 'Oxblood' },
              { value: 'midnight', label: 'Midnight' },
            ]}
          />
        </TweakSection>

        <TweakSection label="Accent color">
          <TweakColor
            value={t.accent}
            onChange={(v) => setTweak('accent', v)}
            options={['#a8412c', '#6a1d20', '#2c4a6b', '#3c6e47', '#b88a3a', '#d68a5c']}
          />
        </TweakSection>

        <TweakSection label="Hero treatment">
          <TweakRadio
            value={t.hero}
            onChange={(v) => setTweak('hero', v)}
            options={[
              { value: 'editorial', label: 'Editorial' },
              { value: 'marquee', label: 'Marquee' },
              { value: 'portrait', label: 'Portrait' },
            ]}
          />
        </TweakSection>

        <TweakSection label="Typography">
          <TweakRadio
            value={t.type}
            onChange={(v) => setTweak('type', v)}
            options={[
              { value: 'classic', label: 'Serif + Sans' },
              { value: 'sansforward', label: 'All Sans' },
              { value: 'literary', label: 'All Serif' },
            ]}
          />
        </TweakSection>

        <TweakSection label="Portrait">
          <TweakRadio
            value={t.portrait}
            onChange={(v) => setTweak('portrait', v)}
            options={[
              { value: 'profile', label: 'Studio' },
              { value: 'alt', label: 'Original' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
