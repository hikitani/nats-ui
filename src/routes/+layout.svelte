<script>
	import { run } from 'svelte/legacy';

	import '@styles/app.css';
	import DockMenu from '@components/DockMenu.svelte';
	import DockIcon from '@components/DockIcon.svelte';
	import Tooltip from '@components/Tooltip.svelte';
	import ErrorCard from '@components/ErrorCard.svelte';
	import DarkLightSwitcher from '@components/DarkLightSwitcher.svelte';
	import DotPattern from '@components/DotPattern.svelte';
	import Button from '@components/Button.svelte';
	import { Home, Settings, ChartBar } from 'lucide-svelte';
	import { isDark } from '$lib/dark';
	import { tweened } from 'svelte/motion';
	import { page } from '$app/stores';
	import { replaceState } from '$app/navigation';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();

	let navs = [
		{ label: 'Home', icon: Home, href: '/' },
		{ label: 'Statistics', icon: ChartBar, href: '/stat' },
		{ label: 'Settings', icon: Settings, href: '/settings' }
	];

	let isDarkMode = $state(isDark());
	let dotPos = tweened(15);
	run(() => {
		if (isDarkMode) {
			dotPos.set(17);
		} else {
			dotPos.set(12);
		}
	});
</script>

<div class=" bg-magnum-100 dark:bg-zinc-500">
	<div id="menu" class="sticky top-0 z-50 ml-auto mr-auto mt-0 pb-5 pt-5">
		<DockMenu direction="middle"   >
			{#snippet children({ mouseX, distance, magnification })}
						{#each navs as item}
					<DockIcon {mouseX} {magnification} {distance}>
						<Tooltip text={item.label} href={item.href}>
							<item.icon size={20} strokeWidth={1.2}></item.icon>
						</Tooltip>
					</DockIcon>
				{/each}
				<DockIcon {mouseX} {magnification} {distance}>
					<DarkLightSwitcher bind:isDarkMode></DarkLightSwitcher>
				</DockIcon>
								{/snippet}
				</DockMenu>
	</div>

	<div id="content" class="content flex justify-center">
		<div>
			{#if isDarkMode}
				<DotPattern
					width={30}
					height={30}
					x={3}
					y={5}
					cx={$dotPos}
					cy={$dotPos}
					fillColor="#f9c978"
				/>
			{:else}
				<DotPattern
					width={30}
					height={30}
					x={3}
					y={5}
					cx={$dotPos}
					cy={$dotPos}
					fillColor="#bd5711"
				/>
			{/if}
		</div>

		{#if $page.state.status === 500 || Math.floor(($page.state.status || 0) / 100) === 4}
			<div class="relative flex min-h-screen items-center justify-center">
				<ErrorCard status={$page.state.status} title="App Error" description={$page.state.message}>
					<div class="pt-5">
						<Button
							onClick={() => {
								if ($page.state.redirect) {
									document.location = $page.state.redirect;
								} else {
									replaceState('', {});
								}
							}}>Go back</Button
						>
					</div>
				</ErrorCard>
			</div>
		{:else}
			<div class="flex items-center justify-center">
				{@render children?.()}
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	.content {
		min-height: calc(100vh - 98px);
	}
</style>
