import { pushState } from '$app/navigation';
import { db } from '@db';

export const remove = async (data: any) => {
	try {
		await db.transaction('rw', db.contexts, async () => {
			const name = data.context?.name || '';
			await db.contexts.where('name').equals(name).delete();
		});
	} catch (err) {
		pushState('', {
			status: 500,
			message: `Failed to delete context. Error: ${err}`
		});
	}
};
