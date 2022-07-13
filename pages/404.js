import Image from 'next/image'

const ErrorPage = () => {
    return (
        <main className='centerWrapper px-6 flex flex-col items-center lg:flex-row lg:space-x-3'>
            <div className="w-fit mx-auto my-0">
                <Image src='/assets/kaneki-chibi.png' width="250" height="270" alt="person" priority={true}/>
                {/* <img src='/assets/kaneki-chibi.png' width="250" height="270" alt="404 person" /> */}
            </div>

            <div className='text-center'>
                <h1 className='text-6xl lg:text-8xl'>404</h1>
                <p className='leading-4 mt-2 lg:text-xl lg:mt-0'>sorry, couldn&apos;t unravel the path.</p>
            </div>
        </main>
    )
}

export default ErrorPage