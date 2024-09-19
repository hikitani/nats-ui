<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import { EllipsisVertical } from 'lucide-svelte';
</script>

<DropdownMenu.Trigger>
	<div class="trigger">
		<EllipsisVertical />
	</div>
</DropdownMenu.Trigger>

<style lang="postcss">
	.trigger {
		@apply inline-flex h-9 w-9 items-center justify-center rounded-full bg-magnum-200 shadow-lg dark:bg-white;
		@apply border-white/30 text-zinc-500 transition-colors hover:bg-magnum-600 hover:text-zinc-100 dark:text-magnum-600;
		@apply data-[highlighted]:ring-magnum-400 data-[highlighted]:ring-offset-2 !important;
		@apply p-0 text-sm font-medium data-[highlighted]:outline-none;
	}
</style>
