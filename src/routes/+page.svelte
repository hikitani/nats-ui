<script>
	import List from '@components/List.svelte';
	import ListElement from '@components/ListElement.svelte';
	import { DropdownMenu } from 'bits-ui';
	import DropdownMenuTrigger from '@components/DropdownMenu.Trigger.svelte';
	import DropdownMenuContent from '@components/DropdownMenu.Content.svelte';
	import DropdownMenuItem from '@components/DropdownMenu.Item.svelte';
	import DropdownMenuSeparator from '@components/DropdownMenu.Separator.svelte';

	let header = {
		title: 'Server Contexts',
		link: {
			text: 'Create context',
			href: '/context/create'
		}
	};

	export let data;
</script>

<div class="flex min-h-screen items-center justify-center">
	<List {header}>
		{#each data.contexts as context}
			<ListElement>
				<!-- {#if context.selected}
					<Check class="grow-0 text-green-700"></Check>
				{:else}
					<Check class="grow-0 text-white/0"></Check>
				{/if} -->
				<div class="grow-0">
					<h6
						class="block font-sans text-base font-semibold leading-relaxed tracking-normal antialiased"
					>
						{context.name}
					</h6>
					<p class="block font-sans text-sm font-light leading-normal text-gray-700 antialiased">
						{context.server}
					</p>
				</div>
				<div class="flex grow flex-row-reverse">
					<DropdownMenu.Root>
						<DropdownMenuTrigger />
						<DropdownMenuContent>
							<DropdownMenuItem>
								<a href="/context/{context.name}/edit" class="text-cyan-600 dark:text-green-800"
									>Edit</a
								>
							</DropdownMenuItem>

							<DropdownMenuSeparator />

							<DropdownMenuItem
								><a href="/context/{context.name}/stream/list">Streams</a></DropdownMenuItem
							>
							<DropdownMenuItem><a href="/context/{context.name}/info">Info</a></DropdownMenuItem>

							<DropdownMenuSeparator />

							<DropdownMenuItem>
								<a href="/context/{context.name}/delete" class="text-red-600">Remove</a>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu.Root>
					<!-- <Link href="context/{context.name}/edit"><EllipsisVertical /></Link> -->
				</div>
			</ListElement>
		{:else}
			<ListElement>
				<div class="grow flex justify-center">
					<h6 class="font-sans text-base font-semibold leading-relaxed tracking-normal antialiased">
						Empty list
					</h6>
				</div>
			</ListElement>
		{/each}
	</List>
</div>
