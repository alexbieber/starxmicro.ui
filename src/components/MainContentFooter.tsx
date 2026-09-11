import type { MouseEvent, ReactNode } from "react";
import { BrandMark } from "./BrandMark";
import { SOURCE_CREDIT } from "../brand";
import { browseCategoryRoutePath, STATIC_ROUTE_PATHS } from "../routes.js";

type MainContentFooterProps = {
  onNavigate: (path: string) => void;
};

type FooterLinkProps = {
  children: ReactNode;
  href: string;
  onNavigate: (path: string) => void;
};

const PRODUCT_LINKS = [
  { href: STATIC_ROUTE_PATHS.browse, label: "Browse" },
  { href: STATIC_ROUTE_PATHS.installation, label: "Installation" },
  { href: STATIC_ROUTE_PATHS.about, label: "About" },
] as const;

const EXPLORE_LINKS = [
  { href: browseCategoryRoutePath("Three.js"), label: "Three.js Components" },
  { href: browseCategoryRoutePath("Landing Pages"), label: "Landing Page Templates" },
  { href: browseCategoryRoutePath("Hero"), label: "Hero Sections" },
  { href: browseCategoryRoutePath("Backgrounds"), label: "WebGL Backgrounds" },
] as const;

function FooterLink({ children, href, onNavigate }: FooterLinkProps) {
  const follow = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate(href);
  };

  return <a href={href} onClick={follow}>{children}</a>;
}

export function MainContentFooter({ onNavigate }: MainContentFooterProps) {
  return (
    <footer className="main-content-footer" data-main-content-footer aria-label="StarX UI footer">
      <div className="main-content-footer__grid">
        <div className="main-content-footer__identity">
          <FooterLink href={STATIC_ROUTE_PATHS.browse} onNavigate={onNavigate}>
            <span className="main-content-footer__brand" aria-label="StarX UI">
              <BrandMark />
            </span>
          </FooterLink>
          <p>Open-source Three.js components, templates, and shaders for interactive websites.</p>
          <p>{SOURCE_CREDIT}</p>
        </div>

        <nav className="main-content-footer__nav" aria-label="Product">
          <h2>Product</h2>
          {PRODUCT_LINKS.map((link) => (
            <FooterLink href={link.href} onNavigate={onNavigate} key={link.href}>{link.label}</FooterLink>
          ))}
        </nav>

        <nav className="main-content-footer__nav" aria-label="Explore">
          <h2>Explore</h2>
          {EXPLORE_LINKS.map((link) => (
            <FooterLink href={link.href} onNavigate={onNavigate} key={link.href}>{link.label}</FooterLink>
          ))}
        </nav>
      </div>

      <div className="main-content-footer__meta">
        <span>© {new Date().getFullYear()} StarX UI</span>
        <span>Three.js · WebGL · GLSL</span>
      </div>
    </footer>
  );
}
