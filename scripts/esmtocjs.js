const { dirname } = require('path');
const { readFile, writeFile } = require('fs/promises');
const glob = require('tiny-glob');
const { build } = require('esbuild');

const readJson = async (filepath) => {
	const file = (await readFile(filepath)).toString();
	try {
		return JSON.parse(file);
	} catch (err) {
		console.error(`🙈 Cannot parse JSON file: ${filepath}`);
		return {};
	}
};

async function transpileNodeModules() {
	const allPackages = await glob(`node_modules/**/package.json`);
	await allPackages.forEach(async (packageJson) => {
		try {
			const json = await readJson(packageJson);
			if (!json.name || json.type !== 'module') {
				return;
			}

			console.log(`🦀 Transpiling ${json.name}...`);

			const dir = dirname(packageJson);

			const entryPoints = (await glob(`${dir}/**/*.js`)).filter(
				(d) => !d.startsWith(`${dir}/node_modules/`)
			);

			if (entryPoints.length === 0) {
				return;
			}

			try {
				await build({
					entryPoints,
					outdir: dir,
					allowOverwrite: true,
					bundle: false,
					minify: false,
					sourcemap: false,
					logLevel: 'info',
					platform: 'node',
					format: 'cjs',
					target: 'node18',
				});
			} catch (err) {
				console.error(`🙈 Cannot compile ${json.name}: ${err.message}`);
				return;
			}

			await writeFile(
				packageJson,
				JSON.stringify({ ...json, type: 'commonjs' }, null, 2)
			);
		} catch (err) {
			console.error(
				`🙈 Someting went wrong with ${packageJson}: ${err.message}`
			);
		}
	});
}

transpileNodeModules();
