/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        display: ['"Sora"', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: '#fff7ef',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
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
          50: '#fff9e6',
          100: '#fff2c2',
          200: '#ffe38a',
          300: '#ffd54d',
          400: '#ffc400',
          500: '#f5b800',
          600: '#d99a00',
          700: '#b37d00',
          800: '#8c6100',
          900: '#6d4b00',
        },
        sea: {
          50: '#e9f1ff',
          100: '#d7e4ff',
          200: '#b0c8ff',
          300: '#84a6ff',
          400: '#5a80ff',
          500: '#2d5bff',
          600: '#2148e6',
          700: '#1a37b8',
          800: '#142b8a',
          900: '#0f2166',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
