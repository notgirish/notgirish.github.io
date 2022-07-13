import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link"

import logo from '../public/assets/logo.svg'
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter()
    const currentRoute = router.pathname

    let navigation = [
        { name: "work.", href: "/work" },
        { name: "about.", href: "/about" },
        { name: "contact.", href: "https://notgirish.netlify.app/contact" }
    ];

    return (
        <Disclosure as="nav">
            {({ open, close }) => (
                <>
                    <div className="max-w-7xl mx-auto px-6 py-2 lg:py-6">
                        <div className="relative flex items-center justify-between h-16 ">
                            <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>

                            <div className="flex items-center md:w-full md:justify-between">
                                <div>
                                    <Link href="/"><a a onClick={() => close()}>
                                        <Image src={logo} alt="notgirish logo" width={80} />
                                    </a></Link>
                                </div>

                                <div className="hidden md:block">
                                    <div className="flex gap-6 lg:gap-9 lg:text-xl">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                <a className={currentRoute === item.href ? 'font-bold' : ''}>{item.name}</a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden absolute top-20 right-0 transition transform origin-top-right w-full h-fit bg-white z-[999]">

                        {({ close }) => (

                            <div className="mx-6 my-6 mb-12 flex flex-col gap-6 bg-white">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as={Link}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        <a onClick={() => close()} className="text-3xl w-full">
                                            {item.name}
                                        </a>
                                    </Disclosure.Button>
                                ))}
                            </div>
                        )}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}