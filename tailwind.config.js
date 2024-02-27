/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      colors: {
        primary: '#242ab',
        secondary: '#808080',
        accent: {
          DEFAULT: '#1cbccf',
          secondary: '#18aabc',
          tertiary: '#90c6cd'
        },
        grey: '#e8f0f1',
      },
      fontFamily: {
        primary: 'poppins'
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px  rgba(8, 70, 78, 0.08)',
        custom1: '0px 0px 30px 0px  rgba(8, 73, 81, 0.06)',
      },
      backgroundImage: {
        services: 'url(../../assets/img/services/bg.svg)',
        testimonials: 'url(../../assets/img/testimonials/bg.svg)',
        departements: 'url(../../assets/img/departements/bg.svg)',
        quoteLeft: 'url(../../assets/img/testimonials/quote-left.svg)',
        testimonials: 'url(../../assets/img/testimonial/quote-right.svg)',
      },
      gap: {
        '4': '1rem',
        '10': '2.5rem',
      },
      padding: {
        'aqil': '5rem'
      }
    },
  },
  plugins: [],
};