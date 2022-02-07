module.exports = {
    content: ["./src/**/*.html"],
    theme: {
        fluidSpacing: {
            '100': 'var(--size-100)',
            '200': 'var(--size-200)',
            '300': 'var(--size-300)',
            '400': 'var(--size-400)',
            '500': 'var(--size-500)',
            '600': 'var(--size-600)',
            '700': 'var(--size-700)',
            '800': 'var(--size-800)',
            '900': 'var(--size-900)',
            'lg': 'var(--size-lg)',
            'xl': 'var(--size-xl)',
            'gutter': 'var(--gutter)',
            'container': 'var(--container-padding)',
            '2/3': '66.666667%',
            '10/12': '83.333333%',
            '1/1': '100%',
            '16/9': '56.25%',
            '4/3': '75%',
            '52': '13rem',
            '76': '19rem',
            '96': '24rem',
            'em-0.4': '.4em',
            'em-0.5': '.5em',
            'em-0.6': '.6em',
            'em-0.8': '.8em',
            'em-0.9': '.9em',
            'em-1': '1em',
            'em-1.2': '1.2em',
            'em-1.4': '1.4em',
            'em-1.6': '1.6em',
            'em-1.8': '1.8em',
            'em-2': '2em',
            'em-2.5': '2.5em',
            'em-3': '3em',
            'em-3.5': '3.5em',
            'em-4': '4em',
        },
        extend: {
            padding: theme => theme('fluidSpacing'),
            margin: theme => theme('fluidSpacing'),
            spacing: theme => theme('fluidSpacing'),
            gap: theme => theme('fluidSpacing'),
            fontSize: theme => theme('fluidSpacing'),
            flexGrow: {
                '9': '9999'
            },
            lineHeight: {
                'flat': '1.1'
            },
            borderWidth: {
                'small': '3px',
                'large': 'var(--size-200)',
                'gutter': 'var(--gutter)'
            },
            aspectRatio: { 
                '1/1': '1 / 1',
                '3/1': '3 / 1',
                '3/2': '3 / 2',
                '5/2': '5 / 2',
                '5/3': '5 / 3',
                '16/8': '16 / 8',
            },
            colors: {
                'primary': '#F24210',
                'primary-glare': '#FF5E31',
                'primary-shade': '#E03808',
                'dark': '#36241D',
                'dark-glare': '#453027',
                'dark-shade': '#2E1B1B',
                'light': '#F0EBEA',
                'light-glare': '#FCF7F3',
                'light-shade': '#E7CEC0',
            },
            fontFamily: {
                base: ['Metropolis','Helvetica','Arial','Lucida','sans-serif'],
                heading: ['Metropolis','Helvetica','Arial','Lucida','sans-serif'],
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}