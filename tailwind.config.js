/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'terminal-red': '#ff5555',
        'terminal-brown': '#cd853f',
        'terminal-white': '#ffffff',
        'terminal-black': '#000000',
      },
      animation: {
        'blink': 'blink 1s infinite',
        'type': 'type 3s steps(40, end)',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        type: {
          'from': { width: '0' },
          'to': { width: '100%' },
        }
      }
    },
  },
  plugins: [],
}
