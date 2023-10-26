'use client';
// Libraries
import { Masonry } from 'masonic';
import { useState, useEffect } from 'react';
// Components
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ data }: { data: Project }): JSX.Element => {
  const hotspot = `${(data.image.hotspot.x * 100).toString() || 50}% ${
    (data.image.hotspot.y * 100).toString() || 50
  }%`;

  return (
    <Link href={data.url || ''} target={data.url?.startsWith('http') ? '_blank' : '_self'}>
      <li className="rounded-lg bg-zinc-300 p-3 shadow-md drop-shadow-md">
        <div className="flex">
          <div className="flex w-full grow flex-col break-words">
            <h3 className="text-xl font-semibold">{data.name}</h3>
            <p className="text-zinc-700">{data.description}</p>
          </div>
          {data.image.url && data.image.logo && (
            <div className="relative m-4 aspect-square w-14">
              <Image
                alt={data.image.alt}
                src={data.image.url}
                fill
                style={{ objectFit: 'cover' }}
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

export const ProjectMasonry = ({ projects }: { projects: Project[] }): JSX.Element => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <>
      {isClient && (
        <Masonry
          className="list-none"
          items={projects}
          columnGutter={24}
          columnWidth={200}
          maxColumnCount={5}
          render={ProjectCard}
        />
      )}
    </>
  );
};
