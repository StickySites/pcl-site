#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");

const binDir = path.join(__dirname, "..", "node_modules", ".bin");
const target = path.join("..", "..", "scripts", "opennextjs-cloudflare.cjs");
const linkPath = path.join(binDir, "opennextjs-cloudflare");

if (!fs.existsSync(binDir)) {
  process.exit(0);
}

try {
  fs.rmSync(linkPath, { force: true });
  fs.symlinkSync(target, linkPath);
  // Windows-friendly cmd shim is unnecessary on CF Linux builders
  console.log("Linked opennextjs-cloudflare wrapper for Workers Builds deploy");
} catch (err) {
  console.warn("Could not link opennextjs-cloudflare wrapper:", err.message);
}
