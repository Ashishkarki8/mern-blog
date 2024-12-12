/** @type {import('tailwindcss').Config} */
import * as flowbite from 'flowbite-react/tailwind'; // Import everything

// if the .cjs is used then import be like this=> const flowbitePlugin = require('flowbite/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
      flowbite.content(), // Include Flowbite paths
  ],
  theme: {
    extend: {}, // Extend Tailwind's default theme
  },
  plugins: [flowbite.plugin()], // Use the imported Flowbite plugin
};





