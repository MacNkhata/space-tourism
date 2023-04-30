/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    fontFamily: {
      bellefair: ['Bellefair', 'serif'],
      barlow: ['Barlow', 'sans-serif'],
      barlowCondensed: ['Barlow', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: 'rgb(11, 13, 23)',
        secondary: 'rgb(208, 214, 249)',
        accent: 'rgb(255, 255, 255)',
      },
      backgroundImage: {
        'mobile-bg': "url('/images/home/background-home-mobile.jpg')",
        'table-bg': "url('/images/home/background-home-tablet.jpg')",
        'desktop-bg': "url('/images/home/background-home-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
