'use client';
// Libraries
import { Masonry } from 'masonic';
import { useState, useEffect } from 'react';
// Components
import { ProjectCard } from './project-card';

export const ProjectMasonry = ({ projects }: { projects: Project[] }): JSX.Element => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <>
      {isClient && (
        <Masonry
          className="list-none"
          items={projects}
          columnGutter={24}
          columnWidth={200}
          maxColumnCount={5}
          render={ProjectCard}
        />
      )}
    </>
  );
};
