// Libraries
import { Suspense } from 'react';
// Sanity
import { getProjects } from '@/sanity/utils';
// Components
import { ProjectMasonry } from '@/components/project-masonry';

// TODO: remove dev timer
// TODO: Set correct loading

const pesto = async () => {
  await new Promise(r => setTimeout(r, 3000));
  return getProjects();
};

const ProjectMasonryWrapper = async () => {
  const projects = await pesto();

  return <ProjectMasonry projects={projects} />;
};

const ProjectsPage = async () => (
  <section className="flex justify-center">
    <div className="m-4 w-full max-w-6xl px-4">
      <h1>Projects</h1>
      <p>These are all the open source projects I&apos;ve worked on</p>
      <Suspense fallback={<div>Loading-.....</div>}>
        <ProjectMasonryWrapper />
      </Suspense>
    </div>
  </section>
);

export default ProjectsPage;
