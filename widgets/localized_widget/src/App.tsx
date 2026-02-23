import { resolveLocale, getStrings } from "./translations";

const ACCENT = "#6366f1";

function Badge({ children }: { children: string }) {
  return (
    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", background: ACCENT, color: "#fff", padding: "3px 8px", borderRadius: 6, marginLeft: "auto" }}>
      {children}
    </span>
  );
}

function Step({ n, text }: { n: number; text: string }) {
  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
      <span style={{ width: 28, height: 28, borderRadius: "50%", background: ACCENT, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
        {n}
      </span>
      <span style={{ fontSize: 15, lineHeight: 1.55, paddingTop: 3 }}>{text}</span>
    </li>
  );
}

export function App() {
  const locale = resolveLocale();
  const strings = getStrings(locale);

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", padding: 24, color: "#1e293b" }}>
      <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 1px 3px rgba(0,0,0,.08), 0 4px 14px rgba(0,0,0,.04)", padding: 32, maxWidth: 640 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>🌐</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>{strings.title}</h2>
          <Badge>{locale}</Badge>
        </div>
        <p style={{ fontSize: 15, lineHeight: 1.65, marginBottom: 24, opacity: 0.85, marginTop: 0 }}>{strings.body}</p>
        <ol style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 12 }}>
          <Step n={1} text={strings.step1} />
          <Step n={2} text={strings.step2} />
          <Step n={3} text={strings.step3} />
        </ol>
        <a href="#" style={{ display: "inline-flex", background: ACCENT, color: "#fff", fontSize: 14, fontWeight: 600, padding: "10px 20px", borderRadius: 8, textDecoration: "none" }}>{strings.cta}</a>
        <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(0,0,0,.06)", fontSize: 12, opacity: 0.5 }}>{strings.footer}</div>
      </div>
    </div>
  );
}
