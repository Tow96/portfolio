// Libraries
import { Suspense } from 'react';
// Sanity
import { getProjects } from '@/sanity/utils';
// Components
import { ProjectMasonry } from '@/components/project-masonry';
import { Spinner } from '@/components/spinner';

const ProjectMasonryWrapper = async () => {
  const projects = await getProjects();

  return <ProjectMasonry projects={projects} />;
};

const ProjectsPage = async () => (
  <section className="flex justify-center text-orange-900">
    <div className="m-4 w-full max-w-6xl px-4">
      <h1 className="hidden">Projects</h1>
      <h3 className="py-3 text-center text-2xl font-bold md:py-2">
        Most of my work has been for private companies.
      </h3>
      <h3 className="py-3 text-center text-2xl font-bold md:py-2">
        However, some of it has also been Open Source.
      </h3>
      <h3 className="py-3 text-center text-2xl font-bold md:py-2 md:pb-4">
        This is a list of all of it.
      </h3>
      <div className="flex justify-center pt-4">
        <Suspense fallback={<Spinner border="border-[12px]" width="w-72" />}>
          <ProjectMasonryWrapper />
        </Suspense>
      </div>
    </div>
  </section>
);

export default ProjectsPage;
