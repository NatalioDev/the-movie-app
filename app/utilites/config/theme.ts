import { Theme } from "../types/theme";

export const lightTheme: Theme = {
    name: 'light',
    colors:{
        background: '#ffffff',
        text: '#000000',
    },
};

export const darkTheme: Theme = {
    name: 'dark',
    colors:{
        background: '#1a202c',
        text: '#ffffff',
    },
};

export const themes = {
    light: lightTheme,
    dark: darkTheme,
}