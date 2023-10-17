import { test, expect } from 'vitest';
import { mapTools } from '../mapTools';

test('map tools', () => {
	const tools = `
- mixer
- blender or drill`;
	expect(mapTools(tools)).toMatchInlineSnapshot(`
		[
		  "mixer",
		  "blender or drill",
		]
	`);
});
