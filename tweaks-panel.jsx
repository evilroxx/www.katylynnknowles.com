// Live design tweaks panel for development
const { useState, useRef, useEffect } = React;

function useTweaks(init = {}) {
  const [tweaks, setTweaks] = useState(init);
  const setTweak = (k, v) => {
    setTweaks(prev => ({ ...prev, [k]: v }));
    try { localStorage.setItem(`_twk_${k}`, JSON.stringify(v)); } catch(e) {}
  };
  useEffect(() => {
    const stored = {};
    for (const k in init) {
      try {
        const v = localStorage.getItem(`_twk_${k}`);
        if (v) stored[k] = JSON.parse(v);
      } catch(e) {}
    }
    if (Object.keys(stored).length > 0) setTweaks(prev => ({ ...prev, ...stored }));
  }, []);
  return [tweaks, setTweak];
}

// ── Panel layout ────────────────────────────────────────────────────────────

function TweaksPanel({ title = 'Tweaks', children }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const go = () => setOpen(true);
    window.addEventListener('keydown', (e) => {
      if (e.key === '`' && e.ctrlKey) go();
      if (e.key === '`' && e.metaKey) go();
    });
  }, []);
  return (
    <div className="tweaks-panel-host">
      {open && (
        <div
          style={{
            position: 'fixed',
            right: 16,
            top: 80,
            width: 280,
            maxHeight: 'calc(100vh - 120px)',
            background: 'var(--paper)',
            color: 'var(--ink)',
            border: '1px solid var(--rule)',
            borderRadius: 8,
            zIndex: 999,
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              padding: '12px 14px',
              borderBottom: '1px solid var(--rule)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 600, fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {title}
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--ink-2)',
                cursor: 'pointer',
                fontSize: 18,
                padding: 0,
                width: 20,
                height: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>
          </div>
          <div style={{ overflow: 'auto', flex: 1, padding: '14px' }}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function TweakSection({ label, children }) {
  return (
    <>
      <div style={{ fontSize: 11, fontWeight: 600, fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--mute)', marginBottom: 8, marginTop: 12 }}>
        {label}
      </div>
      {children}
    </>
  );
}

// ── Section helpers ────────────────────────────────────────────────────────────

function TweakRow({ label, value, children, inline = false }) {
  return (
    <div style={{ marginBottom: inline ? 8 : 12 }}>
      <div style={{ fontSize: 11, display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ color: 'var(--ink-2)' }}>{label}</span>
        {value != null && <span style={{ color: 'var(--mute)' }}>{value}</span>}
      </div>
      {children}
    </div>
  );
}

function TweakSlider({ label, value, min = 0, max = 100, step = 1, unit = '', onChange }) {
  return (
    <TweakRow label={label} value={`${value}${unit}`}>
      <input type="range" min={min} max={max} step={step}
             value={value} onChange={(e) => onChange(Number(e.target.value))} style={{width: '100%'}} />
    </TweakRow>
  );
}

function TweakToggle({ label, value, onChange }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
      <span style={{ fontSize: 11, color: 'var(--ink-2)' }}>{label}</span>
      <button type="button" onClick={() => onChange(!value)}
              style={{
                background: value ? 'var(--accent)' : 'var(--paper-2)',
                border: '1px solid var(--rule)',
                width: 32,
                height: 18,
                borderRadius: 9,
                cursor: 'pointer',
              }} />
    </div>
  );
}

function TweakRadio({ label, value, options, onChange }) {
  const trackRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const valueRef = useRef(value);
  valueRef.current = value;

  const labelLen = (o) => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({ 2: 16, 3: 10 }[options.length] ?? 0);
  if (!fitsAsSegments) {
    const resolve = (s) => {
      const m = options.find((o) => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return <TweakSelect label={label} value={value} options={options}
                        onChange={(s) => onChange(resolve(s))} />;
  }
  const opts = options.map((o) => (typeof o === 'object' ? o : { value: o, label: o }));
  const idx = Math.max(0, opts.findIndex((o) => o.value === value));
  const n = opts.length;

  const segAt = (clientX) => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor(((clientX - r.left - 2) / inner) * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };

  const onPointerDown = (e) => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = (ev) => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  return (
    <TweakRow label={label}>
      <div ref={trackRef} onPointerDown={onPointerDown}
           style={{
             display: 'flex',
             background: 'var(--paper-2)',
             borderRadius: 4,
             height: 28,
             position: 'relative',
             cursor: 'pointer',
           }}>
        <div style={{
          position: 'absolute',
          left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
          width: `calc((100% - 4px) / ${n})`,
          height: 24,
          margin: 2,
          background: 'var(--accent)',
          borderRadius: 2,
          transition: 'all 120ms ease',
        }} />
        {opts.map((o, i) => (
          <button key={o.value} type="button" onClick={() => onChange(o.value)}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    fontSize: 10,
                    fontWeight: 500,
                    color: o.value === value ? 'var(--ink)' : 'var(--ink-2)',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 1,
                  }}>
            {o.label}
          </button>
        ))}
      </div>
    </TweakRow>
  );
}

function TweakSelect({ label, value, options, onChange }) {
  return (
    <TweakRow label={label}>
      <select value={value} onChange={(e) => onChange(e.target.value)}
              style={{
                width: '100%',
                padding: '6px 8px',
                border: '1px solid var(--rule)',
                background: 'var(--paper)',
                color: 'var(--ink)',
                borderRadius: 4,
                fontSize: 11,
              }}>
        {options.map((o) => {
          const v = typeof o === 'object' ? o.value : o;
          const l = typeof o === 'object' ? o.label : o;
          return <option key={v} value={v}>{l}</option>;
        })}
      </select>
    </TweakRow>
  );
}

function TweakText({ label, value, placeholder, onChange }) {
  return (
    <TweakRow label={label}>
      <input type="text" value={value} placeholder={placeholder}
             onChange={(e) => onChange(e.target.value)}
             style={{
               width: '100%',
               padding: '6px 8px',
               border: '1px solid var(--rule)',
               background: 'var(--paper)',
               color: 'var(--ink)',
               borderRadius: 4,
               fontSize: 11,
             }} />
    </TweakRow>
  );
}

function TweakNumber({ label, value, min, max, step = 1, unit = '', onChange }) {
  const clamp = (n) => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = useRef({ x: 0, val: 0 });
  const onScrubStart = (e) => {
    e.preventDefault();
    startRef.current = { x: e.clientX, val: value };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = (ev) => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return (
    <div style={{ marginBottom: 8 }}>
      <span style={{ fontSize: 10, color: 'var(--ink-2)', cursor: 'ew-resize', userSelect: 'none' }} onPointerDown={onScrubStart}>{label}</span>
      <input type="number" value={value} min={min} max={max} step={step}
             onChange={(e) => onChange(clamp(Number(e.target.value)))}
             style={{
               width: '100%',
               padding: '6px 8px',
               border: '1px solid var(--rule)',
               background: 'var(--paper)',
               color: 'var(--ink)',
               borderRadius: 4,
               fontSize: 11,
               marginTop: 4,
             }} />
      {unit && <span style={{ fontSize: 10, color: 'var(--mute)' }}>{unit}</span>}
    </div>
  );
}

function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}

const __TwkCheck = ({ light }) => (
  <svg viewBox="0 0 14 14" style={{width: 10, height: 10}}>
    <path d="M3 7.2 5.8 10 11 4.2" fill="none" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round"
          stroke={light ? 'rgba(0,0,0,.78)' : '#fff'} />
  </svg>
);

function TweakColor({ label, value, options, onChange }) {
  if (!options || !options.length) {
    return (
      <TweakRow label={label}>
        <input type="color" value={value} onChange={(e) => onChange(e.target.value)}
               style={{ width: '100%', height: 32, border: '1px solid var(--rule)', borderRadius: 4, cursor: 'pointer' }} />
      </TweakRow>
    );
  }
  const key = (o) => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return (
    <TweakRow label={label}>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {options.map((o, i) => {
          const colors = Array.isArray(o) ? o : [o];
          const [hero, ...rest] = colors;
          const sup = rest.slice(0, 4);
          const on = key(o) === cur;
          return (
            <button key={i} type="button"
                    onClick={() => onChange(o)}
                    style={{
                      width: 32,
                      height: 32,
                      background: hero,
                      border: on ? `2px solid var(--accent)` : '1px solid rgba(0,0,0,0.2)',
                      borderRadius: 4,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                    title={colors.join(' · ')}
            >
              {on && <__TwkCheck light={__twkIsLight(hero)} />}
            </button>
          );
        })}
      </div>
    </TweakRow>
  );
}

function TweakButton({ label, onClick, secondary = false }) {
  return (
    <button type="button" onClick={onClick}
            style={{
              width: '100%',
              padding: '8px 12px',
              background: secondary ? 'var(--paper-2)' : 'var(--ink)',
              color: secondary ? 'var(--ink)' : 'var(--paper)',
              border: '1px solid var(--rule)',
              borderRadius: 4,
              fontSize: 11,
              fontWeight: 600,
              cursor: 'pointer',
              marginBottom: 8,
            }}>
      {label}
    </button>
  );
}

Object.assign(window, {
  useTweaks, TweaksPanel, TweakSection, TweakRow,
  TweakSlider, TweakToggle, TweakRadio, TweakSelect,
  TweakText, TweakNumber, TweakColor, TweakButton,
});
