export default function Home() {
  return (
    <div className='grid lg:grid-cols-[0.3fr_1fr] lg:gap-16 lg:justify-between'>
      <header className='max-h-screen sticky top-0'>
        <h1 className='font-inter'>header</h1>
      </header>
      <main className='h-[3000px] bg-slate-900'>Main</main>
    </div>
  );
}
