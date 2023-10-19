import { HeroSection } from './_components/hero-section';
import { FeaturedProjectsSection } from './_components/featured-projects';
import { AboutSection } from './_components/about-section';
import Navbar from './_components/navbar';

const Home = () => (
  <main>
    <h1 className="hidden">Jose Tow&apos;s Portfolio</h1>
    <Navbar />
    <HeroSection />
    <FeaturedProjectsSection />
    <AboutSection />
  </main>
);

export default Home;
