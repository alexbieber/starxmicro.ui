import { STATIC_ROUTE_PATHS } from "../routes.js";

type UpgradeLinkProps = {
  compact?: boolean;
  onInstall: () => void;
};

export function UpgradeLink({ compact = false, onInstall }: UpgradeLinkProps) {
  return (
    <a
      className={`account-signin${compact ? " account-signin-compact" : ""}`}
      href={STATIC_ROUTE_PATHS.installation}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        onInstall();
      }}
    >
      <span>Install</span>
    </a>
  );
}
