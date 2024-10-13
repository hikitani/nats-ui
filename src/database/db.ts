import type { ContextServer } from '@tables/context';
import Dexie, { type EntityTable } from 'dexie';

export const db = new Dexie('NatsManagementDB') as Dexie & {
	contexts: EntityTable<ContextServer, 'name'>;
};

db.version(1).stores({
	contexts: '&name'
});
