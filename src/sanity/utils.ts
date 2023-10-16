import { createClient, groq } from 'next-sanity';
import { clientConfig } from './client.config';
import { FeaturedProject, Project } from '@/types/project';

export const getProjects = async (): Promise<Project[]> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      url,
      content,
    }`
  );

export const getFeaturedProjects = async (): Promise<FeaturedProject[]> =>
  createClient(clientConfig).fetch<FeaturedProject[]>(
    `*[_type == "project" && featured == true]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": {
      "url": image.asset->url,
      "alt": image.alt,
      "hotspot": {
        "x": image.hotspot.x,
        "y": image.hotspot.height / 2 - image.hotspot.y
      },
      "logo": image.logo,
    },
    description,
  }[0..4]`
  );

export const getContactLinks = async (): Promise<ContactLink[]> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "contact"]{_id, _createdAt, url, name } | order(name asc)`
  );
