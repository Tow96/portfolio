'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const onScroll = () => setScrollY(window.scrollY);
  useEffect(() => {
    onScroll();
    //add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 flex justify-center space-x-10">
      <nav
        className={`m-3 mb-0 flex w-1/2 justify-between rounded-full p-1 px-3 transition-shadow xl:w-2/5 tallscreen:w-full ${
          scrollY > 100 ? 'popped' : ''
        }`}>
        <Link
          href="#home"
          className="rounded-full p-1 px-3 transition-colors hover:bg-mint active:bg-mint active:shadow-inner">
          Home
        </Link>
        <Link
          href="#about"
          className="rounded-full p-1 px-3 transition-colors hover:bg-mint active:bg-mint active:shadow-inner">
          About
        </Link>
        <Link
          href="#projects"
          className="rounded-full p-1 px-3 transition-colors hover:bg-mint active:bg-mint active:shadow-inner">
          Projects
        </Link>
        {/* <Link href="/blog">Blog</Link>  */}
        <Link
          href="#contact"
          className="rounded-full p-1 px-3 hover:bg-mint active:bg-mint active:shadow-inner">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
