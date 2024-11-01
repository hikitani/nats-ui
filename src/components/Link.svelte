<script lang="ts">
	interface Props {
		href: string;
		children?: import('svelte').Snippet;
	}

	let { href, children }: Props = $props();
</script>

<a
	{href}
	class="block font-sans text-sm font-bold leading-normal text-blue-500 antialiased dark:text-red-500"
>
	{@render children?.()}
</a>
