import Link from 'next/link';
import { FaCss3Alt, FaGithubSquare, FaHtml5, FaLightbulb, FaReact, FaSass } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiTypescript } from 'react-icons/si';

export default function Home() {
  return (
    <main className=''>
      {/* Hero */}
      <section className='px-4 min-h-[calc(100vh-72px)] flex items-center justify-center xs:px-16'>
        <div className=''>
          <div className='mb-6'>
            <h2 className='text-3xl mb-1 sm:mb-2 sm:text-5xl md:text-6xl lg:text-7xl'>
              Hello I&#39;m <span className='font-extrabold'>Kajihara.</span>
            </h2>
            <p className='text-lg text-neutral-600 mb-3 sm:text-2xl sm:mb-4'>Frontend Developer</p>
            <div>
              <p className='text-sm sm:text-base'>
                私はフロントエンドエンジニアとして、HTMLやSass、JavaScriptを使ったWeb制作を行っています。
              </p>
              <p className='text-sm sm:text-base'>
                シンプルな技術でも、見やすく使いやすいサイトをスピーディーに作ることを大切にしています。
              </p>
            </div>
          </div>

          <div>
            <Link href='https://github.com/Rashsea3927' target='_blank' rel='noopener noreferrer'>
              <FaGithubSquare className='w-10 h-10 md:w-14 md:h-14' />
            </Link>
          </div>
        </div>
      </section>

      {/* My Skill */}
      <section id='myskill' className='mx-auto px-4 pt-20 mb-20 xs:px-16  max-w-xl'>
        <h2 className='text-2xl font-extrabold text-center mb-8 sm:text-3xl'>My Skill</h2>
        <ul className='grid grid-cols-2 gap-4 md:grid-cols-3'>
          <li className='flex flex-col items-center gap-5 p-6 border-2 border-black rounded-lg'>
            <FaHtml5 className='w-14 h-14' />
            <p className='text-xl font-bold'>HTML5</p>
          </li>
          <li className='flex flex-col items-center gap-4 p-6 border-2 border-black rounded-lg'>
            <FaCss3Alt className='w-14 h-14' />
            <p className='text-xl font-bold'>CSS3</p>
          </li>
          <li className='flex flex-col items-center gap-4 p-6 border-2 border-black rounded-lg'>
            <FaSass className='w-14 h-14' />
            <p className='text-xl font-bold'>Sass</p>
          </li>
          <li className='flex flex-col items-center gap-4 p-6 border-2 border-black rounded-lg'>
            <SiJavascript className='w-14 h-14' />
            <p className='text-xl font-bold'>JavaScript</p>
          </li>
          <li className='flex flex-col items-center gap-4 p-6 border-2 border-black rounded-lg'>
            <SiTypescript className='w-14 h-14' />
            <p className='text-xl font-bold'>TypeScript</p>
          </li>
          <li className='flex flex-col items-center gap-4 p-6 border-2 border-black rounded-lg'>
            <FaReact className='w-14 h-14' />
            <p className='text-xl font-bold'>React</p>
          </li>
          <li className='flex flex-col items-center gap-4 p-6 border-2 border-black rounded-lg'>
            <SiNextdotjs className='w-14 h-14' />
            <p className='text-xl font-bold'>Next.js</p>
          </li>
          <li className='flex flex-col items-center gap-4 p-6 border-2 border-black rounded-lg'>
            <FaLightbulb className='w-14 h-14' />
            <p className='text-xl font-bold'>Smarty</p>
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section id='experience' className='pt-[60px] bg-black h-[500px]'>
        <h2 className='text-2xl font-bold text-white text-center mb-10'>My Experience</h2>
      </section>
    </main>
  );
}
