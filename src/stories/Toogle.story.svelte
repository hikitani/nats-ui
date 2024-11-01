<script>
	import Toogle from '@components/Toogle.svelte';
	import { Sun } from 'lucide-svelte';
	let { Hst } = $props();
</script>

<Hst.Story>
	<Toogle><Sun></Sun></Toogle>
</Hst.Story>
