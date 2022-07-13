import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <main className='container px-6 flex flex-col lg:flex-row lg:items-center lg:centerWrapper'>

      <style jsx>
        {`
        main {
          animation: fadeInAnimation ease-in .4s;
        }     
        `}
      </style>

      <Head>
        <title>notgirish - home</title>
      </Head>

      <div className='space-y-7 mt-8 lg:w-[50%]'>
        <h1 className='text-[2.75rem] leading-8 lg:text-6xl'>hi, i&apos;m girish.</h1>
        <p className='text-xl'>i&apos;m a product designer and developer who enjoys transforming complex problems into simple, minimal, and aesthetically pleasing experiences. </p>

        <Link href="/work">
          <a className='w-fit bg-black text-white px-7 py-3 font-bold text-xl flex group'>
            <span>see my work &nbsp;</span>
            <span className='transform transition-transform ease-in duration-200 group-hover:translate-x-3'>⟶</span>
          </a>
        </Link>

      </div>

      <div className="w-fit mx-auto mr-0 mt-16 mb-8">
        <Image src='/assets/kaneki.jpg' width="290" height="420" alt="person" className='-scale-x-100' priority={true} />
        {/* <img src='/assets/kaneki.jpg' width="290" height="420" alt="person" className='-scale-x-100' /> */}
      </div>

    </main>
  )
}
