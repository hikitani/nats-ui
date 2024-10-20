<script lang="ts">
	import { InputType } from '@components/Input.svelte';
	import Form, { type InputInfo, type SendOpions } from '@components/Form.svelte';
	import { create } from './create';

	let send: SendOpions = {
		title: 'Create',
		redirectRef: '/',
		onSend: create
	};

	let inputs: InputInfo[] = [
		{
			id: 'name',
			type: InputType.Text,
			label: 'Name',
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

<Form title="New Context" {inputs} {send} />
