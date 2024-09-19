<script>
	import { DropdownMenu } from 'bits-ui';
	import { Check } from 'lucide-svelte';

	export let checked = false;
</script>

<DropdownMenu.Item
	class="relative flex h-5 min-h-[24px] select-none items-center rounded-md py-1 pl-6 pr-1 text-sm font-medium outline-none data-[highlighted]:bg-magnum-200"
>
	{#if checked}
		<div class="check"><Check class="size-4" strokeWidth="3" /></div>
	{/if}
	<slot />
</DropdownMenu.Item>

<style lang="postcss">
	.item {
		@apply relative h-6 min-h-[24px] select-none rounded-sm pl-6 pr-1;
		@apply z-40 text-magnum-900 outline-none;
		@apply data-[highlighted]:bg-magnum-200 data-[highlighted]:text-magnum-900;
		@apply data-[disabled]:text-neutral-300;
		@apply flex items-center text-sm leading-none;
		@apply ring-0 !important;
	}

	.check {
		@apply absolute left-1.5 top-1/2 text-magnum-700 dark:text-zinc-800;
		translate: 0 calc(-50% + 1px);
	}
</style>
