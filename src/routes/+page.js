import { db } from '@db';

export const ssr = false;

export async function load() {
	return {
		contexts: await db.contexts.toArray()
	};
}
