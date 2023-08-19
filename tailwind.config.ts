import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      keyframes: {
        download: {
          '0%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(10%)' },
          '100%': { transform: 'translatey(0%)'},
        },
      },

      animation: {
        'download-icon': 'download .5s linear'
      },
    },
  },
  plugins: [],
}
export default config
