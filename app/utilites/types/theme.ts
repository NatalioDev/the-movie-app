export type ThemeName = 'light' | 'dark';

export type ThemeColors = {
    background: string;
    text: string;
    // Agregar mas colores
}

export type Theme = {
    name: ThemeName;
    colors: ThemeColors;
}

export type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}