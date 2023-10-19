'use client';

import { getProjects } from '@/sanity/utils';
import { ProjectCard } from './_components/project-card';
import Masonry from 'react-masonry-css';
import { useState, useEffect } from 'react';

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    getProjects().then(r => setProjects(r));
  }, []);

  const breakpoints = {
    default: 4,
    1024: 3,
    768: 2,
    640: 1,
  };

  return (
    <section className="flex justify-center">
      <div className="m-4 max-w-6xl">
        <h1>Projects</h1>
        <p>These are all the open source projects I&apos;ve worked on</p>
        <Masonry
          breakpointCols={breakpoints}
          className="-ml-7 flex h-fit list-none"
          columnClassName="pl-7">
          {projects.map(project => (
            <ProjectCard key={project._id} data={project} />
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default ProjectsPage;
