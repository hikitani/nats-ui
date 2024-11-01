<script>
	import Input from '@components/Input.svelte';
	let { Hst } = $props();

	let text = $state('');
</script>

<Hst.Story>
	<div class="flex min-h-screen items-center justify-center p-5">
		<label for="input-1">{text}</label>
		<Input id="input-1" bind:value={text} />
	</div>
</Hst.Story>
