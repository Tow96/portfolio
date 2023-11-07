'use client';
// Libraries
import { useState, useEffect } from 'react';
// Components
import { Masonry } from 'masonic';
import Link from 'next/link';
import Image from 'next/image';

const FeaturedProjectCard = ({ data }: { data: FeaturedProject }): JSX.Element => {
  const { image, url, name, description } = data;

  const hotspotParams = `fp-x=${image.hotspot.x === null ? 0.5 : image.hotspot.x}&fp-y=${
    image.hotspot.y === null ? 0.5 : image.hotspot.y
  }`;

  return (
    <Link aria-label={name} href={url || '/'} target={url?.startsWith('http') ? '_blank' : '_self'}>
      <article className="relative rounded-lg bg-bianca-800 p-3 shadow-md drop-shadow-md transition-all hover:-top-2 hover:z-20 hover:shadow-lg hover:drop-shadow-lg">
        {/* Content + logo */}
        <div className="flex">
          {/* Content */}
          <div className="flex grow flex-col">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="grow text-bianca-200">{description}</p>
          </div>
          {/* Logo */}
          {image.url && image.logo && (
            <div className="relative m-4 aspect-square w-14">
              <Image
                alt={image.alt || 'Logo'}
                src={`${image.url}?w=56&h=56&fit=crop&${hotspotParams}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="56px"
              />
            </div>
          )}
        </div>
        {/* Full image */}
        {image.url && !image.logo && (
          <div className="relative mt-4 aspect-video overflow-hidden rounded-md">
            <Image
              alt={image.alt || 'Project'}
              src={`${image.url}?w=567&h=318&fit=crop&${hotspotParams}`}
              style={{ objectFit: 'cover' }}
              fill
              sizes="512px"
            />
          </div>
        )}
      </article>
    </Link>
  );
};

export const FeaturedProjectMasonry = ({ projects }: { projects: FeaturedProject[] }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <>
      {isClient && (
        <Masonry
          role="list"
          tabIndex={-1}
          items={projects}
          columnGutter={24}
          columnWidth={200}
          maxColumnCount={3}
          render={FeaturedProjectCard}
        />
      )}
    </>
  );
};
