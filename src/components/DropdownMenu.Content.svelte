<script>
	import { DropdownMenu } from 'bits-ui';
	import { flyAndScale } from '$lib/utils';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
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
