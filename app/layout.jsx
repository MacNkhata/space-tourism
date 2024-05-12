import '../styles/globals.css';
import { Bellefair, Barlow_Condensed } from 'next/font/google';

const bellefair = Bellefair({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bellefair',
});

const barlow = Barlow_Condensed({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
});

export const metadata = {
  title: 'Space Tourism',
  description: 'A Next App that covers the beauty of our space',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bellefair.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
