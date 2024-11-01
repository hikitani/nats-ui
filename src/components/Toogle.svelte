<script lang="ts">
	import { Toggle } from 'bits-ui';

	interface Props {
		onPressedChange?: ((checked: boolean) => void) | undefined;
		pressed?: boolean;
		children?: import('svelte').Snippet;
	}

	let { onPressedChange = undefined, pressed = $bindable(false), children }: Props = $props();
</script>

<Toggle.Root bind:pressed {onPressedChange} class="items-center justify-center rounded-[9px]">
	{@render children?.()}
</Toggle.Root>
