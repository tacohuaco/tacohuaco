#!/usr/bin/env node

import fs from 'fs-extra';
import { globSync } from 'glob';
import path from 'node:path';

// Copy mock recipes for tests on CI

console.log('🌮 Writing mock content...');

fs.ensureDirSync('src/content/recipes');

console.log();
console.log('🍕 Writing mock recipes...');

const recipeMocks = globSync('e2e/mocks/recipes/*.json');

for (const file of recipeMocks) {
	console.log('👉', file);
	const filename = path.basename(file);
	fs.copyFileSync(file, `src/content/recipes/${filename}`);
}

console.log();
console.log(`🍆 Done`);
