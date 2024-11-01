<script>
	import ErrorCard from '@components/ErrorCard.svelte';
	let { Hst } = $props();
</script>

<Hst.Story>
	<div class="flex h-screen w-full items-center justify-center bg-gray-200 px-16 md:px-0">
		<ErrorCard />
	</div>
</Hst.Story>
