module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#fdd0fd",
                
        "secondary": "#fb9cdb",
                
        "accent": "#f85eab",
                
        "neutral": "#c15bb5",
                
        "base-100": "#000000",
                
        "info": "#2463EB",
                
        "success": "#16A249",
                
        "warning": "#DB7706",
                
        "error": "#DC2828",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
