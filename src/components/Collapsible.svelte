<script lang="ts">
	import '@styles/app.css';
	import { Accordion } from 'bits-ui';
	import { ChevronDown } from 'svelte-codicons';
	import { slide } from 'svelte/transition';
	import BorderBeam from '@effects/BorderBeam.svelte';

	const items = [
		{
			title: 'What is the meaning of life?',
			content:
				'To become a better person, to help others, and to leave the world a better place than you found it.'
		},
		{
			title: 'How do I become a better person?',
			content: 'Read books, listen to podcasts, and surround yourself with people who inspire you.'
		},
		{
			title: 'What is the best way to help others?',
			content: 'Give them your time, attention, and love.'
		}
	];
</script>

<Accordion.Root
	class="bg-background relative flex w-full max-w-xl flex-col justify-between rounded-3xl border border-gray-700/70 p-7 dark:border-gray-200 "
	multiple
>
	<BorderBeam />
	{#each items as item, i}
		<Accordion.Item value="${i}" class="border-dark-10 group border-b px-1.5">
			<Accordion.Header>
				<Accordion.Trigger
					class="flex w-full flex-1 items-center justify-between py-5 text-[15px] font-medium transition-all dark:text-white [&[data-state=open]>span>svg]:rotate-180 "
				>
					{item.title}
					<span
						class="hover:bg-dark-10 inline-flex size-8 items-center justify-center rounded-[7px] bg-transparent transition-all"
					>
						<ChevronDown class="size-[18px] transition-all duration-200" />
					</span>
				</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content
				transition={slide}
				transitionConfig={{ duration: 200 }}
				class="pb-[25px] text-sm tracking-[-0.01em] dark:text-white"
			>
				{item.content}
			</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
