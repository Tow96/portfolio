// Libraries
import { getFeaturedProjectsPage } from '@/sanity/utils';
import { Suspense } from 'react';
// Components
import Link from 'next/link';
import { FeaturedProjectMasonry } from './featured-project-masonry';

// TODO: remove dev timer
// TODO: Set correct loading

const pesto = async () => {
  await new Promise(r => setTimeout(r, 3000));
  return getFeaturedProjectsPage();
};
const FeaturedProjectMasonryWrapper = async () => {
  const page = await pesto();

  return <FeaturedProjectMasonry projects={page.projects} />;
};

export const FeaturedProjectsSection = async () => {
  return (
    <section
      id="projects"
      className="section-min-height flex w-full justify-center bg-mandarine-100 pt-12">
      <div className="w-full max-w-5xl p-6">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <p>These are some of the open source projects I have worked with.</p>

        <div className="mt-6 flex justify-center">
          <Suspense fallback={<div>LOADIGN....</div>}>
            <FeaturedProjectMasonryWrapper />
          </Suspense>
          {/* <Masonry
            breakpointCols={breakpoints}
            className="-ml-7 flex h-fit list-none "
            columnClassName="pl-7">
            {projects.map(project => (
              <FeaturedProjectCard key={project._id} data={project} />
            ))}
          </Masonry> */}
        </div>

        <p>
          A more extensive list can be found{' '}
          <Link className="text-zinc-600 underline" href={'/projects'}>
            here
          </Link>
        </p>
      </div>
    </section>
  );
};
