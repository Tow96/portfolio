import { createClient, groq } from 'next-sanity';
import { clientConfig } from './client.config';

// Projects -------------------------------------------------------------------
export const getProjects = async (): Promise<Project[]> =>
  createClient(clientConfig).fetch(
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
          "y": image.hotspot.height / 2 - image.hotspot.y
        },
        "logo": image.logo,
      },
    }`
  );

// Featured Projects ----------------------------------------------------------
export const getFeaturedProjectsPage = async (): Promise<FeaturedProjectsPage> =>
  (
    await createClient(clientConfig).fetch<FeaturedProjectsPage[]>(`*[_type == "featuredprojects"]{
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
          "y": project->image.hotspot.height / 2 - image.hotspot.y
        },
        "logo": project->image.logo,
      }
    }
  }`)
  )[0];

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
