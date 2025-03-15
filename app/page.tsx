import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='grid lg:grid-cols-[0.4fr_1fr] lg:justify-between'>
      <header className='max-h-screen sticky top-0 px-9 py-24 grid gap-28 font-outfit text-center'>
        <h1 className='text-4xl font-bold text-[#f05d23]'>Kaji.dev</h1>
        <nav>
          <ul className='flex flex-col gap-12'>
            <li className='font-bold text-base tracking-widest'>Home</li>
            <li className='font-bold text-base tracking-widest'>About</li>
            <li className='font-bold text-base tracking-widest'>Experience</li>
            <li className='font-bold text-base tracking-widest'>Projects</li>
          </ul>
        </nav>
        <div>
          <FaGithub className='w-6 h-6' />
        </div>
      </header>
      <main className='h-[3000px] px-12 bg-slate-900'>
        <section className='min-h-screen flex items-center justify-center'>
          <div className='max-w-4xl w-full'>
            <h2 className='text-5xl font-bold mb-8'>Hi, I&apos;m Kaji.</h2>
            <p className='text-lg mb-16'>
              東京でフロントエンドエンジニアとして活動しています。
              <br />
              モダンな技術に興味があり、日々新しい知識を取り入れながら開発に取り組んでいます。
            </p>
            <p className='text-lg font-semibold'>Tech Stack： HTML ｜ CSS ｜ Sass ｜ JavaScript ｜ React ｜ Next.js ｜ TypeScript</p>
          </div>
        </section>
      </main>
    </div>
  );
}
