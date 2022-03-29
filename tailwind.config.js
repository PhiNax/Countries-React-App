module.exports = {
  darkMode: "class",
  content: [
    "./src/*.{js,jsx}",
    "./src/components/*.{js,jsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
