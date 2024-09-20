<script lang="ts">
	export let Hst;
	import Form, { type InputInfo, type Data } from '@components/Form.svelte';
	import { InputType } from '@components/Input.svelte';

	let inputs: InputInfo[] = [
		{
			id: 'name',
			type: InputType.Text,
			label: 'Name',
			text: {
				placeholder: 'e.g. John'
			}
		},
		{
			id: 'has_name',
			type: InputType.Checkbox,
			label: 'Has Name',
			label_inline: true
		},
		{
			id: 'email',
			type: InputType.Email,
			label: 'Email'
		},
		{
			id: 'age',
			type: InputType.Number,
			label: 'Age',
			number: {
				max: 6,
				min: 4,
				placeholder: 'Your age'
			}
		},
		{
			id: 'password',
			type: InputType.Password,
			label: 'Your password'
		}
	];

	let data: Data = {
		name: 'fsf'
	};

	$: json_data = JSON.stringify(data as any, null, 2);
</script>

<Hst.Story>
	<div class="flex min-h-screen items-center justify-center">
		<p style="white-space: pre-line">{json_data}</p>
		<Form title="Foo Form 1111" {inputs} bind:data />
	</div>
</Hst.Story>
