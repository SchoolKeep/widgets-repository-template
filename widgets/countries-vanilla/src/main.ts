import type { Country, RawCountry, WidgetSDK } from "./types";
import { CONNECTOR_PERMALINK, HEADER_PROP, TOP_COUNTRIES_COUNT } from "./constants";

const createSkeleton = (): HTMLElement => {
  const list = document.createElement("ul");
  list.setAttribute("role", "status");
  list.setAttribute("aria-label", "Loading country data");
  list.className = "country-list";
  list.innerHTML = Array(TOP_COUNTRIES_COUNT)
    .fill(
      `<li class="country-item country-item--skeleton">
        <div class="country-flag country-flag--skeleton"></div>
        <div class="country-details">
          <div class="country-skeleton-line country-skeleton-line--name"></div>
          <div class="country-skeleton-line country-skeleton-line--meta"></div>
        </div>
      </li>`
    )
    .join("");
  return list;
};

const createCard = (country: Country): HTMLElement => {
  const item = document.createElement("li");
  item.className = "country-item";
  item.setAttribute("aria-label", country.name);

  const img = document.createElement("img");
  img.className = "country-flag";
  img.src = country.flag;
  img.alt = "Flag of " + country.name;
  img.onerror = () => (img.style.opacity = "0");

  const details = document.createElement("div");
  details.className = "country-details";

  const name = document.createElement("span");
  name.className = "country-name";
  name.textContent = country.name;

  const meta = document.createElement("span");
  meta.className = "country-meta";
  meta.textContent = `${country.capital} · ${country.population.toLocaleString("en-US")} · ${country.region}`;

  details.appendChild(name);
  details.appendChild(meta);
  item.appendChild(img);
  item.appendChild(details);

  return item;
};

const mapRawToCountry = (raw: RawCountry): Country => ({
  name: raw.name.common,
  capital: raw.capital?.[0] ?? "N/A",
  population: raw.population,
  flag: raw.flags.png,
  region: raw.region,
});

const renderList = (root: Element, countries: Country[]) => {
  root.innerHTML = "";
  const list = document.createElement("ul");
  list.className = "country-list";
  countries.forEach((c) => list.appendChild(createCard(c)));
  root.appendChild(list);
};

const renderError = (root: Element, message: string) => {
  root.innerHTML = "";
  const errorDiv = document.createElement("div");
  errorDiv.className = "country-error";
  errorDiv.setAttribute("role", "alert");
  const msg = document.createElement("p");
  msg.textContent = message;
  errorDiv.appendChild(msg);
  root.appendChild(errorDiv);
};

const extractHeader = (sdk: WidgetSDK): string => {
  const v = sdk.getProps()[HEADER_PROP];
  return typeof v === "string" && v.trim() ? v : "Vanilla JS";
};

export async function init(sdk: WidgetSDK) {
  await sdk.whenReady();

  const root = sdk.shadowRoot.querySelector("#root")!;
  let cancelled = false;

  const section = document.createElement("section");
  section.className = "vanilla-widget-section";

  const header = document.createElement("p");
  header.className = "widget-framework-header";
  header.textContent = extractHeader(sdk);

  const contentDiv = document.createElement("div");

  section.appendChild(header);
  section.appendChild(contentDiv);
  root.appendChild(section);

  const offProps = sdk.on("propsChanged", () => (header.textContent = extractHeader(sdk)));
  const off = sdk.on("destroy", () => {
    off();
    offProps();
    cancelled = true;
    root.innerHTML = "";
  });

  contentDiv.appendChild(createSkeleton());

  try {
    const raw = await new window.WidgetServiceSDK().connectors.execute({
      permalink: CONNECTOR_PERMALINK,
      method: "GET",
    });

    if (cancelled) return;

    const countries = raw
      .toSorted((a, b) => b.population - a.population)
      .slice(0, TOP_COUNTRIES_COUNT)
      .map(mapRawToCountry);

    renderList(contentDiv, countries);
  } catch (err) {
    if (cancelled) return;
    renderError(contentDiv, err instanceof Error ? err.message : "Failed to load country data.");
  }
}
