<script>
	export let Hst;
	import '@styles/app.css';
	import Tooltip from '@components/Tooltip.svelte';
	import { House } from 'lucide-svelte';
</script>

<Hst.Story>
	<div class="flex flex-col p-20">
		<Tooltip text="Lorem ipsum">
			<House class="dark size-5" />
		</Tooltip>
	</div>
</Hst.Story>
