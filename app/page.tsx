export default function Home() {
  return (
    <main className='h-[3000px] px-12 bg-slate-900'>
      <section id='about' className='min-h-screen flex items-center justify-center'>
        <div className='max-w-4xl w-full'>
          <h2 className='text-5xl font-bold mb-3'>Hi, I&apos;m Kaji.</h2>
          <p className='text-lg text-slate-400 tracking-wider font-bold mb-8'>Front-end Engineer</p>
          <p className='text-lg leading-8 mb-14'>
            佐賀県出身、東京在住のフロントエンドエンジニアです。
            <br />
            求職者訓練校で HTML・CSS・JavaScript を用いたコーディングや Web デザインについて学び、特にコーディングに興味を持ちました。
            <br />
            現在はリユース業の会社でPHPのテンプレートエンジンであるSmartyを用いてWebサイトの制作を行なっております。
            <br />
            独学でNext.jsなどのモダンな技術をキャッチアップし、スキルを磨いています。
            <br />
            将来的にはフルスタックエンジニアとして、より幅広い領域で開発に関わることを目指しています。
          </p>
          <p className='text-lg font-semibold'>Tech Stack： HTML ｜ CSS ｜ Sass ｜ JavaScript ｜ jQuery ｜ React ｜ Next.js ｜ TypeScript</p>
        </div>
      </section>
      <section id='projects' className='min-h-screen flex items-center justify-center'>
        <div className='max-w-4xl w-full'>
          <h2 className='text-5xl font-bold mb-12'>Projects</h2>
          <ul className='grid grid-cols-3 gap-8'>
            <li className='h-72 bg-amber-200'></li>
            <li className='h-72 bg-amber-200'></li>
            <li className='h-72 bg-amber-200'></li>
            <li className='h-72 bg-amber-200'></li>
            <li className='h-72 bg-amber-200'></li>
            <li className='h-72 bg-amber-200'></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
