import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
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
      <nav className="w-[60%] h-full bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 flex items-center">
        <div className="flex justify-between w-[50%] ml-32 text-base font-sans uppercase text-accent tracking-widest">
          <Link href="/">
            {' '}
            <span className="font-bold">00</span> Home
          </Link>
          <Link href="/destination">
            <span className="font-bold">01</span> Destination
          </Link>
          <Link href="/crew">
            <span className="font-bold">02</span> Crew
          </Link>
          <Link href="/">
            <span className="font-bold">03</span> Technology
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
