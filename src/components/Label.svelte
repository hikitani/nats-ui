<script lang="ts">
	import { Label } from 'bits-ui';
	import { cn } from '$lib/utils';

	export let props: {
		id?: string;
		for: string;
	};
	export let className: string | undefined = '';
</script>

<Label.Root {...props} class={cn('-mb-0.5 font-medium text-magnum-900', className)}>
	<slot />
</Label.Root>
