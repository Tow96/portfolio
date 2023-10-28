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
      className="section-min-height flex w-full justify-center bg-bianca-100 pt-12 text-orange-900">
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
          <h3 className="text-center font-semibold">A more extensive list can be found </h3>
          <h4 className="text-center font-bold text-orange-700 underline hover:text-orange-600 active:text-orange-600 md:pl-1">
            <Link href={'/projects'}>here</Link>
          </h4>
        </div>
      </div>
    </section>
  );
};
