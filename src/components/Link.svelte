<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	class="block font-sans text-sm font-bold leading-normal text-blue-500 antialiased dark:text-red-500"
>
	<slot />
</a>
