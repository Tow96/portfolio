import { getAboutMePage } from '@/sanity/utils';
import Image from 'next/image';

export const AboutSection = async () => {
  const aboutMe = await getAboutMePage();
  const hotspot = `${(aboutMe.image.hotspot.x * 100).toString() || 50}% ${
    (aboutMe.image.hotspot.y * 100).toString() || 50
  }%`;

  return (
    <section
      id="about"
      className="section-min-height relative flex justify-center bg-zinc-300 pt-12">
      <div className="max-w-5xl px-6 py-6 sm:px-12">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <ul>
          {aboutMe.blurbs.map((blurb, i) => (
            <li key={i} className="min-h-[48px] text-zinc-700">
              {blurb}
            </li>
          ))}
        </ul>
        <div className="flex pt-4">
          <div className="pr-4 lg:mt-auto lg:pb-12">
            <div className="absolute right-7 top-6 aspect-square w-24 overflow-hidden rounded-full border-4 border-zinc-100 shadow-inner lg:relative lg:w-48">
              <Image
                alt={aboutMe.image.alt}
                src={aboutMe.image.url}
                style={{ objectFit: 'cover', objectPosition: hotspot }}
                fill
                sizes="(min-width: 1024px) 12rem, 6rem"
              />
            </div>
          </div>
          <div className="grow">
            {aboutMe.paragraphs.map((paragraph, i) => (
              <article key={i} className="pb-4">
                <h3 className="text-lg font-medium underline">{paragraph.title}</h3>
                <p>{paragraph.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
