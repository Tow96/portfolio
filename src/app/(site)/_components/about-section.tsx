import { getAboutMePage } from '@/sanity/utils';
import Image from 'next/image';

export const AboutSection = async () => {
  const aboutMe = await getAboutMePage();
  const hotspot = `${(aboutMe.image.hotspot.x * 100).toString() || 50}% ${
    (aboutMe.image.hotspot.y * 100).toString() || 50
  }%`;

  return (
    <section className="section-min-height flex justify-center bg-zinc-300">
      <div className="max-w-5xl p-6">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <ul>
          {aboutMe.blurbs.map((blurb, i) => (
            <li key={i} className="text-zinc-700">
              {blurb}
            </li>
          ))}
        </ul>
        <div className="relative">
          {aboutMe.paragraphs.map((paragraph, i) => (
            <article key={i}>
              <h3 className="text-lg font-medium underline">{paragraph.title}</h3>
              <p>{paragraph.text}</p>
            </article>
          ))}
          <Image
            alt={aboutMe.image.alt}
            src={aboutMe.image.url}
            width={80}
            height={80}
            style={{ objectFit: 'cover', objectPosition: hotspot }}
          />
        </div>
      </div>
    </section>
  );
};
