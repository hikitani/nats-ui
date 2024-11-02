<script lang="ts">
	import { Label } from 'bits-ui';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		props: {
			id?: string;
			for: string;
		};
		className?: string | undefined;
		children?: Snippet<[]>;
	}

	let { props, className = '', children }: Props = $props();
</script>

<Label.Root {...props} class={cn('-mb-0.5 font-medium text-magnum-900', className)}>
	{@render children?.()}
</Label.Root>
