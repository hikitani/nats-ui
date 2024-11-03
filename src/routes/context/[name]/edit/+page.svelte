<script lang="ts">
	import { InputType } from '@components/Input.svelte';
	import Form, { type InputInfo, type SendOpions } from '@components/Form.svelte';
	import edit from './edit.js';
	import { afterNavigate, pushState } from '$app/navigation';

	let { data } = $props();

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

	let send: SendOpions = {
		title: 'Edit',
		redirectRef: '/',
		onSend: async (inputData) => {
			if (inputData.name !== data.name) {
				pushState('', {
					status: 404,
					message: `Trying to change context name <b>${data.name}</b> to <b>${inputData.name}</b>`,
					redirect: '/'
				});
			}

			return await edit(inputData);
		}
	};

	let inputs: InputInfo[] = [
		{
			id: 'name',
			type: InputType.Text,
			label: 'Name',
			disabled: true,
			text: {
				placeholder: 'Nats-Server-1'
			}
		},
		{
			id: 'server',
			type: InputType.Text,
			label: 'Server URL',
			text: {
				placeholder: 'https://example.com:8222'
			}
		}
	];
</script>

<Form title="New Context" data={data.context} {inputs} {send} />
