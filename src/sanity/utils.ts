import { createClient, groq } from 'next-sanity';
import { clientConfig } from './client.config';
import { Project } from '@/types/project';

export const getProjects = async (): Promise<Project[]> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      url,
      content
    }`
  );

export const getContactLinks = async (): Promise<ContactLink[]> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "contact"]{_id, _createdAt, url, name } | order(name asc)`
  );
