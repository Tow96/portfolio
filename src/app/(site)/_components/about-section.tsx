import { getAboutMe } from '@/sanity/utils';
import Image from 'next/image';

export const AboutSection = async () => {
  const aboutMe = await getAboutMe();
  const hotspot = `${(aboutMe.image.hotspot.x * 100).toString() || 50}% ${
    (aboutMe.image.hotspot.y * 100).toString() || 50
  }%`;

  return (
    <section>
      <h2>About Me</h2>
      <ul>
        {aboutMe.blurbs.map((blurb, i) => (
          <li key={i}>{blurb}</li>
        ))}
      </ul>
      {aboutMe.paragraphs.map((paragraph, i) => (
        <article key={i}>
          <h3>{paragraph.title}</h3>
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
    </section>
  );
};
