import { SchemaTypeDefinition } from 'sanity';

export const about: SchemaTypeDefinition = {
  name: 'aboutme',
  title: 'About Me',
  type: 'document',
  fields: [
    { name: 'version', title: 'Version', type: 'number' },
    {
      name: 'blurbs',
      type: 'array',
      of: [{ type: 'string', validation: Rule => Rule.required().max(140) }],
      validation: Rule => Rule.max(5),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },
    {
      name: 'paragraphs',
      type: 'array',
      of: [
        {
          name: 'paragraph',
          title: 'Paragraph',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'text', title: 'Text', type: 'string' },
          ],
        },
      ],
      validation: Rule => Rule.max(5),
    },
  ],
};