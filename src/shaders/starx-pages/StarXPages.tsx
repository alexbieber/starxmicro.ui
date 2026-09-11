import { useState, type CSSProperties } from "react";

const FRAME_SANDBOX = "allow-scripts";

export type StarXPageProps = {
  className?: string;
  style?: CSSProperties;
};

function StarXPageFrame({
  className = "",
  style,
  title,
  sourceUrl,
  label,
  background,
}: StarXPageProps & { title: string; sourceUrl: string; label: string; background: string }) {
  const [ready, setReady] = useState(false);

  return (
    <div
      className={`threeui-background starx-page-frame${className ? ` ${className}` : ""}`}
      aria-label={label}
      data-state={ready ? "ready" : "loading"}
      style={{
        position: "relative",
        overflow: "hidden",
        background,
        pointerEvents: "auto",
        ...style,
      }}
    >
      <iframe
        title={title}
        src={sourceUrl}
        sandbox={FRAME_SANDBOX}
        allow="autoplay"
        loading="eager"
        onLoad={() => setReady(true)}
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
          width: "100%",
          height: "100%",
          border: 0,
          background,
        }}
      />
    </div>
  );
}

export function AuroraAtelier(props: StarXPageProps) {
  return (
    <StarXPageFrame
      {...props}
      title="Aurora Atelier — Work that glows after midnight"
      sourceUrl="/starx-pages/aurora-atelier.html"
      label="Aurora Atelier landing page"
      background="#071018"
    />
  );
}

export function MeridianObservatory(props: StarXPageProps) {
  return (
    <StarXPageFrame
      {...props}
      title="Meridian Observatory — A night instrument for the northern sky"
      sourceUrl="/starx-pages/meridian-observatory.html"
      label="Meridian Observatory hero"
      background="#07080c"
    />
  );
}

export function LumenChoir(props: StarXPageProps) {
  return (
    <StarXPageFrame
      {...props}
      title="Lumen Choir — Letters that bloom as light"
      sourceUrl="/starx-pages/lumen-choir.html"
      label="Lumen Choir typography study"
      background="#050506"
    />
  );
}

export function GlassOrchard(props: StarXPageProps) {
  return (
    <StarXPageFrame
      {...props}
      title="Glass Orchard — A harvest of interfaces"
      sourceUrl="/starx-pages/glass-orchard.html"
      label="Glass Orchard section"
      background="#1a1014"
    />
  );
}
