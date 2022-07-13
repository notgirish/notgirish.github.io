import Head from 'next/head'
import Image from 'next/image'

const Work = () => {

  const projectsList = [
    {
      projectName: 'Remify',
      link: 'https://www.behance.net/gallery/143610723/Remify-Notification-Reminder-App-Website-Design',
      imgSource: '/assets/work/cards1.png',
      workDone: 'Brand, Website, App',
      textDark: true
    },
    {
      projectName: 'Paving',
      link: 'https://www.behance.net/gallery/144382669/Paving-FinTech-Challenge-App-Website-Case-Study',
      imgSource: '/assets/work/cards2.png',
      workDone: 'Brand, Website, App',
      textDark: false
    },
    {
      projectName: 'Blackbuck',
      link: 'https://www.behance.net/gallery/143334821/Blackbuck-TruckingLogistics-Website-Redesign',
      imgSource: '/assets/work/cards3.png',
      workDone: 'Website',
      textDark: false
    },
    {
      projectName: 'goodECO',
      link: 'https://www.behance.net/gallery/146180829/goodECO-Browser-Extension-UIUX-Design-Case-Study',
      imgSource: '/assets/work/cards4.png',
      workDone: 'Web extension',
      textDark: false
    },
    {
      projectName: 'Rewardee',
      link: 'https://www.behance.net/gallery/145342627/Rewardee-Employee-Engagement-Platform-Dashboard-UIUX',
      imgSource: '/assets/work/cards5.png',
      workDone: 'CRM Dashboard',
      textDark: false
    },
  ]

  return (
    <main className='px-6'>

      <style jsx>
        {`
        .project-card-1 {
          animation: fadeInAnimation ease .6s;
        }    
        .project-card-2 {
          animation: fadeInAnimation ease .9s;
        }
        .project-card-3 {
          animation: fadeInAnimation ease 1.2s;
        }
        .project-card-4 {
          animation: fadeInAnimation ease 1.5s;
        }
        .project-card-5 {
          animation: fadeInAnimation ease 1.7s;
        }
        .project-card-6 {
          animation: fadeInAnimation ease 2s;
        }  
        `}
      </style>


      <Head>
        <title>work - notgirish</title>
      </Head>

      <div className='space-y-7 mt-8 mb-16'>
        <h1 className='text-4xl leading-8 lg:text-5xl'>work.</h1>

        <div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
            {
              projectsList.map((e, index) => (
                <a href={e.link} target="_blank" rel="noreferrer" key={index}>
                  <div className={`relative cursor-pointer hover:p-1 transform transition-all ease-in duration-200 project-card-${index+1}`}>
                    <div className='absolute top-5 left-5 z-10'>
                      <h2 className={`${e.textDark ? 'text-black' : 'text-white'} text-xl`}>{e.projectName}</h2>
                      <p className={`${e.textDark ? 'text-black' : 'text-white'} text-sm`}>{e.workDone}</p>
                    </div>
                    <Image src={e.imgSource} width={360} height={437} alt="project" objectFit='contain' layout='responsive' />
                    {/* <img src={e.imgSource} alt="project"/> */}
                  </div>
                </a>
              ))
            }

            <div className='w-full h-[528px] sm:h-full relative bg-gray-100 flex items-center justify-center project-card-6'>
              <a href="https://www.behance.net/notgirish" target="_blank" rel="noreferrer" className='w-full lg:w-fit text-center'>
                <h2 className='text-4xl sm:text-2xl hover:opacity-60 transition-opacity ease-in duration-200 lg:w-fit'>see more</h2>
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Work