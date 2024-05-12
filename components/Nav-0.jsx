'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full h-[96px] mx-auto mt-10 flex justify-between items-center">
      <Link href="/" className="cursor-pointer ml-12">
        <Image
          src="/images/shared/logo.svg"
          alt="logo"
          width={48}
          height={48}
          priority
        />
      </Link>
      <nav className="hidden lg:w-[60%] lg:h-full bg-gray-900 lg:bg-clip-padding lg:backdrop-filter lg:backdrop-blur-lg lg:bg-opacity-30 lg:flex lg:items-center">
        <div className="flex justify-between w-[50%] ml-32 text-base font-sans uppercase text-accent tracking-widest">
          <Link
            href="/"
            className={`${
              pathname === '/'
                ? 'border-b-[3px] border-text-accent pb-6 mt-10'
                : 'mt-10'
            }`}
          >
            <span className="font-bold">00</span> Home
          </Link>
          <Link
            href="/destination"
            className={`${
              pathname === '/destination'
                ? 'border-b-[3px] border-text-accent pb-6 mt-10'
                : 'mt-10'
            }`}
          >
            <span className="font-bold">01</span> Destination
          </Link>
          <Link
            href="/crew"
            className={`${
              pathname === '/crew'
                ? 'border-b-[3px] border-text-accent pb-6 mt-10'
                : 'mt-10'
            }`}
          >
            <span className="font-bold">02</span> Crew
          </Link>
          <Link
            href="/"
            className={`${
              pathname === '/technology'
                ? 'border-b-[3px] border-text-accent pb-6 mt-10'
                : 'mt-10'
            }`}
          >
            <span className="font-bold">03</span> Technology
          </Link>
        </div>
      </nav>
      <nav className="lg:hidden">
        <div className="relative w-[90%]">
          <Image
            className="absolute top-4 right-4 cursor-pointer mb-4"
            src="/images/shared/icon-humburger.svg"
            width={24}
            height={21}
          />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
