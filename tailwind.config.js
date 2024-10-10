module.exports = {
    purge: ['./index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage: theme => ({
          'architect': "url('https://www.w3schools.com/w3images/architect.jpg')",
          'house1': "url('https://www.w3schools.com/w3images/house5.jpg')",
          'house2': "url('https://www.w3schools.com/w3images/house2.jpg')",
          'house3': "url('https://www.w3schools.com/w3images/house3.jpg')",
          'house4': "url('https://www.w3schools.com/w3images/house4.jpg')",
          'map': "url('https://www.w3schools.com/w3images/map.jpg')",
        })
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  