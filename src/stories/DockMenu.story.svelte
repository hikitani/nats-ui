<script>
	export let Hst;
	import Dock from '@components/DockMenu.svelte';
	import { Home, Pencil } from 'lucide-svelte';
	import DockIcon from '@components/DockIcon.svelte';

	let navs = [
		{ label: 'Home', icon: Home },
		{
			label: 'Blog',
			icon: Pencil
		}
	];
	import Tooltip from '@components/Tooltip.svelte';
</script>

<Hst.Story>
	<Dock direction="middle" let:mouseX let:distance let:magnification>
		{#each navs as item}
			<DockIcon {mouseX} {magnification} {distance}>
				<Tooltip text={item.label}>
					<svelte:component this={item.icon} size={20} strokeWidth={1.2} />
				</Tooltip>
			</DockIcon>
		{/each}
	</Dock>
</Hst.Story>
