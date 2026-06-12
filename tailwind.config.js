/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",     // App Router 폴더
        "./components/**/*.{js,ts,jsx,tsx,mdx}", // 컴포넌트 폴더
    ],
    theme: {
        extend: {
            screens: {
                'pc': '1366px',
            },
            colors: {
                'blue': '#0066ff',
            },
            fontFamily: {
                "notosans": ["Noto Sans KR", "sans-serif"],
            },
        },
    },
    plugins: [],
}