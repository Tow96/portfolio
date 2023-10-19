'use client';

import { getFeaturedProjectsPage } from '@/sanity/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';

export const FeaturedProjectsSection = () => {
  const [projects, setProjects] = useState<FeaturedProject[]>([]);

  useEffect(() => {
    getFeaturedProjectsPage().then(res => setProjects(res.projects));
  }, []);

  const breakpoints = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <section className="section-min-height flex w-full justify-center bg-zinc-200">
      <div className="max-w-5xl p-6">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <p>These are some of the open source projects I have worked with.</p>

        <div className="mt-6 flex justify-center">
          <Masonry
            breakpointCols={breakpoints}
            className="-ml-7 flex h-fit list-none "
            columnClassName="pl-7">
            {projects.map(project => (
              <FeaturedProjectCard key={project._id} data={project} />
            ))}
          </Masonry>
        </div>

        <p>
          A more extensive list can be found{' '}
          <Link className="text-zinc-600 underline" href={'/projects'}>
            here
          </Link>
        </p>
      </div>
    </section>
  );
};

const FeaturedProjectCard = ({ data }: { data: FeaturedProject }): JSX.Element => {
  const hotspot = `${(data.image.hotspot.x * 100).toString() || 50}% ${
    (data.image.hotspot.y * 100).toString() || 50
  }%`;

  return (
    <Link href={data.url || ''} target={data.url?.startsWith('http') ? '_blank' : '_self'}>
      <li className="mb-7 rounded-lg bg-zinc-300 p-3 shadow-md drop-shadow-md">
        <div className="flex">
          <div className="flex grow flex-col">
            <h3 className="text-xl font-semibold">{data.name}</h3>
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
              alt={data.image.alt || 'project'}
              src={data.image.url}
              style={{ objectFit: 'cover', objectPosition: hotspot }}
              fill
              sizes="512px"
            />
          </div>
        )}
      </li>
    </Link>
  );
};
