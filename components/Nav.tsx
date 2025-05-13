import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#myskill', label: 'My Skill' },
  { href: '#myworks', label: 'My Works' },
];

const Nav = () => {
  return (
    <nav className='hidden sm:block'>
      <ul className='flex items-center gap-8'>
        {navLinks.map((link) => (
          <li key={link.href} className='hidden sm:block'>
            <Link href={link.href} className='text-base font-medium'>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
