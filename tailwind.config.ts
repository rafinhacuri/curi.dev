import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollHorizontal: {
          '0%': { transform: 'translateX(0)' },
          '90%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        scrollHorizontal: 'scrollHorizontal 6s linear infinite',
      },
    },
  },
  plugins: [],
}
