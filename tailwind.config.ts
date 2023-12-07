import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "sliver": "#F3F2EF",
        "cream": "#F3EFE5",
        
        "gray-100": "#A9A9A9",
        "gray-200": "#717171",
        "gray-300": "#4D4D4D",
        "gray-400": "#5F5E5D",
        "gray-900": "#1F1F1F",

        "primary": "#FF6F00",
        "secondary": "#FF3939",
      },
      screens: {
        'xs': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1149px',
        '2xl': '1300px',
      }
    },
  },
  plugins: [],
}
export default config
