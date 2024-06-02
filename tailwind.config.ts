import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react"


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        "maincolor" : "#2CB373",
        "seccolor" : "#D5F7E6",
        "bgcolor" : "#F4F4F4",
        "textseccolor" : "#A1BFB1"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes : {
      light : {
        colors : {
          primary : {
            DEFAULT : "#2CB373"
          }
        }
      }
    }
  })],
};
export default config;
