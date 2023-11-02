'use client';
// Libraries
import { useEffect, useState } from 'react';
// Components
import Link from 'next/link';

function useYScroll() {
  const [scrollY, setScrollY] = useState(0);
  const onScroll = () => setScrollY(window.scrollY);
  useEffect(() => {
    onScroll();
    //add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollY;
}

const Navbar = ({ links }: { links: NavLink[] }) => {
  const scrollY = useYScroll();

  return (
    <div className="sticky top-0 z-50 flex justify-center space-x-10 font-semibold">
      <nav
        className={`m-3 mb-0 flex w-1/2 justify-between rounded-full p-2 px-3 transition-all xl:w-2/5 tallscreen:w-full ${
          scrollY > 100 ? 'bg-bianca-400 shadow-lg' : 'bg-transparent'
        }`}>
        {links.map((link, i) => (
          <Link
            href={link.href}
            key={i}
            className="rounded-full p-1 px-3 hover:bg-bianca-300 active:shadow-inner">
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
