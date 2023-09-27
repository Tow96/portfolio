import { PortableTextBlock } from 'sanity';

type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  imageUrl: string;
  url: string;
  content: PortableTextBlock[];
};
