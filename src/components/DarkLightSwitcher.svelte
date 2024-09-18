<script>
	import { isDark, toogleDarkMode, toogleLightMode } from '$lib/dark';
	import Toogle from '@components/Toogle.svelte';
	import { Sun, Moon } from 'lucide-svelte';

	let isDarkMode = isDark();
	$: if (isDarkMode) {
		toogleDarkMode();
	} else {
		toogleLightMode();
	}

	let pressed = false;
	const onPressedChange = () => {
		isDarkMode = pressed;
	};
</script>

<Toogle bind:pressed {onPressedChange}>
	{#if isDarkMode}
		<Moon></Moon>
	{:else}
		<Sun></Sun>
	{/if}
</Toogle>
