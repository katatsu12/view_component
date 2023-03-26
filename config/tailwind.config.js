const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/components/**/*.html.erb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      animation: {
        'bounce-short': 'bounce 1s ease-in-out 5'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/container-queries'),
  ]
}
