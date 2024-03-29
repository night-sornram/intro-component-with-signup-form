import type { Config } from 'tailwindcss'

const { colors : defaultColors  } = require("tailwindcss/defaultTheme")

const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(154, 59%, 51%)",
      "200" : "hsl(248, 32%, 49%)",
      "300" : "hsl(249, 10%, 26%) ",
      "400" : "hsl(246, 25%, 77%)",
      "500" : "hsl(0, 100%, 74%)"
    }
  }
}

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
      colors : colors,
    },
  },
  plugins: [],
}
export default config
