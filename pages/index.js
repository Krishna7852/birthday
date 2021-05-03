import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='w-full h-full'>
      <Head>
        <title>Sumit's Birthday</title>
        <meta name='description' content='Happy Birthday Sumit' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-red-400'>HBD Sumit</h1>
      </main>
    </div>
  );
}
