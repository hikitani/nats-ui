<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
	<div class="flex grow items-center gap-x-3">
		<div class="flex grow items-center gap-x-3">
			{@render children?.()}
		</div>
	</div>
</div>
