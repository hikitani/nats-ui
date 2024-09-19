<script>
	import '@styles/app.css';
	import DockMenu from '@components/DockMenu.svelte';
	import DockIcon from '@components/DockIcon.svelte';
	import Tooltip from '@components/Tooltip.svelte';
	import { Home, Settings, ChartBar } from 'lucide-svelte';
	import DarkLightSwitcher from '@components/DarkLightSwitcher.svelte';

	let navs = [
		{ label: 'Home', icon: Home, href: '/' },
		{ label: 'Statistics', icon: ChartBar, href: '/stat' },
		{ label: 'Settings', icon: Settings, href: '/settings' }
	];
</script>

<div id="menu" class="absolute left-0 right-0 z-50 ml-auto mr-auto">
	<DockMenu class="mb-5" direction="middle" let:mouseX let:distance let:magnification>
		{#each navs as item}
			<DockIcon {mouseX} {magnification} {distance}>
				<Tooltip text={item.label} href={item.href}>
					<svelte:component this={item.icon} size={20} strokeWidth={1.2}></svelte:component>
				</Tooltip>
			</DockIcon>
		{/each}
		<DockIcon {mouseX} {magnification} {distance}>
			<DarkLightSwitcher></DarkLightSwitcher>
		</DockIcon>
	</DockMenu>
</div>

<div id="content" class="absolute size-full bg-magnum-100 dark:bg-zinc-500">
	<slot />
</div>
