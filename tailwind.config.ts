import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackColor: "#181818",
        darkGrayColor: "#444444",
        headerBg: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
export default config;
