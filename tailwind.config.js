module.exports = {
  content: ["./index.html","./client.html"],
  theme: {
    extend: {
      boxShadow: {
        'inner1' : 'inset 0 1px 4px rgba(0, 0, 0, 0.25)'
      },
      backgroundImage: {
        'humvee': "url('https://desque.sfo3.cdn.digitaloceanspaces.com/homelandep/Homeland_Home_Humvee3.png')",
        'city': "url('https://desque.sfo3.cdn.digitaloceanspaces.com/homelandep/Homeland_Home_City.png')",
      },
      colors: {
        'hlblue': '#020C6A',
        'hlred': '#FF2A13'
      },
      height: {
        '50vh': '50vh',
        '8h': '800px',
        '285': '285px',
        '7h': '700px',
        '5h5': '550px',
      },
      width: {     
        '560': '560px',
      }
    },
  },
  plugins: [],
}
