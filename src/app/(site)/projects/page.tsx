import { getProjects } from '@/sanity/utils';

const ProjectsPage = async () => {
  const projects = await getProjects();

  return (
    <section>
      {projects.map(project => (
        <article key={project._id}>{project.name}</article>
      ))}
    </section>
  );
};

export default ProjectsPage;
