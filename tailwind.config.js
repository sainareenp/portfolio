/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        waveBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scrollWords: {
      '0%, 19.99%': { transform: 'translateY(0%)' },
      '20%, 39.99%': { transform: 'translateY(-100%)' },
      '40%, 59.99%': { transform: 'translateY(-200%)' },
      '60%, 79.99%': { transform: 'translateY(-300%)' },
      '80%, 99.99%': { transform: 'translateY(-400%)' },
      '100%': { transform: 'translateY(0%)' }, // loop back to start
    },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-in-out',
        'slide-down': 'slideDown 0.6s ease-in-out',
        'slide-in-right': 'slideInRight 0.6s ease-in-out',
        'spin-slow': 'spin 40s linear infinite',
        'pulse-slow': 'pulse 10s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'wave-bounce': 'waveBounce 1.2s ease-in-out infinite',
        'scroll-words': 'scrollWords 15s steps(1) infinite',
      },
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c8ff',
          300: '#66acff',
          400: '#3390ff',
          500: '#0a66c2',
          600: '#0a59a8',
          700: '#0a4d8f',
          800: '#0a3f75',
          900: '#0a335c',
          950: '#0a192f',
        },
        accent: {
          50: '#eafffd',
          100: '#d5fffa',
          200: '#acfff5',
          300: '#82fff0',
          400: '#64ffda',
          500: '#3ae7c2',
          600: '#1cc39f',
          700: '#0d9d7f',
          800: '#097a62',
          900: '#075c4a',
          950: '#04332a',
        },
        secondary: {
          50: '#f5f5f5',
          100: '#e9e9e9',
          200: '#d9d9d9',
          300: '#c4c4c4',
          400: '#9e9e9e',
          500: '#7b7b7b',
          600: '#555555',
          700: '#434343',
          800: '#262626',
          900: '#171717',
          950: '#0d0d0d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
