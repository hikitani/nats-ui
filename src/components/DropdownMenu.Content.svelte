<script>
	import { DropdownMenu } from 'bits-ui';
	import { flyAndScale } from '$lib/utils';
</script>

<DropdownMenu.Content transition={flyAndScale} sideOffset={8}>
	<div class="menu"><slot /></div>
</DropdownMenu.Content>

<style lang="postcss">
	.menu {
		@apply z-40 flex max-h-[300px] min-w-[220px] flex-col shadow-lg;
		@apply rounded-lg bg-white p-1 shadow-neutral-900/30 lg:max-h-none;
		@apply ring-0 !important;
		@apply dark:bg-magnum-300;
		@apply border dark:border-none;
	}
</style>
