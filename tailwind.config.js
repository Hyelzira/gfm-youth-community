content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
]

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js (Required for font-algerian to work)
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        algerian: ['Algerian', 'sans-serif'], // Defines the font-algerian class
      },
    },
  },
  // ...
}