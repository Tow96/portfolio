// Components
import { HeroSection } from '@/components/hero-section';
import { FeaturedProjectsSection } from '@/components/featured-projects';
import { AboutSection } from '@/components/about-section';
import Navbar from '@/components/navbar';

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
