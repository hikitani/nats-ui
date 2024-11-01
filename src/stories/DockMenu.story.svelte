<script>
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
	let { Hst } = $props();
</script>

<Hst.Story>
	<Dock direction="middle"   >
		{#snippet children({ mouseX, distance, magnification })}
				{#each navs as item}
				<DockIcon {mouseX} {magnification} {distance}>
					<Tooltip text={item.label}>
						<item.icon size={20} strokeWidth={1.2} />
					</Tooltip>
				</DockIcon>
			{/each}
					{/snippet}
		</Dock>
</Hst.Story>
