<script lang="ts">
	import { afterNavigate, pushState } from '$app/navigation';
	import type { SendOpions } from '@components/Form.svelte';
	import Form from '@components/Form.svelte';
	import { remove } from './delete.js';

	export let data;

	afterNavigate(async (nav) => {
		await nav.complete;
		if (data.context !== undefined) {
			return;
		}

		pushState('', {
			status: 404,
			message: `Context <b>${data.name}</b> not found`,
			redirect: '/'
		});
	});

	const send: SendOpions = {
		title: 'Yes',
		redirectRef: '/',
		onSend: remove
	};
</script>

<Form
	title="Do you want to delete the context {data.context?.name}"
	close_title="No"
	inputs={[]}
	{send}
></Form>
