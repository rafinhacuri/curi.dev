import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(2px, -2px)' },
          '60%': { transform: 'translate(-1px, 1px)' },
          '80%': { transform: 'translate(1px, -1px)' },
          '100%': { transform: 'translate(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollHorizontal: {
          '0%': { transform: 'translateX(0)' },
          '90%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        colorFlow: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        pulseGlow: {
          '0%': { filter: 'drop-shadow(0 0 5px rgba(124, 252, 0, 0.2))' },
          '50%': { filter: 'drop-shadow(0 0 15px rgba(124, 252, 0, 0.6))' },
          '100%': { filter: 'drop-shadow(0 0 5px rgba(124, 252, 0, 0.2))' },
        },
      },
      animation: {
        glitch: 'glitch 0.5s infinite',
        fadeIn: 'fadeIn 1s ease-out',
        scrollHorizontal: 'scrollHorizontal 6s linear infinite',
        scroll: 'scroll 40s linear infinite',
        colorFlow: 'colorFlow 4s linear infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
      backgroundImage: {
        'animated-line': 'linear-gradient(90deg, transparent, #FFD700, #FFA500, #FFD700, transparent)',
      },
      backgroundSize: {
        '200%': '200% 100%',
      },
    },
  },
  plugins: [],
}
