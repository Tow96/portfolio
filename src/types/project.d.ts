import { PortableTextBlock } from 'sanity';

type Project = {
  _id: string;
  _createdAt: Date;
  content: PortableTextBlock[];
  description: string;
  image: {
    url: string;
    alt: string;
    hotspot: any;
  };
  name: string;
  slug: string;
  url: string;
};

type FeaturedProject = Omit<Project, 'content' | 'url'>;
