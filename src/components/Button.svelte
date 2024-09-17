<script lang="ts">
	import '@styles/app.css';
	import { Button } from 'bits-ui';
</script>

<Button.Root
	class="relative rounded bg-magnum-300 px-4 py-2 font-bold text-black hover:bg-magnum-600 hover:text-white active:bg-magnum-800"
>
	<slot />
</Button.Root>
