const u = "rest-countries";
const C = "header", g = () => {
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
}, y = (e) => {
  const t = document.createElement("li");
  t.className = "country-item", t.setAttribute("aria-label", e.name);
  const n = document.createElement("img");
  n.className = "country-flag", n.src = e.flag, n.alt = "Flag of " + e.name, n.onerror = () => n.style.opacity = "0";
  const a = document.createElement("div");
  a.className = "country-details";
  const o = document.createElement("span");
  o.className = "country-name", o.textContent = e.name;
  const c = document.createElement("span");
  return c.className = "country-meta", c.textContent = `${e.capital} · ${e.population.toLocaleString("en-US")} · ${e.region}`, a.appendChild(o), a.appendChild(c), t.appendChild(n), t.appendChild(a), t;
}, E = (e) => {
  var t;
  return {
    name: e.name.common,
    capital: ((t = e.capital) == null ? void 0 : t[0]) ?? "N/A",
    population: e.population,
    flag: e.flags.png,
    region: e.region
  };
}, h = (e, t) => {
  e.innerHTML = "";
  const n = document.createElement("ul");
  n.className = "country-list", t.forEach((a) => n.appendChild(y(a))), e.appendChild(n);
}, f = (e, t) => {
  e.innerHTML = "";
  const n = document.createElement("div");
  n.className = "country-error", n.setAttribute("role", "alert");
  const a = document.createElement("p");
  a.textContent = t, n.appendChild(a), e.appendChild(n);
}, l = (e) => {
  const t = e.getProps()[C];
  return typeof t == "string" && t.trim() ? t : "Vanilla JS";
};
async function N(e) {
  await e.whenReady();
  const t = e.shadowRoot.querySelector("#root");
  let n = !1;
  const a = document.createElement("section");
  a.className = "vanilla-widget-section";
  const o = document.createElement("p");
  o.className = "widget-framework-header", o.textContent = l(e);
  const c = document.createElement("div");
  a.appendChild(o), a.appendChild(c), t.appendChild(a);
  const i = e.on("propsChanged", () => o.textContent = l(e)), s = e.on("destroy", () => {
    s(), i(), n = !0, t.innerHTML = "";
  });
  c.appendChild(g());
  try {
    const r = await new window.WidgetServiceSDK().connectors.execute({
      permalink: u,
      method: "GET"
    });
    if (n) return;
    const d = r.toSorted((m, p) => p.population - m.population).slice(0, 5).map(E);
    h(c, d);
  } catch (r) {
    if (n) return;
    f(c, r instanceof Error ? r.message : "Failed to load country data.");
  }
}
export {
  N as init
};
