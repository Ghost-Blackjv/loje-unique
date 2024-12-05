module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'brand-orange': '#FF6B00',
          'brand-black': '#1A1A1A',
          'brand-gray': '#F5F5F5'
        },
        fontFamily: {
          'sans': ['Inter', 'system-ui', 'sans-serif']
        }
      },
    },
    plugins: [],
  }