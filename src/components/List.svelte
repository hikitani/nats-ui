<script lang="ts">
	import Link from './Link.svelte';

	export let header:
		| undefined
		| {
				title: string;
				link:
					| undefined
					| {
							text: string;
							href: string;
					  };
		  } = undefined;
</script>

<div
	class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md dark:bg-magnum-200"
>
	<div class="p-6">
		<div class="mb-4 flex items-center justify-between">
			{#if header}
				<h5
					class="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased"
				>
					{header.title}
				</h5>
				{#if header.link}
					<Link href={header.link.href}>{header.link.text}</Link>
				{/if}
			{/if}
		</div>

		<!-- Items -->
		<div class="divide-y divide-gray-200 dark:divide-zinc-400">
			<slot />
		</div>
	</div>
</div>
