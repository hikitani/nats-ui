<script lang="ts">
	import { Button } from 'bits-ui';
	import { twJoin } from 'tailwind-merge';

	export let href: string = '';

	/** If true, the button will call history.back() when clicked */
	export let goback: boolean = false;
	export let onClick: undefined | ((event: MouseEvent) => void) = undefined;
	export let red: boolean = false;

	const btnCommon = 'relative rounded px-4 py-2 font-bold text-black';
	const btnPrimary = 'bg-magnum-300 hover:bg-magnum-600 hover:text-white active:bg-magnum-800';
	const btnRed = 'bg-rose-300 hover:bg-rose-600 hover:text-white active:bg-rose-800';

	const clickHandler = (event: MouseEvent) => {
		if (onClick) {
			onClick(event);
		}

		if (goback) {
			window.history.back();
		}
	};
</script>

{#if goback}
	<Button.Root
		type="button"
		on:click={clickHandler}
		class={twJoin(btnCommon, red ? btnRed : btnPrimary)}
	>
		<slot />
	</Button.Root>
{:else}
	<Button.Root on:click={clickHandler} {href} class={twJoin(btnCommon, red ? btnRed : btnPrimary)}>
		<slot />
	</Button.Root>
{/if}
