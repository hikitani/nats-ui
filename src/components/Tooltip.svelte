<script lang="ts">
	import '@styles/app.css';
	import { Tooltip } from 'bits-ui';
	import { flyAndScale } from '@/lib/utils';

	export let text = '';
</script>

<Tooltip.Root openDelay={0}>
	<Tooltip.Trigger
		class="inline-flex size-fit items-center justify-center rounded-full bg-magnum-300 p-2 hover:bg-magnum-600 hover:text-white active:bg-magnum-800"
	>
		<slot />
	</Tooltip.Trigger>
	<Tooltip.Content
		transition={flyAndScale}
		transitionConfig={{ y: 8, duration: 150 }}
		sideOffset={8}
	>
		<div
			class="flex items-center justify-center rounded-lg border border-white/30 bg-white/30 p-3 text-sm font-medium shadow-xl outline-none backdrop-blur-sm dark:bg-zinc-700/80 dark:text-white"
		>
			{text}
		</div>
	</Tooltip.Content>
</Tooltip.Root>
