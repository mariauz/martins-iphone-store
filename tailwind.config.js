module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: { extend: {
    colors: { vinho: "#7A1F26", vinhoEscuro: "#5E171D", cinza: "#8C8C8C" },
    fontFamily: { titulo: ["var(--font-titulo)", "sans-serif"], texto: ["var(--font-texto)", "sans-serif"] },
    keyframes: { marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } } },
    animation: { marquee: "marquee 35s linear infinite" }
  } },
  plugins: []
};
