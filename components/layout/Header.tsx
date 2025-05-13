import Link from 'next/link';
import MobileNav from '../MobileNav';
import Nav from '../Nav';

const Header = () => {
  return (
    <header className='sticky top-0 left-0 w-full bg-white/30 backdrop-blur-md'>
      <div className='mx-auto flex items-center justify-between px-4 py-5 xs:px-16 max-w-xl'>
        <h1>
          <Link href='/' className='text-2xl font-bold sm:text-3xl'>
            Kaji.dev
          </Link>
        </h1>
        <MobileNav />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
