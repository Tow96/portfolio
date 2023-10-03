import { getFeaturedProjects } from '@/sanity/utils';
import { FeaturedProject } from '@/types/project';
import Image from 'next/image';
import Link from 'next/link';

export const FeaturedProjectsSection = async () => {
  const featuredProjects = await getFeaturedProjects();

  return (
    <section id="featured" className="section-min-height">
      <h2>Featured projects:</h2>
      <div className="flex justify-center">
        <ul className="grid grid-cols-3 gap-3">
          {featuredProjects.map(project => (
            <FeaturedProjectCard key={project._id} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const FeaturedProjectCard = ({ project }: { project: FeaturedProject }): JSX.Element => {
  const hotspot = `${(project.image.hotspot.x * 100).toString() || 50}% ${
    (project.image.hotspot.y * 100).toString() || 50
  }%`;

  return (
    <Link href={`/projects/${project.slug}`} className="w-80 bg-slate-500 p-3">
      <li className="flex">
        <div className="grow">
          <h4>{project.name}</h4>
          <p>{project.description}</p>
        </div>
        {project.image.url && (
          <div className="relative h-32 w-32">
            <Image
              alt={project.image.alt}
              src={project.image.url}
              fill
              objectFit="cover"
              objectPosition={hotspot}
            />
          </div>
        )}
      </li>
    </Link>
  );
};
