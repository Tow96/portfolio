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
    logo: boolean;
  };
  name: string;
  slug: string;
  url: string;
  featurePos: number;
};

type FeaturedProject = Omit<Project, 'content' | 'url'>;
