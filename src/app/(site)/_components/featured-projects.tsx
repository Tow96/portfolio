import { getFeaturedProjects } from '@/sanity/utils';
import { FeaturedProject } from '@/types/project';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const FeaturedProjectsSection = async () => {
  const featuredProjects = await getFeaturedProjects();

  return (
    <section className="section-min-height flex w-full justify-center bg-zinc-200">
      <ul className="grid h-fit max-w-lg grow gap-4 p-4 pt-6 sm:max-w-none sm:grid-cols-2 md:max-w-5xl md:grid-cols-3">
        {featuredProjects.map(project => (
          <FeaturedProjectCard key={project._id} data={project} />
        ))}
      </ul>
    </section>
  );
};

const FeaturedProjectCard = ({ data }: { data: FeaturedProject }): JSX.Element => {
  const hotspot = `${(data.image.hotspot.x * 100).toString() || 50}% ${
    (data.image.hotspot.y * 100).toString() || 50
  }%`;

  return (
    <Link href={`/projects/${data.slug}`}>
      <li className="max-w-lg rounded-lg bg-zinc-300 p-3 shadow-md drop-shadow-md">
        <div className="flex">
          <div className="flex grow flex-col">
            <h4 className="text-xl font-semibold">{data.name}</h4>
            <p className="grow text-zinc-700">{data.description}</p>
          </div>
          {data.image.url && data.image.logo && (
            <div className="relative m-4 aspect-square w-14">
              <Image
                alt={data.image.alt}
                src={data.image.url}
                fill
                style={{ objectFit: 'cover', objectPosition: hotspot }}
                sizes="56px"
              />
            </div>
          )}
        </div>
        {data.image.url && !data.image.logo && (
          <div className="relative mt-4 aspect-video overflow-hidden rounded-md">
            <Image
              alt={data.image.alt}
              src={data.image.url}
              style={{ objectFit: 'cover', objectPosition: hotspot }}
              fill
            />
          </div>
        )}
      </li>
    </Link>
  );
};
