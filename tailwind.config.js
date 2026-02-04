module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        h1: ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        h2: ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.015em' }],
        body: ['1rem', { lineHeight: '1.5', letterSpacing: '0em' }],
        button: ['1rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
      },
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
