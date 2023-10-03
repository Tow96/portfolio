import Link from 'next/link';

const Navbar = () => (
  <div className="flex w-32 items-center space-x-10">
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/projects">Projects</Link>
    {/* <Link href="/blog">Blog</Link> */}
    <Link href="#contact">Contact</Link>
  </div>
);

export default Navbar;
