<script>
	import Button from '@components/Button.svelte';
	let { Hst } = $props();
</script>

<Hst.Story>
	<Hst.Variant title="default">
		<Button>Hello</Button>
	</Hst.Variant>

	<Hst.Variant title="red">
		<Button red={true}>Hello</Button>
	</Hst.Variant>
</Hst.Story>
