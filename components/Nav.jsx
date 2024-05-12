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
      <nav className="w-full flex flex-row items-center justify-between lg:hidden">
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
              <div className="absolute top-36 left-8 flex flex-col">
                <Link
                  href="/"
                  className="text-secondary text-base font-barlow uppercase tracking-widest"
                >
                  <span className="font-bold">00</span> Home
                </Link>
                <Link
                  href="/"
                  className="text-secondary text-base font-barlow uppercase tracking-widest mt-8"
                >
                  <span className="font-bold">01</span> Destination
                </Link>
                <Link
                  href="/"
                  className="text-secondary text-base font-barlow uppercase tracking-widest mt-8"
                >
                  <span className="font-bold">02</span> Crew
                </Link>
                <Link
                  href="/"
                  className="text-secondary text-base font-barlow uppercase tracking-widest mt-8"
                >
                  <span className="font-bold">03</span> Technology
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
