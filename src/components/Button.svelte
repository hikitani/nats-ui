<script lang="ts">
	import { Button } from 'bits-ui';
	import { twJoin } from 'tailwind-merge';

	export let red: boolean = false;

	const btnCommon = 'relative rounded px-4 py-2 font-bold text-black';
	const btnPrimary = 'bg-magnum-300 hover:bg-magnum-600 hover:text-white active:bg-magnum-800';
	const btnRed = 'bg-rose-300 hover:bg-rose-600 hover:text-white active:bg-rose-800';

	export let href: string = '';
	export let goback: boolean = false;

	const gobackHandler = (event: MouseEvent) => window.history.back();
</script>

<Button.Root
	on:click={goback ? gobackHandler : null}
	href={goback ? '' : href}
	class={twJoin(btnCommon, red ? btnRed : btnPrimary)}
>
	<slot />
</Button.Root>
