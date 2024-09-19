<script>
	export let Hst;
	import List from '@components/List.svelte';
	import ListElement from '@components/ListElement.svelte';
	import { CircleCheckBig } from 'lucide-svelte';

	let header = {
		title: 'List',
		link: {
			text: 'Create',
			href: '#'
		}
	};
</script>

<Hst.Story>
	<div class="flex min-h-screen items-center justify-center">
		<div class="mx-auto max-w-[720px]">
			<List {header}>
				<ListElement>
					<CircleCheckBig class="relative h-9 w-9 text-green-600"></CircleCheckBig>
					<div>
						<h6
							class="text-blue-gray-900 block font-sans text-base font-semibold leading-relaxed tracking-normal antialiased"
						>
							Tania Andrew
						</h6>
						<p class="block font-sans text-sm font-light leading-normal text-gray-700 antialiased">
							tania@gmail.com
						</p>
					</div>
				</ListElement>
			</List>
		</div>
	</div>
</Hst.Story>
