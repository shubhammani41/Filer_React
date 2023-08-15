const themeObjLight = {
    palette: {
        mode: 'light',
        primary: {
            main: '#a20026',
            contrastText: '#ffffff !important',
            light: '#b93554',
            dark: '#6d0018',
        },
        secondary: {
            main: '#00f508',
            light: '#53ff59',
            dark: '#009604',
            contrastText: 'rgba(0,0,0,0.87)',
        },
        text: {
            primary: 'rgba(0,0,0,0.87)',
        },
        error: {
            main: '#ff0004',
            light: '#ff4144',
            dark: '#a60001',
            contrastText: '#ffffff',
        },
        info: {
            main: '#2299f7',
            light: '#4faffb',
            dark: '#186eb1',
            contrastText: '#ffffff',
        },
        success: {
            main: '#00ff0a',
            light: '#40ff48',
            dark: '#00a406',
            contrastText: 'rgba(0,0,0,0.87)',
        }
    },
    typography: {
        fontFamily: 'Roboto',
        allVariants: {
            color: "rgba(0,0,0,0.87)"
        },
    },
    cardheadercontent: {
        fontFamily: 'Popins',
        color:"#ffffff"
    },
}
const themeObjDark = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#a20026',
            contrastText: '#ffffff',
            light: '#b93554',
            dark: '#6d0018',
        },
        secondary: {
            main: '#00f508',
            light: '#53ff59',
            dark: '#009604',
            contrastText: 'rgba(0,0,0,0.87)',
        },
        text: {
            primary: 'rgba(0,0,0,0.87)',
        },
        error: {
            main: '#ff0004',
            light: '#ff4144',
            dark: '#a60001',
            contrastText: '#ffffff',
        },
        info: {
            main: '#2299f7',
            light: '#4faffb',
            dark: '#186eb1',
            contrastText: '#ffffff',
        },
        success: {
            main: '#00ff0a',
            light: '#40ff48',
            dark: '#00a406',
            contrastText: 'rgba(0,0,0,0.87)',
        }
    },
    typography: {
        fontFamily: 'Roboto',
        allVariants: {
            color: "#ffffff"
        },
    },
}

export {themeObjLight, themeObjDark}