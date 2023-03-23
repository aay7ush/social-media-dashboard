/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        "instagram-1": " hsl(37, 97%, 70%)",
        "instagram-2": "hsl(329, 70%, 58%)",
        youtube: "hsl(348, 97%, 39%)",
        "dark-toggle-1": "hsl(210, 78%, 56%)",
        "dark-toggle-2": "hsl(146, 68%, 55%)",
        "light-toggle": "hsl(230, 22%, 74%)",
        "dark-blue-600": "hsl(232, 19%, 15%)",
        "dark-blue-800": "hsl(230, 17%, 14%)",
        "desaturated-blue-400": "hsl(228, 34%, 66%)",
        "desaturated-blue-500": "hsl(228, 26%, 27%)",
        "desaturated-blue-600": "hsl(228, 28%, 20%)",
        "pale-blue": "hsl(225, 100%, 98%)",
        "grayish-blue-200": "hsl(227, 47%, 96%)",
        "grayish-blue-400": "hsl(232, 33%, 91%)",
        "grayish-blue-600": "hsl(228, 12%, 44%)",
      },
    },
  },
  plugins: [],
}
