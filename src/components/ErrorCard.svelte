<script lang="ts">
	interface Props {
		status?: number;
		title?: string;
		description?: string;
		children?: import('svelte').Snippet;
	}

	let {
		status = 500,
		title = 'Error',
		description = 'Whoops, something went wrong.',
		children
	}: Props = $props();
</script>

<div class="card">
	<p class="status">{status}</p>
	<p class="title">{title}</p>
	<p class="description">{@html description}</p>
	{@render children?.()}
</div>

<style lang="postcss">
	.card {
		@apply flex flex-col items-center justify-center rounded-lg border border-gray-200 px-4 py-8 shadow-2xl md:px-8 lg:px-24;
		@apply bg-white;
		@apply dark:bg-magnum-200;
	}

	.status {
		@apply text-6xl font-bold tracking-wider md:text-7xl lg:text-9xl;
		@apply text-zinc-400;
		@apply dark:text-magnum-700;
	}

	.title {
		@apply mt-4 text-2xl font-bold tracking-wider md:text-3xl lg:text-5xl;
		@apply text-zinc-600;
		@apply dark:text-magnum-500;
	}

	.description {
		@apply mt-8 border-y-2 py-2 text-center text-gray-500;
		@apply dark:text-gray-400;
		@apply border-gray-200 dark:border-magnum-300 dark:text-zinc-700;
		@apply text-lg md:text-xl lg:text-2xl;
	}
</style>
