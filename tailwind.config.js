/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        display: ['"Sora"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#0c1116',
          900: '#101821',
          800: '#1a2531',
        },
        steel: {
          50: '#f4f6f8',
          100: '#e5ebf1',
          200: '#c8d2de',
          300: '#9db0c6',
          400: '#7087a3',
          500: '#4b6582',
          600: '#384e68',
          700: '#2a3c52',
          800: '#213245',
          900: '#1a2939',
        },
        ember: {
          50: '#fff6ed',
          100: '#ffe9d6',
          200: '#ffd0a7',
          300: '#ffb270',
          400: '#ff8b3a',
          500: '#f96b0b',
          600: '#db5302',
          700: '#b13f05',
          800: '#8c330a',
          900: '#712c0d',
        },
        sea: {
          50: '#e9f7fb',
          100: '#d4eef6',
          200: '#a7dced',
          300: '#75c4e0',
          400: '#3aa4cf',
          500: '#1d84b3',
          600: '#1a6a93',
          700: '#1b5677',
          800: '#1a4762',
          900: '#183b52',
        },
      },
      boxShadow: {
        lift: '0 24px 48px -24px rgba(12, 17, 22, 0.5)',
        soft: '0 12px 24px -16px rgba(12, 17, 22, 0.45)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        reveal: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        reveal: 'reveal 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
