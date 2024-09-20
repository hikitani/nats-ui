<script lang="ts">
	import { Label } from 'bits-ui';

	export let props: {
		id?: string;
		for: string;
	};
</script>

<Label.Root {...props} class="-mb-0.5 font-medium text-magnum-900">
	<slot />
</Label.Root>
