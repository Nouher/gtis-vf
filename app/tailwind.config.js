module.exports = {
  theme: {
    extend: {
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