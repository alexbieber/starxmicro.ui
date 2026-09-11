export type ThemeMode = "light" | "dark" | "system";
export type ThemePalette = "star" | "mono" | "sepia" | "azure" | "moss" | "mauve";

export const THEME_PALETTES = ["star", "mono", "sepia", "azure", "moss", "mauve"] as const satisfies readonly ThemePalette[];

export const THEME_PALETTE_LABELS: Record<ThemePalette, string> = {
  star: "Star",
  mono: "Monotone",
  sepia: "Sepia",
  azure: "Azure",
  moss: "Moss",
  mauve: "Mauve",
};

export const THEME_STORAGE_KEY = "starx-theme";
export const LIGHT_PALETTE_STORAGE_KEY = "starx-palette-light";
export const DARK_PALETTE_STORAGE_KEY = "starx-palette-dark";
export const DEFAULT_THEME_PALETTE: ThemePalette = "star";

export function isThemeMode(value: string | null | undefined): value is ThemeMode {
  return value === "light" || value === "dark" || value === "system";
}

export function isThemePalette(value: string | null | undefined): value is ThemePalette {
  return value === "star"
    || value === "mono"
    || value === "sepia"
    || value === "azure"
    || value === "moss"
    || value === "mauve";
}

export function nextThemePalette(palette: ThemePalette): ThemePalette {
  const index = THEME_PALETTES.indexOf(palette);
  return THEME_PALETTES[(index + 1) % THEME_PALETTES.length] ?? "star";
}

export function resolveScheme(mode: ThemeMode, prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches): "light" | "dark" {
  if (mode === "system") return prefersDark ? "dark" : "light";
  return mode;
}

export function applyAppearance(
  mode: ThemeMode,
  lightPalette: ThemePalette,
  darkPalette: ThemePalette,
  prefersDark = typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)").matches : false,
) {
  const root = document.documentElement;
  if (mode === "system") root.removeAttribute("data-theme");
  else root.dataset.theme = mode;

  const scheme = resolveScheme(mode, prefersDark);
  root.dataset.scheme = scheme;
  root.dataset.palette = scheme === "dark" ? darkPalette : lightPalette;
}

export function readStoredTheme(): ThemeMode {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    return isThemeMode(saved) ? saved : "dark";
  } catch {
    return "dark";
  }
}

export function readStoredPalette(key: string): ThemePalette {
  try {
    const saved = localStorage.getItem(key);
    return isThemePalette(saved) ? saved : DEFAULT_THEME_PALETTE;
  } catch {
    return DEFAULT_THEME_PALETTE;
  }
}
