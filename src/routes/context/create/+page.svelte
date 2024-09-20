<script lang="ts">
	import { InputType } from '@components/Input.svelte';
	import Form, { type InputInfo } from '@components/Form.svelte';

	let context: {
		name: string;
		server: string;
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
			label: 'Server',
			text: {
				placeholder: 'nats://example.com:4222'
			}
		}
	];
</script>

<div class="flex min-h-screen items-center justify-center">
	<Form title="New Context" {inputs} bind:data={context} send_title="Create" />
</div>
