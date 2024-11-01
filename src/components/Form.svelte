<script lang="ts" module>
	export type InputInfo = {
		id: string;
		type: InputTypeSymbol;
		label: string;
		label_inline?: boolean;
		disabled?: boolean;

		text?: TextOptions;
		number?: NumberOptions;
		email?: EmailOptions;
		password?: PasswordOptions;
	};

	export type SendOpions = {
		title?: string;
		redirectRef?: string;
		onSend: (data: Data) => Promise<Problems | void>;
	};

	export type Data = { [id: string]: any };

	export type Problem = {
		message: string;
	};

	export class Problems {
		private problems: {
			[id: string]: Problem[];
		};

		constructor() {
			this.problems = {};
		}

		add(inputID: string, problem: Problem): Problems {
			if (!(inputID in this.problems)) {
				this.problems[inputID] = [];
			}

			this.problems[inputID].push(problem);
			return this;
		}

		adds(inputID: string, problems: string[]): Problems {
			problems.forEach((v) => {
				this.add(inputID, { message: v });
			});

			return this;
		}

		get(inputID: string): Problem[] {
			return this.problems[inputID];
		}

		notEmpty(): boolean {
			return Object.keys(this.problems).length !== 0;
		}
	}
</script>

<script lang="ts">
	import { makeid } from '$lib/utils';
	import Button from './Button.svelte';
	import Input, {
		type EmailOptions,
		type InputTypeSymbol,
		type NumberOptions,
		type PasswordOptions,
		type TextOptions
	} from './Input.svelte';
	import Label from './Label.svelte';

	const defaultSend: SendOpions = {
		title: 'Send',
		onSend: async () => {}
	};
	const defaultCloseTitle = 'Close';

	interface Props {
		title: string;
		close_title?: string;
		inputs: InputInfo[];
		data?: Data;
		send: SendOpions;
	}

	let {
		title,
		close_title = defaultCloseTitle,
		inputs,
		data = $bindable({}),
		send = $bindable()
	}: Props = $props();
	send = { ...defaultSend, ...send };

	const formId = makeid(6);

	// const validateData
	const onClick = async (event: MouseEvent) => {
		const problems = await send.onSend(data);
		if (problems && Object.keys(problems).length !== 0) {
			currentProblems = problems;
		} else if (send.redirectRef) {
			document.location = send.redirectRef;
		}
	};

	let currentProblems = $state(new Problems());
</script>

<form
	onsubmit={(e) => {
		e.preventDefault();
	}}
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
				{@const inputId = `${formId}-input-${item.id}`}
				<div class="flex py-1 {item.label_inline ? 'flex-row items-center py-2' : 'flex-col'}">
					<div class={item.label_inline ? 'pr-4' : ''}>
						<Label props={{ for: inputId }}>{item.label}</Label>
					</div>
					<Input
						id={inputId}
						type={item.type}
						disabled={item.disabled}
						text={item.text}
						email={item.email}
						number={item.number}
						password={item.password}
						bind:value={data[item.id]}
					/>
					{#if currentProblems.get(item.id)}
						{@const problems = currentProblems.get(item.id)}
						<ul
							class="flex list-outside list-disc flex-col gap-y-0 pl-4 text-left font-mono text-sm leading-4 tracking-tight"
						>
							{#each problems as problem}
								<li class="text-zinc-700">
									<Label className="text-rose-600 font-semibold" props={{ for: inputId }}
										>{problem.message}</Label
									>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			{/each}
			<div class="flex flex-row pt-10">
				<Button red goback>{close_title}</Button>
				<span class="grow"></span>
				<Button {onClick}>{send.title}</Button>
			</div>
		</div>
	</div>
</form>
