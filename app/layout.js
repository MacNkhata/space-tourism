import './globals.css';
import { Inter } from 'next/font/google';
import Nav from './components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Space Tourism',
  description: 'A front end mentor challenge',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="lg:max-w-screen-lg mx-auto sm:p-6">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
