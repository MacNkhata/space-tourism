'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const pathname = usePathname();

  return (
    <div className="w-full">
      <nav className="w-full flex flex-row items-center justify-between lg:hidden md:hidden">
        <div className="relative w-[20%]">
          <Link href="/" className="absolute top-6 left-6">
            <Image
              src="/images/shared/logo.svg"
              width={40}
              height={40}
              priority
            />
          </Link>
        </div>
        <div className="relative w-[75%]">
          <Image
            src="/images/shared/icon-hamburger.svg"
            width={23}
            height={21}
            className="absolute top-8 right-6"
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="flex flex-col absolute right-0 w-full  bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80 h-screen">
              <Image
                src="/images/shared/icon-close.svg"
                width={23}
                height={21}
                className="absolute top-8 right-6"
                onClick={() => setToggleMenu(false)}
              />
              <div className="absolute top-36 left-6 flex flex-col text-secondary text-base font-barlow uppercase tracking-widest w-[91.5%]">
                <Link
                  href="/"
                  className={`${
                    pathname === '/'
                      ? 'border-r-[4px] border-secondary py-2'
                      : ''
                  }`}
                >
                  <span className="font-bold">00</span> Home
                </Link>
                <Link
                  href="/destination"
                  className={`${
                    pathname === '/destination'
                      ? 'border-r-[5px] border-secondary py-2 mt-8'
                      : 'mt-8'
                  }`}
                >
                  <span className="font-bold">01</span> Destination
                </Link>
                <Link
                  href="/crew"
                  className={`${
                    pathname === '/crew'
                      ? 'border-r-[5px] border-secondary py-2 mt-8'
                      : 'mt-8'
                  }`}
                >
                  <span className="font-bold">02</span> Crew
                </Link>
                <Link
                  href="/technology"
                  className={`${
                    pathname === '/technology'
                      ? 'border-r-[5px] border-secondary py-2 mt-8'
                      : 'mt-8'
                  }`}
                >
                  <span className="font-bold">03</span> Technology
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="hidden lg:w-full lg:h-[96px] lg:mx-auto lg:flex lg:mt-10 md:flex md:mt-0 md:h-[80px] justify-between items-center">
        <Link href="/" className="cursor-pointer ml-12">
          <Image
            src="/images/shared/logo.svg"
            alt="logo"
            width={48}
            height={48}
            priority
          />
        </Link>
        <nav className="hidden  h-full bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 items-center lg:w-[60%] lg:flex md:w-[60%] md:flex">
          <div className="flex justify-between w-[50%] ml-32 text-base font-sans uppercase text-accent tracking-widest md:ml-16 md:w-3/4">
            <Link
              href="/"
              className={`${
                pathname === '/'
                  ? 'border-b-[3px] border-text-accent pb-6 mt-10 md:mt-8'
                  : 'mt-10 md:mt-8'
              }`}
            >
              <span className="lg:font-bold lg:inline md:hidden">00</span> Home
            </Link>
            <Link
              href="/destination"
              className={`${
                pathname === '/destination'
                  ? 'border-b-[3px] border-text-accent pb-6 mt-10 md:mt-8'
                  : 'mt-10 md:mt-8'
              }`}
            >
              <span className="lg:font-bold lg:inline md:hidden">01</span>{' '}
              Destination
            </Link>
            <Link
              href="/crew"
              className={`${
                pathname === '/crew'
                  ? 'border-b-[3px] border-text-accent pb-6 mt-10 md:mt-8'
                  : 'mt-10 md:mt-8'
              }`}
            >
              <span className="lg:font-bold lg:inline md:hidden">02</span> Crew
            </Link>
            <Link
              href="/technology"
              className={`${
                pathname === '/technology'
                  ? 'border-b-[3px] border-text-accent pb-6 mt-10 md:mt-8'
                  : 'lg:mt-10 md:mt-8'
              }`}
            >
              <span className="lg:font-bold lg:inline md:hidden">03</span>{' '}
              Technology
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
