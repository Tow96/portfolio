import { AboutSection } from './_components/about-section';
import { FeaturedProjectsSection } from './_components/featured-projects';
// import { NotesSection } from './_components/notes-section';

const Home = () => (
  <main>
    <AboutSection />
    {/* <hr className="mx-auto mt-5 w-1/2 bg-black" /> */}
    <FeaturedProjectsSection />
    {/* <hr className="mx-auto mt-5 w-1/2 bg-black" />
    <NotesSection /> */}
  </main>
);

export default Home;
