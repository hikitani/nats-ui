export class Table {
	private __is_table: void = undefined;
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
