<script>
	export let Hst;
	import Input from '@components/Input.svelte';
	import Label from '@components/Label.svelte';

	let text = 'Hello world';
</script>

<Hst.Story>
	<div class="flex min-h-screen flex-col items-start justify-center p-5">
		<Label props={{ for: 'input-1' }}>{text}</Label>
		<Input id="input-1" bind:value={text} />
	</div>
</Hst.Story>
