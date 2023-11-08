// Sanity
import { getAboutMePage } from '@/sanity/utils';
// Components
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

export const AboutSection = async () => {
  const aboutMe = await getAboutMePage();
  const hotspotParams = `fp-x=${
    aboutMe.image.hotspot.x === null ? 0.5 : aboutMe.image.hotspot.x
  }&fp-y=${aboutMe.image.hotspot.y === null ? 0.5 : aboutMe.image.hotspot.y}`;

  return (
    <section
      id="about"
      className="section-min-height relative flex justify-center bg-bianca-100 pt-12 text-bianca-900">
      <div className="max-w-5xl px-6 py-6 sm:px-12">
        {/* Title */}
        <h2 className="text-4xl font-semibold">About Me</h2>
        {/* Blurbs */}
        <ul className="min-h-[48px] w-4/6 md:w-full">
          {aboutMe.blurbs.map((blurb, i) => (
            <li key={i} className="text-bianca-800 md:text-lg">
              {blurb}
            </li>
          ))}
        </ul>
        {/* Paragraphs + image */}
        <div className="flex pt-4">
          {/* Image */}
          <div className="pr-4 lg:mb-36 lg:mt-auto">
            <div className="absolute right-7 top-20 aspect-square w-20 overflow-hidden rounded-full border-4 border-zinc-100 shadow-inner lg:relative lg:w-48">
              <Image
                alt={aboutMe.image.alt || 'Me'}
                src={`${aboutMe.image.url}?w=184&h=184&fit=crop&${hotspotParams}`}
                style={{ objectFit: 'cover' }}
                fill
                sizes="(min-width: 1024px) 12rem, 6rem"
              />
            </div>
          </div>
          {/* Paragraphs */}
          <div className="grow">
            {aboutMe.paragraphs.map((paragraph, i) => (
              <article key={i} className="pt-6">
                <h3 className="pb-2 text-2xl font-semibold">{paragraph.title}</h3>

                <div className="flex flex-col gap-2">
                  <PortableText value={paragraph.text} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
