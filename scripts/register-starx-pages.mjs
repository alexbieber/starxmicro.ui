import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function fileRecord(path, code, role = "component") {
  return {
    path,
    language: path.split(".").pop(),
    role,
    bytes: Buffer.byteLength(code),
    lines: code.split("\n").length,
    sha256: createHash("sha256").update(code).digest("hex"),
    code,
  };
}

const pages = [
  { id: "aurora-atelier", exportName: "AuroraAtelier", html: "public/starx-pages/aurora-atelier.html", runtime: "Full HTML + DOM/CSS + Canvas 2D" },
  { id: "meridian-observatory", exportName: "MeridianObservatory", html: "public/starx-pages/meridian-observatory.html", runtime: "Full HTML + DOM/CSS + Canvas 2D" },
  { id: "lumen-choir", exportName: "LumenChoir", html: "public/starx-pages/lumen-choir.html", runtime: "Full HTML + Canvas 2D" },
  { id: "glass-orchard", exportName: "GlassOrchard", html: "public/starx-pages/glass-orchard.html", runtime: "Full HTML + DOM/CSS" },
];

const wrapper = await readFile(resolve(root, "src/shaders/starx-pages/StarXPages.tsx"), "utf8");
const registry = JSON.parse(await readFile(resolve(root, "public/source-code.json"), "utf8"));
const report = JSON.parse(await readFile(resolve(root, "public/community-sync-report.json"), "utf8"));

for (const page of pages) {
  if (!registry.readyIds.includes(page.id)) registry.readyIds.push(page.id);
  registry.components = registry.components.filter((component) => component.id !== page.id);
  const html = await readFile(resolve(root, page.html), "utf8");
  registry.components.push({
    id: page.id,
    exportName: page.exportName,
    sourceCommit: "local",
    runtime: page.runtime,
    sharedFilePaths: ["src/shaders/community.css"],
    files: [
      fileRecord("src/shaders/starx-pages/StarXPages.tsx", wrapper),
      fileRecord(page.html, html, "canonical-source"),
    ],
    assets: [],
  });
  report.components = report.components.filter((component) => component.id !== page.id);
  report.components.push({
    id: page.id,
    variantIds: [],
    controlKeys: [],
    variantControlKeys: {},
  });
}

report.communityParents = 47;
report.communityRoutes = 108;
registry.generatedAt = new Date().toISOString();
report.generatedAt = registry.generatedAt;

await writeFile(resolve(root, "public/source-code.json"), `${JSON.stringify(registry)}\n`);
await writeFile(resolve(root, "public/community-sync-report.json"), `${JSON.stringify(report, null, 2)}\n`);
console.log("Registered 4 StarX original pages in source-code.json and community-sync-report.json");
