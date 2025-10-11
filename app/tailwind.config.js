module.exports = {
  theme: {
    extend: {
       colors: {
        primary: {
          DEFAULT: "#1D1E7A", // main brand color
          },    // <- your primary
          secondary: "#F59E0B",  // <- recommended secondary
          tertiary: "#75FA87",  // <- lighter primary
      },
      keyframes: {
        zoomInOut: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        zoomInOut: 'zoomInOut 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};