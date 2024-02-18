import fs from 'fs-extra';
import { globSync } from 'glob';

// Copy mock recipes and shops for tests on CI

console.log('🌮 Writing mock content...');

fs.ensureDirSync('src/content/recipes');

console.log('🍕 Writing mock recipes...');

const recipeMocks = globSync('e2e/mocks/recipes/*.json');

recipeMocks.forEach((file) => {
	console.log('👉', file);
	fs.copyFileSync(file, `src/content/recipes/${file}`);
});

console.log();
console.log('🌭 Writing mock shops...');

fs.ensureDirSync('src/data');

fs.copyFileSync(`e2e/mocks/data/shops.json`, `src/data/shops.json`);

console.log();
console.log(`🍆 Done`);
