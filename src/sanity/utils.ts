import { groq } from 'next-sanity';
import { client } from './client.config';

const revalidate = parseInt(process.env.NEXT_PUBLIC_SANITY_REVALIDATION || '3600');

// Projects -------------------------------------------------------------------
export const getProjects = async (): Promise<Project[]> =>
  client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      // "slug": slug.current,
      url,
      content,
      description,
      "image":  {
        "url": image.asset->url,
        "alt": image.alt,
        "hotspot": {
          "x": image.hotspot.x,
          "y": image.hotspot.y
        },
        "logo": image.logo,
      },
    }`,
    {},
    { next: { revalidate, tags: ['sanity', 'project'] } }
  );

// Featured Projects ----------------------------------------------------------
export const getFeaturedProjectsPage = async (): Promise<FeaturedProjectsPage> =>
  (
    await client.fetch<FeaturedProjectsPage[]>(
      `*[_type == "featuredprojects"]{
        _id,
        _createdAt,
        version,
        "projects": projects[] {
          "_id": project->_id,
          "_createdAt": project->_createdAt,
          "name": project->name,
          // "slug": project->slug.current,
          "url": project->url,
          "description": project->description,
          "image":  {
            "url": project->image.asset->url,
            "alt": project->image.alt,
            "hotspot": {
              "x": project->image.hotspot.x,
              "y": project->image.hotspot.y
            },
            "logo": project->image.logo,
          }
        }
      }`,
      {},
      { next: { revalidate, tags: ['sanity', 'project', 'featuredprojects'] } }
    )
  )[0];

// Contact --------------------------------------------------------------------
export const getContactPage = async (): Promise<Contact> =>
  (
    await client.fetch<Contact[]>(
      groq`*[_type == "contact"] | order(version desc)`,
      {},
      { next: { revalidate, tags: ['sanity', 'contact'] } }
    )
  )[0];

// About Me -------------------------------------------------------------------
export const getAboutMePage = async (): Promise<AboutMe> =>
  (
    await client.fetch<AboutMe[]>(
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
          "y": image.hotspot.y
        },
      },
      paragraphs,
    } | order(version desc)`,
      {},
      { next: { revalidate, tags: ['sanity', 'aboutme'] } }
    )
  )[0];
