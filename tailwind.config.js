module.exports = {
  content: ["./index.html","./client.html"],
  theme: {
    extend: {
      backgroundImage: {
        'humvee': "url('https://desque.sfo3.digitaloceanspaces.com/kevin/Homeland_Home_Humvee3.png')",
        'city': "url('https://desque.sfo3.digitaloceanspaces.com/kevin/Homeland_Home_City.png')",
      },
      colors: {
        'hlblue': '#020C6A',
      },
      height: {
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
