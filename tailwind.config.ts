import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#8B0000',
          50: '#585858',
          90: '#141414',
        },
        black: {
          100: '#cc5c5c',
          90: '#9A4165',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        'bg-contact': "url('/contactFhone.png')",
        pattern: "url('/avto-logo1.png')",
        'pattern-2': "url('/avto-logo.jpg')",
        'pattern-3': "url('/mers.png')",
      },
      screens: {
        xxs: '390px',
        xxs2: '424px',
        xs: '500px',
        xs2: '718px',
        md1: '830px',
        md2: '924px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
export default config;
