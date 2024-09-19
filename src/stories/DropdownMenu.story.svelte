<script>
	export let Hst;
	import DropdownMenuTrigger from '@components/DropdownMenu.Trigger.svelte';
	import DropdownMenuContent from '@components/DropdownMenu.Content.svelte';
	import DropdownMenuItem from '@components/DropdownMenu.Item.svelte';
	import DropdownMenuSeparator from '@components/DropdownMenu.Separator.svelte';
	import { DropdownMenu } from 'bits-ui';
</script>

<Hst.Story>
	<DropdownMenu.Root>
		<DropdownMenuTrigger />
		<DropdownMenuContent>
			<DropdownMenuItem>buz</DropdownMenuItem>
			<DropdownMenuItem>foo</DropdownMenuItem>
			<DropdownMenuSeparator />
			<DropdownMenuItem checked={true}>bar</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu.Root>
</Hst.Story>
