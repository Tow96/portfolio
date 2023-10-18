import { SchemaTypeDefinition } from 'sanity';
import { EnvelopeIcon, LinkIcon } from '@sanity/icons';

export const contact: SchemaTypeDefinition = {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    { name: 'version', title: 'Version', type: 'number' },
    {
      name: 'links',
      type: 'array',
      of: [
        {
          name: 'link',
          type: 'object',
          icon: LinkIcon,
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
            // TODO: Add icons
          ],
          preview: {
            select: {
              title: 'title',
              url: 'url',
            },
            prepare({ title, url }) {
              return {
                title,
                subtitle: url,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      version: 'version',
      date: '_createdAt',
    },
    prepare({ version, date }) {
      return {
        title: `Version: ${version}`,
        subtitle: date,
      };
    },
  },
};
