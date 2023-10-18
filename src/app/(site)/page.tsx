import { HeroSection } from './_components/hero-section';
import { FeaturedProjectsSection } from './_components/featured-projects';
import { AboutSection } from './_components/about-section';

const Home = () => (
  <main>
    <h1 className="hidden">Jose Tow&apos;s Portfolio</h1>
    <HeroSection />
    <FeaturedProjectsSection />
    <AboutSection />
  </main>
);

export default Home;
