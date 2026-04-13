const m = "rest-countries";
const u = () => {
  const e = document.createElement("ul");
  return e.setAttribute("role", "status"), e.setAttribute("aria-label", "Loading country data"), e.className = "country-list", e.innerHTML = Array(5).fill(
    `<li class="country-item country-item--skeleton">
        <div class="country-flag country-flag--skeleton"></div>
        <div class="country-details">
          <div class="country-skeleton-line country-skeleton-line--name"></div>
          <div class="country-skeleton-line country-skeleton-line--meta"></div>
        </div>
      </li>`
  ).join(""), e;
}, p = (e) => {
  const n = document.createElement("li");
  n.className = "country-item", n.setAttribute("aria-label", e.name);
  const t = document.createElement("img");
  t.className = "country-flag", t.src = e.flag, t.alt = "Flag of " + e.name, t.onerror = () => {
    t.style.opacity = "0";
  };
  const a = document.createElement("div");
  a.className = "country-details";
  const c = document.createElement("span");
  c.className = "country-name", c.textContent = e.name;
  const o = document.createElement("span");
  return o.className = "country-meta", o.textContent = `${e.capital} · ${e.population.toLocaleString("en-US")} · ${e.region}`, a.appendChild(c), a.appendChild(o), n.appendChild(t), n.appendChild(a), n;
}, C = (e) => {
  var n;
  return {
    name: e.name.common,
    capital: ((n = e.capital) == null ? void 0 : n[0]) ?? "N/A",
    population: e.population,
    flag: e.flags.png,
    region: e.region
  };
}, y = (e, n) => {
  e.innerHTML = "";
  const t = document.createElement("ul");
  t.className = "country-list", n.forEach((a) => t.appendChild(p(a))), e.appendChild(t);
}, E = (e, n) => {
  e.innerHTML = "";
  const t = document.createElement("div");
  t.className = "country-error", t.setAttribute("role", "alert");
  const a = document.createElement("p");
  a.textContent = n, t.appendChild(a), e.appendChild(t);
};
async function g(e) {
  await e.whenReady();
  const n = e.shadowRoot.querySelector("#root");
  let t = !1;
  const a = document.createElement("section");
  a.className = "vanilla-widget-section";
  const c = document.createElement("p");
  c.className = "widget-framework-header", c.textContent = "Vanilla JS";
  const o = document.createElement("div");
  a.appendChild(c), a.appendChild(o), n.appendChild(a);
  const i = e.on("destroy", () => {
    i(), t = !0, n.innerHTML = "";
  });
  o.appendChild(u());
  try {
    const l = await new window.WidgetServiceSDK().connectors.execute({
      permalink: m,
      method: "GET"
    });
    if (t) return;
    const r = l.toSorted((s, d) => d.population - s.population).slice(0, 5).map(C);
    y(o, r);
  } catch (l) {
    if (t) return;
    E(o, l instanceof Error ? l.message : "Failed to load country data.");
  }
}
export {
  g as init
};
