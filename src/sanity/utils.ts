import { createClient, groq } from 'next-sanity';
import { clientConfig } from './client.config';
import { FeaturedProject, Project } from '@/types/project';

// Projects -------------------------------------------------------------------
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
    featurePos
  }[0..4] | order(featurePos asc)`
  );

// Contact --------------------------------------------------------------------
export const getContactPage = async (): Promise<Contact> =>
  (
    await createClient(clientConfig).fetch<Contact[]>(
      groq`*[_type == "contact"] | order(version desc)`
    )
  )[0];

// About Me -------------------------------------------------------------------
export const getAboutMePage = async (): Promise<AboutMe> =>
  (
    await createClient(clientConfig).fetch<AboutMe[]>(
      `*[_type == "aboutme"]{
      _id,
      _createdAt,
      version,
      blurbs,
      "image": {
        "url": image.asset->url,
        "alt": image.alt,
        "hotspot": {
          "x": image.hotspot.x,
          "y": image.hotspot.height / 2 - image.hotspot.y
        },
      },
      paragraphs,
    } | order(version desc)`
    )
  )[0];
