<script lang="ts">
	import { Tooltip } from 'bits-ui';
	import { cn, flyAndScale } from '$lib/utils';

	export let text = '';
	export let href: string | undefined = undefined;

	const buttonClasses = cn(
		'inline-flex items-center justify-center rounded-full bg-magnum-300 p-3 hover:bg-magnum-600 hover:text-white active:bg-magnum-800'
	);
</script>

<Tooltip.Root openDelay={0}>
	<Tooltip.Trigger asChild let:builder>
		{#if href}
			<a {href} use:builder.action {...builder} class={buttonClasses}><slot /></a>
		{:else}
			<button use:builder.action {...builder} class={buttonClasses}><slot /></button>
		{/if}
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
