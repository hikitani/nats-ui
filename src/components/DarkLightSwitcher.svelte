<script>
	import { isDark, toogleDarkMode } from '$lib/dark';
	import Toogle from '@components/Toogle.svelte';
	import { Sun, Moon } from 'lucide-svelte';

	let { isDarkMode = $bindable(isDark()) } = $props();

	const onPressedChange = () => {
		isDarkMode = toogleDarkMode();
	};
</script>

<div class="flex size-fit items-center rounded-full bg-zinc-800/20 p-2 hover:bg-zinc-800/40">
	<Toogle {onPressedChange}>
		{#if isDarkMode}
			<Moon class="text-magnum-300"></Moon>
		{:else}
			<Sun class="text-zinc-700"></Sun>
		{/if}
	</Toogle>
</div>
