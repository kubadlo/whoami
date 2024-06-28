import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      }
    }
  },
  plugins: []
};
