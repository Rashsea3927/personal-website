'use client';

import useScrollToId from '@/hooks/useScrollToId';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  const { handleScrollToId, activeId } = useScrollToId();

  return (
    <header className='max-h-screen sticky top-0 px-9 py-24 grid gap-20 font-outfit text-center'>
      <h1 className='text-4xl font-bold text-[#f05d23]'>Kaji.dev</h1>
      <nav>
        <ul className='flex flex-col gap-12 w-max mx-auto'>
          <li className='font-bold text-sm tracking-widest'>
            <Link href='#about' className='flex items-center gap-3' onClick={(e) => handleScrollToId(e, 'about')} scroll={false}>
              <span className={`h-[1px] transition-[width] duration-150 ${activeId === 'about' ? 'w-14 bg-white' : 'w-8 bg-slate-500'}`}></span>
              <span className={`${activeId === 'about' ? 'text-white' : 'text-slate-500'}`}>ABOUT</span>
            </Link>
          </li>
          <li className='font-bold text-sm tracking-widest'>
            <Link href='#projects' className='flex items-center gap-3' onClick={(e) => handleScrollToId(e, 'projects')} scroll={false}>
              <span className={`h-[1px] transition-[width] duration-150 ${activeId === 'projects' ? 'w-14 bg-white' : 'w-8 bg-slate-500'}`}></span>
              <span className={`${activeId === 'projects' ? 'text-white' : 'text-slate-500'}`}>PROJECTS</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <FaGithub className='w-6 h-6' />
      </div>
    </header>
  );
};

export default Header;
