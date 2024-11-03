import { Problems } from '@components/Form.svelte';
import { db } from '@db';
import { ContextServer } from '@tables/context';

const edit = async (data: any) => {
	const context = new ContextServer();

	let problems = new Problems()
		.adds('name', context.setName(data.name))
		.adds('server', context.setServer(data.server));

	if (problems.notEmpty()) {
		return problems;
	}

	const updated = await db.contexts.update(context.name, context.json());
	if (updated !== 1) {
		return problems.add('name', { message: `This context not found` });
	}
};

export default edit;
