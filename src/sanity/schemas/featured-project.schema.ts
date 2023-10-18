import { SchemaTypeDefinition } from 'sanity';
import { UlistIcon } from '@sanity/icons';

export const featuredProject: SchemaTypeDefinition = {
  name: 'featuredprojects',
  title: 'Featured Projects',
  type: 'document',
  icon: UlistIcon,
  fields: [
    { name: 'version', title: 'Version', type: 'number' },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [{ name: 'project', type: 'reference', to: [{ type: 'project' }] }],
          preview: {
            select: {
              name: 'project.name',
            },
            prepare({ name }) {
              return { title: name };
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
