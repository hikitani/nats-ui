<script lang="ts">
	import { InputType } from '@components/Input.svelte';
	import Form, { Problems, type InputInfo, type SendOpions } from '@components/Form.svelte';
	import { ContextServer } from '@tables/context';
	import { castTable } from '@tables/utils';
	import { db } from '@db';
	import { pushState } from '$app/navigation';

	let send: SendOpions = {
		title: 'Create',
		redirectRef: '/',
		async onSend(data) {
			const context = castTable(data, ContextServer);
			if (!context) {
				pushState('', {
					status: 500,
					message: 'Cannot create context, try again'
				});
				return;
			}

			let problems = new Problems();

			if (context.name === '') {
				problems.add('name', { message: 'Required' });
			}

			if (context.server === '') {
				problems.add('server', { message: 'Required' });
			}

			if (!context.name.match(/^[\w-]+$/)) {
				problems.add('name', { message: 'Allowed only a-z A-Z and symbols -_' });
			}

			try {
				let url = new URL(context.server);
				const urlPathAndQuery = url.pathname + url.search + url.hash;
				if (!['', '/'].includes(urlPathAndQuery)) {
					problems.add('server', {
						message: `Specify only url origin without url path, query (got ${urlPathAndQuery})`
					});
				}

				if (!['http:', 'https:'].includes(url.protocol)) {
					problems.add('server', {
						message: `Allowed only protocol http or https, not ${url.protocol}`
					});
				}
			} catch (TypeError) {
				problems.add('server', { message: 'Server must be valid URL' });
			}

			if (problems.notEmpty()) {
				return problems;
			}

			try {
				await db.contexts.add(context);
			} catch {
				problems.add('name', { message: 'This name already exists' });
				return problems;
			}
		}
	};

	let inputs: InputInfo[] = [
		{
			id: 'name',
			type: InputType.Text,
			label: 'Name',
			text: {
				placeholder: 'Nats-Server-1'
			}
		},
		{
			id: 'server',
			type: InputType.Text,
			label: 'Server URL',
			text: {
				placeholder: 'https://example.com:8222'
			}
		}
	];
</script>

<div class="flex min-h-screen items-center justify-center">
	<Form title="New Context" {inputs} {send} />
</div>
