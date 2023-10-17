import { SchemaTypeDefinition } from 'sanity';

export const contact: SchemaTypeDefinition = {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    { name: 'version', title: 'Version', type: 'number' },
    {
      name: 'links',
      type: 'array',
      of: [
        {
          name: 'link',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    },
  ],
};
