import { SchemaTypeDefinition } from 'sanity';

export const project: SchemaTypeDefinition = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: Rule => Rule.required().max(140),
    },
    { name: 'featured', title: 'Featured', type: 'boolean' },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },
    { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] },
    { name: 'url', title: 'URL', type: 'url' },
  ],
};
