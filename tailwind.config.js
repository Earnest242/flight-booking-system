// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    colors: {
      bg: "f9fafb",
      "main-bg": "#f3f4f6",
      "side-bg": "#1f2937",
      "top-bg": "#ffffff",
      "main-color": "#111827",
      "secondary-color": "#9ca3af",
      "main-color-light": "#e5e7eb",
      "accent-color": "#6366f1",
      "active": "#d1fae5",
      "inactive": "#fef3c7"
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-reverse': 'spin 3s linear infinite reverse',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
