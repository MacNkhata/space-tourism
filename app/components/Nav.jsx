import Link from 'next/link';
import Image from 'next/image';

function Nav() {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <Image
          priority
          src="./images/shared/logo.svg"
          width={40}
          height={40}
          alt="site logo"
        />
      </div>
      <div>
        <Image
          src="./images/shared/icon-hamburger.svg"
          width={21}
          height={24}
          alt="menu icon"
        />
        <ul className="flex sm:hidden">
          <li>
            <Link href="/">00 Home</Link>
          </li>
          <li>
            <Link href="/Destination">01 Destination</Link>
          </li>
          <li>
            <Link href="/Crew">02 Crew</Link>
          </li>
          <li>
            <Link href="/Technology">03 Technology</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
