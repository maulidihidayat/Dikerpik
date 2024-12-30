import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}", // Change 'components' to 'Components'
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f35f15',
        secondary: '#1d2c2a', 
        success: '#52525B',
        background: '#18181b',
        text: '#fff', 
        bgaccent:'#ffbbf0',
        bgproduk:'#fee5f8',
        bgproduksekunder:'#ffedd3'
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
} satisfies Config;