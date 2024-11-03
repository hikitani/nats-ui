<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import { Check } from 'lucide-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		checked?: boolean;
		children?: Snippet<[]>;
	}

	let { checked = false, children }: Props = $props();
</script>

<DropdownMenu.Item
	class="relative flex h-5 min-h-[24px] select-none items-center justify-stretch rounded-md py-1 pl-6 pr-1 text-sm font-medium outline-none data-[highlighted]:bg-magnum-200"
>
	{#if checked}
		<div><Check class="size-4" strokeWidth="3" /></div>
	{/if}

	<div style="" class="growchild grow">
		{@render children?.()}
	</div>

	<style>
		.growchild > * {
			display: block;
			padding: inherit;
		}
	</style>
</DropdownMenu.Item>
