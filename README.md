# StarX UI

Open-source Three.js components, interactive shaders, and copy-ready React renderers.

This is a personal fork of [ThreeUI Community](https://github.com/MengTo/threeui) by Meng To / DesignCode. The catalog, live previews, and Community source remain. Accounts, Pro upsell, sponsorship, and analytics are removed.

## Run locally

```bash
npm install
npm run dev
```

The catalog starts at `http://localhost:5173`.

Full checks:

```bash
npm run build
```

## Use the React package

```bash
npm install starx-ui
```

```tsx
import { AtTheHorizon } from "starx-ui";
import "starx-ui/style.css";

export function Hero() {
  return <AtTheHorizon />;
}
```

For a smaller import graph:

```tsx
import { AtTheHorizon } from "starx-ui/components/AtTheHorizon";
```

## What’s included

- 50 Community parent components
- Live previews, variants, and controls
- Complete Community implementation source
- No login, checkout, or Pro catalog

## License

Application code, Community component code, and ThreeUI-authored Community imagery are MIT licensed. Copyright for the original work remains with Meng To. Bundled fonts stay under the SIL Open Font License 1.1. See `LICENSE`, `ASSET-LICENSES.md`, `FONT-LICENSES.md`, and `THIRD_PARTY_NOTICES.md`.
