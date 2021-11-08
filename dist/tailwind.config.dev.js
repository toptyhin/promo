"use strict";

var colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan
      }
    }
  },
  variants: {},
  plugins: [],
  purge: ['./*.html']
};