<script lang="ts" context="module">
	export type InputInfo = {
		id: string;
		type: InputType;
		label: string;
		label_inline?: boolean;

		text?: TextOptions;
		number?: NumberOptions;
		email?: EmailOptions;
		password?: PasswordOptions;
	};

	export type Data = { [key: string]: any };
</script>

<script lang="ts">
	import Button from './Button.svelte';
	import Input, {
		type EmailOptions,
		type NumberOptions,
		type PasswordOptions,
		type TextOptions
	} from './Input.svelte';
	import { InputType } from './Input.svelte';
	import Label from './Label.svelte';

	export let title: string;
	export let send_title: string = 'Send';
	export let close_title: string = 'Close';
	export let inputs: InputInfo[];
	export let data: Data = {};
</script>

<div
	class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md dark:bg-magnum-200"
>
	<div class="p-6">
		<div class="mb-4 flex items-center justify-between">
			<h5
				class="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased"
			>
				{title}
			</h5>
		</div>

		<!-- Inputs -->
		<div class="flex flex-col">
			{#each inputs as item (item.id)}
				<div class="flex py-1 {item.label_inline ? 'flex-row items-center py-2' : 'flex-col'}">
					<div class={item.label_inline ? 'pr-4' : ''}>
						<Label props={{ for: item.id }}>{item.label}</Label>
					</div>
					<Input
						type={item.type}
						text={item.text}
						email={item.email}
						number={item.number}
						password={item.password}
						bind:value={data[item.id]}
					/>
				</div>
			{/each}
			<div class="flex flex-row pt-10">
				<Button red>{close_title}</Button>
				<span class="grow"></span>
				<Button>{send_title}</Button>
			</div>
		</div>
	</div>
</div>
