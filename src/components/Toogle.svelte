<script lang="ts">
	import { Toggle } from 'bits-ui';

	export let onPressedChange: ((checked: boolean) => void) | undefined = undefined;
	export let pressed = false;
</script>

<Toggle.Root bind:pressed {onPressedChange} class="items-center justify-center rounded-[9px]">
	<slot />
</Toggle.Root>
