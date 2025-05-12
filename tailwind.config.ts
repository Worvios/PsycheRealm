import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary colors
        'primary': {
          light: '#2E1A47', // Deep indigo
          dark: '#F2ECE4', // Ivory
        },
        // Accent colors
        'accent': {
          light: '#4B7D76', // Muted teal
          dark: '#8884A3', // Soft violet-gray
        },
        // Text colors
        'text': {
          light: '#1A1425', // Darker indigo for better contrast
          dark: '#F2ECE4', // Ivory
          muted: {
            light: '#4A4453', // Muted indigo
            dark: '#C5C1D0', // Muted ivory
          }
        },
        // Background colors
        'background': {
          light: '#F2ECE4', // Ivory
          dark: '#1A1425', // Darker indigo
          alt: {
            light: '#E8E2D9', // Lighter ivory
            dark: '#2A1F35', // Slightly lighter indigo
          }
        },
        // Border colors
        'border': {
          light: 'rgba(46, 26, 71, 0.1)', // Transparent indigo
          dark: 'rgba(242, 236, 228, 0.1)', // Transparent ivory
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(46, 26, 71, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(46, 26, 71, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 