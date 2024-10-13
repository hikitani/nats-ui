<script lang="ts" context="module">
	export enum InputType {
		Checkbox,
		Email,
		Number,
		Password,
		Text
	}

	export type NumberOptions = {
		min?: number;
		max?: number;
		placeholder?: string;
	};

	export type TextOptions = {
		maxlength?: number;
		minlength?: number;
		pattern?: string;
		placeholder?: string;
	};

	export type EmailOptions = {
		maxlength?: number;
		minlength?: number;
		pattern?: string;
		placeholder?: string;
	};

	export type PasswordOptions = {
		maxlength?: number;
		minlength?: number;
		pattern?: string;
		placeholder?: string;
	};
</script>

<script lang="ts">
	export let value: any = '';
	export let id: string = '';
	export let type: InputType = InputType.Text;
	export let disabled: boolean = false;

	export let number: NumberOptions = {};
	export let text: TextOptions = {};
	export let email: EmailOptions = {};
	export let password: PasswordOptions = {};
</script>

{#if type === InputType.Text}
	<input
		type="text"
		class="input"
		maxlength={text.maxlength}
		minlength={text.minlength}
		pattern={text.pattern}
		placeholder={text.placeholder}
		{id}
		{disabled}
		bind:value
	/>
{/if}

{#if type === InputType.Email}
	<input
		type="email"
		class="input"
		maxlength={email.maxlength}
		minlength={email.minlength}
		pattern={email.pattern}
		placeholder={email.placeholder}
		{id}
		{disabled}
		bind:value
	/>
{/if}

{#if type === InputType.Password}
	<input
		type="password"
		class="input"
		maxlength={password.maxlength}
		minlength={password.minlength}
		pattern={password.pattern}
		placeholder={password.placeholder}
		{id}
		{disabled}
		bind:value
	/>
{/if}

{#if type === InputType.Number}
	<input
		type="number"
		class="input"
		placeholder={number.placeholder}
		min={number.min}
		max={number.max}
		{id}
		{disabled}
		bind:value
	/>
{/if}

{#if type === InputType.Checkbox}
	<input type="checkbox" class="input size-fit" {id} {disabled} bind:checked={value} />
{/if}

<style lang="postcss">
	.input {
		@apply rounded-md border-2 border-magnum-400 bg-white px-3 py-2 font-normal text-zinc-800;
		@apply hover:border-magnum-300;
		@apply focus:outline-none focus:ring-2 focus:ring-gray-600/80 focus:ring-offset-2;
	}
</style>
