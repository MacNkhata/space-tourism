/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B0D17',
        secondary: '#D0D6F9',
        accent: '#FFFFFF',
      },
      fontFamily: {
        serif: ['var(--font-bellefair)'],
        sans: ['var(--font-barlow)'],
      },
      backgroundImage: {
        'home-desktop': "url('/images/home/background-home-desktop.jpg')",
        'home-tablet': "url('/images/home/background-home-tablet.jpg')",
        'home-mobile': "url('/images/home/background-home-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
