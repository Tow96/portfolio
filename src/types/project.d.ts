type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  // slug: string;
  description: string;
  url: string;
  // content: PortableTextBlock[];
  image: {
    url: string;
    alt: string;
    hotspot: { x: number; y: number };
    logo: boolean;
  };
};

type FeaturedProject = Omit<Project, 'content'>;

type FeaturedProjectsPage = {
  _id: string;
  _createdAt: string;
  version: number;
  projects: FeaturedProject[];
};
