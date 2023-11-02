// Components
import { HeroSection } from '@/components/hero-section';
import { FeaturedProjectsSection } from '@/components/featured-projects';
import { AboutSection } from '@/components/about-section';
import Navbar from '@/components/navbar';

const Home = () => {
  const links: NavLink[] = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <main>
      <h1 className="hidden">Jose Tow&apos;s Portfolio</h1>
      <Navbar links={links} />
      <HeroSection />
      <FeaturedProjectsSection />
      <AboutSection />
    </main>
  );
};

export default Home;
