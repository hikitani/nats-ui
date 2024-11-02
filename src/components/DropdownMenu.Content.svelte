<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import { flyAndScale } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet<[]>;
	}

	let { children }: Props = $props();
</script>

<DropdownMenu.Content transition={flyAndScale} sideOffset={8}>
	<div class="menu">{@render children?.()}</div>
</DropdownMenu.Content>

<style lang="postcss">
	.menu {
		@apply flex max-h-[300px] min-w-[220px] flex-col shadow-lg;
		@apply rounded-lg bg-white p-1 shadow-neutral-900/30 lg:max-h-none;
		@apply ring-0 !important;
		@apply dark:bg-magnum-300;
		@apply border dark:border-none;
	}
</style>
