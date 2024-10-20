import { Table } from '@tables/utils';

export class ContextServer extends Table {
	private _name: string = '';
	private _server: string = '';

	get name() {
		return this._name;
	}

	get server() {
		return this._server;
	}

	setName(v: string) {
		const problems = [];
		if (!v) {
			problems.push('Required');
		}

		if (!v.match(/^[\w-]+$/)) {
			problems.push('Allowed only a-z A-Z and symbols -_');
		}

		if (problems.length) {
			return problems;
		}

		this._name = v;
		return [];
	}

	setServer(v: string) {
		const problems = [];

		try {
			const url = new URL(v);
			const urlPathAndQuery = url.pathname + url.search + url.hash;

			if (!['', '/'].includes(urlPathAndQuery)) {
				problems.push(`Specify only url origin without url path, query (got ${urlPathAndQuery})`);
			}

			if (!['http:', 'https:'].includes(url.protocol)) {
				problems.push(`Allowed only protocol http or https, not ${url.protocol}`);
			}
		} catch (e) {
			if (e instanceof TypeError) {
				problems.push('Server must be valid URL');
				return problems;
			}
			throw e;
		}

		if (problems.length) {
			return problems;
		}

		this._server = v;
		return [];
	}
}
