import { PACKAGE_NAME } from "../brand";

type RightRailPromosProps = {
  onInstall: () => void;
};

export function RightRailPromos({ onInstall }: RightRailPromosProps) {
  return (
    <div className="rail-promos">
      <button className="pro-promo card" type="button" onClick={onInstall}>
        <span className="rail-section-label">Get started</span>
        <strong>Add {PACKAGE_NAME} to a React app.</strong>
        <span className="pro-promo-link">
          <span className="pro-promo-divider" aria-hidden="true">|</span>
          npm install {PACKAGE_NAME}
        </span>
      </button>
    </div>
  );
}
