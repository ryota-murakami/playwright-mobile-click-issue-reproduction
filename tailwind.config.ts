import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        'primary-dark': 'hsl(188.864, 45%, 38%)', // #35808D
        'primary-dark-focus': 'hsla(189, 45%, 23%, 1)',
        'primary-dark-disabled': 'hsl(189, 28%, 63%, 1)',
        'primary-content': 'hsl(100, 100%, 100%)', // #ffffff
        'warning-dark': 'hsla(32, 94%, 45%, 1)',
        border: 'hsla(240, 5%, 84%, 1)',
        'border-dark': 'hsla(0, 0%, 67%, 1)',
        icon: 'hsla(0, 0%, 67%, 1)',
        disabled: 'hsla(240, 5%, 65%, 1)',
        text: 'hsl(240, 4%, 16%)', // #27272a
        'text-disable': 'hsl(240, 5%, 65%)', // #a1a1aa
        'text-light': 'hsl(240, 4%, 46%)', // #71717a
        'text-link': 'hsl(221.212, 83%, 53%)', // #2563eb
        background: 'hsl(0, 0%, 98%)', // #FAFAFA
        'gray-dark': 'hsl(240, 5%, 34%)', // #52525b
        gray: 'hsl(240, 5%, 84%)', // #d4d4d8
        'gray-light': 'hsl(240, 5%, 96%)', // #f4f4f5
        red: 'hsl(349.724, 89%, 60%)', // #f43f5e
        orange: 'hsl(24.581, 95%, 53%)', // #f97316
        blue: 'hsl(217.219, 91%, 60%)', // #3b82f6
        Lime: 'hsl(83.736, 81%, 44%)', // #84cc16
        'frame-base': 'hsl(0, 0%, 100%)', // #ffffff
      },
      spacing: {
        none: '0px',
        xxxs: '4px',
        xxs: '8px',
        xs: '16px',
        s: '24px',
        m: '32px',
        l: '40px',
        xl: '48px',
        xxl: '64px',
      },
    },
  },
  plugins: [require('daisyui')],
}
export default config
