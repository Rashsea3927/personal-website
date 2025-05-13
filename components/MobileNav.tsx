'use client';

import Link from 'next/link';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#myskill', label: 'My Skill' },
  { href: '#myworks', label: 'My Works' },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type='button' className='flex flex-col gap-1 sm:hidden'>
          <span className='w-7 h-[3px] bg-black'></span>
          <span className='w-7 h-[3px] bg-black'></span>
          <span className='w-7 h-[3px] bg-black'></span>
        </button>
      </SheetTrigger>
      <SheetContent side='top' className='rounded-b-xl sm:hidden'>
        <SheetHeader className='pt-10 pb-0'>
          <SheetTitle className='text-2xl font-bold text-center'>Kaji.dev</SheetTitle>
        </SheetHeader>
        <nav className='px-12 pb-8'>
          <ul className='flex flex-col gap-4'>
            {navLinks.map((link) => (
              <li key={link.href} className='text-center'>
                <SheetClose asChild>
                  <Link href={link.href} className='text-lg font-medium'>
                    {link.label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
