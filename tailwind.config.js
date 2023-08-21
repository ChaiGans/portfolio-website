/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton-Regular", "sans-serif"],
        manropelight: ["Manrope-Light", "sans-serif"],
        manropemed: ["Manrope-Medium", "sans-serif"],
        manropereg: ["Manrope-Regular", "sans-serif"],
        manropebold: ["Manrope-Bold", "sans-serif"],
        manropexb: ["Manrope-ExtraBold", "sans-serif"],
        manropsb: ["Manrope-SemiBold", "sans-serif"],
        poppins: ["Poppins-Regular", "sans-serif"],
        syne: ["Syne-ExtraBold", "sans-serif"],
        synereg: ["Syne-Regular", "sans-serif"],
        synesb: ["Syne-SemiBold", "sans-serif"],
        synemed: ["Syne-Medium", "sans-serif"],
        synebold: ["Syne-Bold", "sans-serif"],
        synexb: ["Syne-ExtraBold", "sans-serif"],
        rubikbold: ["Rubik-Bold", "sans-serif"],
        rubiksb: ["Rubik-SemiBold", "sans-serif"],
        rubikmed: ["Rubik-Medium", "sans-serif"],
        rubikreg: ["Rubik-Regular", "sans-serif"],
        rubiklight: ["Rubik-Light", "sans-serif"],
        rubikxb: ["Rubik-ExtraBold", "sans-serif"],
        poppinsbold: ["Poppins-Bold", "sans-serif"],
        poppinslight: ["Poppins-Light", "sans-serif"],
        poppinsmedium: ["Poppins-Medium", "sans-serif"],
        poppinssb: ["Poppins-SemiBold", "sans-serif"],
      },
      keyframes: {
        slidetopbot: {
          "0%": { transform: "translateY(-200px)" },
          "50%": { transform: "translateY(0px)" },
          "80%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        blob: "blob 5s ease-in-out infinite",
        slidetopbot: "slidetopbot 0.5s ease-in-out",
      },
    },
  },
  plugins: [    function ({ addUtilities }) {
      const blobAnimation = {
        '@keyframes blob': {
          '0%, 100%': {
            'border-radius': '77% 47% 61% 49%',
          },
          '20%': {
            'border-radius': '89% 26% 70% 30%',
          },
          '40%': {
            'border-radius': '56% 93% 56% 94%',
          },
          '60%': {
            'border-radius': '68% 60% 94% 96%',
          },
          '80%': {
            'border-radius': '34% 74% 59% 82%',
          },
        },
      };

      addUtilities(blobAnimation, ['before']);
    },
  ],
};