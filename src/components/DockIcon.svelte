<script lang="ts">
	import { cn } from '$lib/utils';
	import { Motion, useMotionValue, useSpring, useTransform } from 'svelte-motion';
	import { type Action } from 'svelte/action';

	interface Props {
		magnification?: number;
		distance?: number;
		mouseX?: number;
		class?: string | undefined;
		children?: import('svelte').Snippet;
	}

	let {
		magnification = 60,
		distance = 160,
		mouseX = 0,
		class: className = '',
		children
	}: Props = $props();

	let mint = $state(useMotionValue(mouseX));
	$effect(() => {
		mint.set(mouseX);
	});

	let iconElement: HTMLDivElement | undefined = $state();
	let distanceCalc = useTransform(mint, (val: number) => {
		const bounds = iconElement?.getBoundingClientRect() ?? { x: 0, width: 0 };
		return val - bounds.x - bounds.width / 2;
	});
	let widthSync = useTransform(distanceCalc, [-distance, 0, distance], [38, magnification, 38]);

	let width = useSpring(widthSync, {
		mass: 0.1,
		stiffness: 150,
		damping: 12
	});

	let iconClass = cn(
		'flex flex-auto size-auto aspect-square cursor-pointer items-center justify-center rounded-full',
		className
	);
</script>

<Motion style={{ width: width }}>
	{#snippet children({ motion }: { motion: Action })}
		<div use:motion bind:this={iconElement} class={iconClass}>
			{@render children?.()}
		</div>
	{/snippet}
</Motion>
