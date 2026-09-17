#!/usr/bin/env node
/**
 * Wrapper so Cloudflare Workers Builds can keep using `npx wrangler deploy`.
 * Wrangler detects OpenNext and runs `opennextjs-cloudflare deploy` without a
 * prior build; this shim runs `build` first when the command is deploy/upload/preview.
 */
const { spawnSync } = require("node:child_process");
const path = require("node:path");
const fs = require("node:fs");

const realCli = path.join(
	__dirname,
	"..",
	"node_modules",
	"@opennextjs",
	"cloudflare",
	"dist",
	"cli",
	"index.js"
);

if (!fs.existsSync(realCli)) {
	console.error(
		`Could not find @opennextjs/cloudflare CLI at ${realCli}. Run npm install.`
	);
	process.exit(1);
}

const args = process.argv.slice(2);
const command = args[0];
const needsBuildFirst = command === "deploy" || command === "upload" || command === "preview";

function run(nodeArgs) {
	const result = spawnSync(process.execPath, nodeArgs, {
		stdio: "inherit",
		env: process.env,
	});
	if (result.error) {
		console.error(result.error);
		process.exit(1);
	}
	process.exit(result.status ?? 1);
}

if (needsBuildFirst) {
	const build = spawnSync(process.execPath, [realCli, "build"], {
		stdio: "inherit",
		env: process.env,
	});
	if (build.error) {
		console.error(build.error);
		process.exit(1);
	}
	if (build.status !== 0) {
		process.exit(build.status ?? 1);
	}
}

run([realCli, ...args]);
