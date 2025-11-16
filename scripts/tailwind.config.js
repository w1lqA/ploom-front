tailwind.config = {
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: '#0f0f0f',
                    card: '#00000060',
                    input: '#171D30',
                    hover: '#222222',
                    border: '#303A58',
                    'text-primary': '#ffffff',
                    'text-secondary': '#ffffff70'
                },
                accent: '#F0894E'
            },
            fontFamily: {
                'gilroy': ['Gilroy', 'sans-serif'],
                'sans': ['Inter', 'Gilroy', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif']
            },
            animation: {
                'slide-up': 'slideUp 0.4s ease forwards',
                'slide-down': 'slideDown 0.4s ease forwards',
            },
            keyframes: {
                slideUp: {
                    '0%': { transform: 'translateX(-50%) translateY(100px)' },
                    '100%': { transform: 'translateX(-50%) translateY(0)' }
                },
                slideDown: {
                    '0%': { transform: 'translateX(-50%) translateY(0)' },
                    '100%': { transform: 'translateX(-50%) translateY(100px)' }
                }
            },
            backgroundImage: {
                'gradient-custom': 'linear-gradient(180deg, #0A0D16 12.18%, #38497C 113.43%)',
            }
        }
    }
}