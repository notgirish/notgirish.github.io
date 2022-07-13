import Head from 'next/head'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const About = () => {

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

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
        <title>about - notgirish</title>
      </Head>

      <section className='lg:w-[50%] space-y-5'>
        <div className='space-y-7 mt-8'>
          <h1 className='text-4xl leading-8 lg:text-5xl' onClick={openModal}>about.</h1>
          <p className='text-lg lg:text-xl'>i&apos;m a self-taught designer and developer who&apos;s interested in how people and software can work together to make life better.</p>
        </div>
        <p className='text-lg lg:text-xl'>my design philosophy is to create minimalist designs that are aesthetically pleasing. <br />my work philosophy is to &apos;go beyond plus ultra!&apos;</p>

      </section>

      <div className="w-fit mx-auto mr-0 mt-20 mb-8">
        <Image src='/assets/kaneki-reaper.png' width="450" height="300" alt="person" priority={true} />
        {/* <img src='/assets/kaneki-reaper.png' width="450" height="300" alt="person" /> */}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden bg-white p-6 text-left align-middle transition-all">
                  <Dialog.Title
                    as="h3"
                    className='text-4xl leading-8 lg:text-5xl'
                  >
                    fun facts.
                  </Dialog.Title>
                  <p className='text-xs mt-3'>i&apos;ve designed this website from scratch with the help of figma and developed it using next.js & tailwind css.</p>

                  <div className='my-5'>
                    <ul className='list-disc list-inside text-sm lg:text-base space-y-3'>
                      <li>i like to play racing & fps games, watch anime, learn about finance and business.</li>
                      <li>i used to “make” beats and release them, and i amassed 1,788 streams across all my 4 songs/beats on Spotify and just managed to reach ~102 monthly listeners at my peak.</li>
                      <li>achieved my 7th grade dream of reaching 100k subscribers on youtube and getting the silver play button, at the end, i had more than 122k+ subscribers and 12.5+ million views on my channel organically in 3.5 years.</li>
                      <li>lastly, i managed to lose my spotify account and youtube channel in the same year - 2022.</li>
                    </ul>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="inline-flex justify-centeborder border-transparent bg-black text-white px-5 py-2 font-bold text-lg cursor-pointer hover:ring-2 hover:ring-offset-2 ring-black ease-in duration-200"
                      onClick={closeModal}
                    >
                      noice.
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

    </main>
  )
}

export default About