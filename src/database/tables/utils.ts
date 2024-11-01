export class Table {
	private __is_table: void = undefined;

	/**
	 * Returns a JSON representation of the object where field is getter.
	 */
	json() {
		return fieldsToJson(this);
	}
}

export const castTable = <T extends Table & Object>(
	entity: any,
	table: { new (): T }
): T | undefined => {
	if (typeof entity !== 'object') {
		return undefined;
	}

	const t = new table();

	for (const key of Object.keys(entity)) {
		if (!t.hasOwnProperty(key)) {
			return undefined;
		}
	}

	return entity as T;
};

const fieldsToJson = <T extends Object>(v: T): T => {
	const getters = Object.entries(Object.getOwnPropertyDescriptors((v as any).__proto__))
		.filter(([key, descriptor]) => typeof descriptor.get === 'function')
		.map(([key, descriptor]) => {
			return {
				key: key,
				get: descriptor.get
			};
		});

	const obj: any = {};

	getters.forEach((item) => {
		if (item.get === undefined) {
			return;
		}

		obj[item.key] = (item.get as any).call(v);
	});

	return obj as T;
};
