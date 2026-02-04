module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#9333EA',
        background: '#F3F4F6',
      },
      backgroundImage: {
        'page-gradient': 'linear-gradient(135deg, #E0E7FF 0%, #EEF2FF 100%)',
      },
    },
  },
  plugins: [],
};
