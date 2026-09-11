import { BRAND_NAME, PACKAGE_NAME, SOURCE_CREDIT } from "../brand";
import { TocIcon } from "./icons";
import { RightRailPromos } from "./RightRailPromos";

type AboutDocumentationProps = {
  onBrowse: () => void;
  onInstallation: () => void;
};

const ABOUT_TOC = [
  { id: "what", label: "What this is" },
  { id: "use", label: "How to use it" },
  { id: "credit", label: "Source credit" },
] as const;

export function AboutDocumentation({ onBrowse, onInstallation }: AboutDocumentationProps) {
  return (
    <div className="pane-inner">
      <main className="doc" id="doc">
        <div className="crumb">StarX UI</div>
        <h1>About</h1>
        <p className="lede">
          {BRAND_NAME} is a local, login-free catalog of interactive Three.js and WebGL components.
          Browse live previews, copy source, and drop renderers into a React app.
        </p>
        <div className="tagrow">
          <span className="tag">{PACKAGE_NAME}</span>
          <span className="tag">MIT</span>
        </div>
        <div className="divider" />

        <h2 id="what">What this is</h2>
        <p>
          This is a personal fork of the open-source ThreeUI Community catalog. The Pro upsell,
          accounts, and remote installer are gone. The Community components, variants, and live
          renderers stay intact.
        </p>
        <p>
          Use it as a design library: search, open a component, tweak controls, then copy the
          React import or the full source from the Code tab.
        </p>

        <h2 id="use">How to use it</h2>
        <p>
          Run <span className="mono-chip">npm run dev</span> for the catalog, or install{" "}
          <span className="mono-chip">{PACKAGE_NAME}</span> and import a renderer with the shared
          stylesheet. Every component page lists the exact import name and peer requirements.
        </p>

        <h2 id="credit">Source credit</h2>
        <p>{SOURCE_CREDIT}</p>
        <p>
          Application code and Community component source remain MIT licensed. Bundled fonts and
          Three.js runtimes keep their original licenses. This fork is not affiliated with
          DesignCode or threeui.com.
        </p>

        <nav className="pager" aria-label="About pagination">
          <button className="card next" type="button" onClick={onBrowse}>
            <span className="k">Browse</span><span className="v">Component catalog</span>
          </button>
          <button className="card next" type="button" onClick={onInstallation}>
            <span className="k">Next</span><span className="v">Installation</span>
          </button>
        </nav>
      </main>

      <aside className="rail">
        <RightRailPromos onInstall={onInstallation} />
        <div className="toc-head"><TocIcon />On this page</div>
        <nav className="toc" aria-label="On this page">
          {ABOUT_TOC.map((item, index) => (
            <div className={`toc-item${index === 0 ? " on" : ""}`} key={item.id}>
              <span className="rl" /><span className="dot" />
              <a href={`#${item.id}`}>{item.label}</a>
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
}
