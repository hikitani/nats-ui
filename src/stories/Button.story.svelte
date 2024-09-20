<script>
	export let Hst;
	import Button from '@components/Button.svelte';
</script>

<Hst.Story>
	<Hst.Variant title="default">
		<Button>Hello</Button>
	</Hst.Variant>

	<Hst.Variant title="red">
		<Button red={true}>Hello</Button>
	</Hst.Variant>
</Hst.Story>
