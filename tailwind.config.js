/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,tsx,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: "rgba(142, 141, 141, 0.15)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sequel: ["Sequel Sans", "sans-serif"],
      },
      backgroundImage: {
        customGradient: [
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #EFF7FF 100%), linear-gradient(166.74deg, #00050A 9.53%, #002547 99.94%)",
        ],
        product: ["linear-gradient(180deg, #FFFFFF 0%, #E1F4FF 100%)"],
        bckgrd:['linear-gradient(126.13deg, #FFFFFF 14.38%, rgba(226, 242, 255, 0.86) 74.7%, #ECF7FF 100.68%)'],
      },
      zIndex: {
        "-10": "-10",
      },
      spacing: {},
      borderRadius: {
        lgi: "19px",
      },
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
};
