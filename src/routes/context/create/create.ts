import { Problems } from '@components/Form.svelte';
import { db } from '@db';
import { ContextServer } from '@tables/context';

const create = async (data: any) => {
	const context = new ContextServer();

	let problems = new Problems()
		.adds('name', context.setName(data.name))
		.adds('server', context.setServer(data.server));

	if (problems.notEmpty()) {
		return problems;
	}

	try {
		await db.contexts.add(context.json());
	} catch (e) {
		return problems.add('name', { message: 'This name already exists' });
	}
};

export default create;
