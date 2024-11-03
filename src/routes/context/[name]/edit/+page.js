import { db } from '@db';

export const ssr = false;

export async function load({ params }) {
	return {
		name: params.name,
		context: await db.contexts.get(params.name)
	};
}
