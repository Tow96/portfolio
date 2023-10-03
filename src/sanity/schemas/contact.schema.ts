import { SchemaTypeDefinition } from 'sanity';

export const contact: SchemaTypeDefinition = {
  name: 'contact',
  title: 'Contacts',
  type: 'document',
  fields: [
    { name: 'name', title: 'name', type: 'string' },
    { name: 'url', title: 'URL', type: 'url' },
  ],
};
