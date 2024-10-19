import { castTable } from '@tables/utils';
import { db } from '@db';
import { pushState } from '$app/navigation';
import { ContextServer } from '@tables/context';
import { Problems } from '@components/Form.svelte';

export const create = async (data: any) => {
	const context = castTable(data, ContextServer);
	if (!context) {
		pushState('', {
			status: 500,
			message: 'Cannot create context, try again'
		});
		return;
	}

	let problems = new Problems();

	if (context.name === '') {
		problems.add('name', { message: 'Required' });
	}

	if (context.server === '') {
		problems.add('server', { message: 'Required' });
	}

	if (!context.name.match(/^[\w-]+$/)) {
		problems.add('name', { message: 'Allowed only a-z A-Z and symbols -_' });
	}

	try {
		let url = new URL(context.server);
		const urlPathAndQuery = url.pathname + url.search + url.hash;
		if (!['', '/'].includes(urlPathAndQuery)) {
			problems.add('server', {
				message: `Specify only url origin without url path, query (got ${urlPathAndQuery})`
			});
		}

		if (!['http:', 'https:'].includes(url.protocol)) {
			problems.add('server', {
				message: `Allowed only protocol http or https, not ${url.protocol}`
			});
		}
	} catch (TypeError) {
		problems.add('server', { message: 'Server must be valid URL' });
	}

	if (problems.notEmpty()) {
		return problems;
	}

	try {
		await db.contexts.add(context);
	} catch {
		problems.add('name', { message: 'This name already exists' });
		return problems;
	}
};
