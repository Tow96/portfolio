// Libraries
import { getFeaturedProjectsPage } from '@/sanity/utils';
import { Suspense } from 'react';
// Components
import Link from 'next/link';
import { FeaturedProjectMasonry } from '@/components/featured-project-masonry';
import { Spinner } from '@/components/spinner';

const FeaturedProjectMasonryWrapper = async () => {
  const page = await getFeaturedProjectsPage();

  return <FeaturedProjectMasonry projects={page.projects} />;
};

export const FeaturedProjectsSection = async () => {
  return (
    <section
      id="projects"
      className="section-min-height flex w-full justify-center bg-bianca-900 pt-12 text-bianca-100">
      <div className="w-full max-w-5xl p-6 md:mt-12">
        <h2 className="hidden">Projects</h2>
        <h3 className="text-center text-2xl font-bold md:text-4xl">
          These are some of the open source projects I have worked with.
        </h3>

        <div className="mt-6 flex justify-center md:py-12">
          <Suspense fallback={<Spinner width="w-36" border="border-[12px]" />}>
            <FeaturedProjectMasonryWrapper />
          </Suspense>
        </div>

        <div className="pt-6 text-xl md:flex">
          <p className="text-center font-semibold">
            For a more extensive list, check all my{' '}
            <Link
              href={'/projects'}
              className="font-bold text-orange-600 underline hover:text-orange-500 active:text-orange-500 md:pl-1">
              projects
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
