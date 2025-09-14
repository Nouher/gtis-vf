module.exports = {
  theme: {
    extend: {
       colors: {
        primary: "#1D1E7A",    // <- your primary
        secondary: "#F59E0B",  // <- recommended secondary
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