<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { cva, type VariantProps } from 'class-variance-authority';
	import { cn } from '$lib/utils';

	interface DockProps extends VariantProps<typeof dockVariants> {
		className?: string;
		magnification?: number;
		distance?: number;
		direction?: 'top' | 'middle' | 'bottom';
	}

	interface Props {
		class?: DockProps['className'];
		magnification?: DockProps['magnification'];
		distance?: DockProps['distance'];
		direction?: DockProps['direction'];
		children?: import('svelte').Snippet<[any]>;
	}

	let {
		class: className = undefined,
		magnification = 60,
		distance = 140,
		direction = 'middle',
		children
	}: Props = $props();

	const dockVariants = cva(
		'shadow-xl dark:bg-zinc-700/50 mx-auto w-max h-[58px] p-2 flex gap-2 rounded-2xl border backdrop-blur-sm bg-white/30 border-white/30'
	);

	let dockElement: HTMLDivElement | undefined = $state();
	let mouseX = $state(Infinity);
	function handleMouseMove(e: MouseEvent) {
		mouseX = e.pageX;
	}

	function handleMouseLeave() {
		mouseX = Infinity;
	}

	let dockClass = cn(dockVariants({ className }), {
		'items-start': direction === 'top',
		'items-center': direction === 'middle',
		'items-end': direction === 'bottom'
	});
</script>

<Motion let:motion>
	<div
		role="menuitem"
		tabindex="-1"
		use:motion
		bind:this={dockElement}
		onmousemove={(e) => handleMouseMove(e)}
		onmouseleave={handleMouseLeave}
		class={dockClass}
	>
		{#if children}
			{@render children({ mouseX, magnification, distance })}
		{:else}
			<!-- Your Content -->
			Default
		{/if}
	</div>
</Motion>
