export function BrandMark({ compact = false }: { compact?: boolean }) {
  const maskId = compact ? "starx-mark-compact" : "starx-mark";

  return (
    <span className={compact ? "topbar-brand" : "logo"}>
      <span className="brand-symbol">
        <svg className="brand-mark" viewBox="0 0 512 512" aria-hidden="true">
          <defs>
            <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">
              <rect width="512" height="512" fill="#000" />
              <circle cx="256" cy="256" r="208" fill="#fff" />
              <path
                fill="#000"
                d="M256 96l28 132 132 28-132 28-28 132-28-132-132-28 132-28z"
              />
            </mask>
          </defs>
          <rect width="512" height="512" fill="currentColor" mask={`url(#${maskId})`} />
        </svg>
      </span>
      <span className="brand-wordmark">StarX</span>
    </span>
  );
}
