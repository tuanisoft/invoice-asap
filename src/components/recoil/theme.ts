import { atom, selector } from "recoil";

type ThemeKind = "light" | "dark";

type Theme = {
    type: "light" | "dark";
    colors: {
        toolbar: string;
        main: string;
        body: string;
        text?: string;
        textPrimary?: string;
        textSecondary?: string;
    }
}

type ThemeList = {
    [key in ThemeKind]: Theme;
}

const Themes: ThemeList = {
    light: {
        type: 'light',
        colors: {
            main: '#FAFBFF',
            toolbar: '#FAFBFF',
            body: '#FFF',
            textSecondary: 'gray'
        }
    },
    dark: {
        type: 'dark',
        colors: {
            main: '#2F3847',
            toolbar: '#2F3847',
            body: '#3C4555',
            text: 'white',
            textPrimary: 'blue300',
            textSecondary: 'gray400'
        }
    }
};

const themeSelected = localStorage.getItem("theme") as ThemeKind || "light";

export const themeKindState = atom<ThemeKind>({
    key: "themeTypeState",
    default: themeSelected
});

export const themeState = atom<Theme>({
    key: 'themeState',
    default: Themes[themeSelected]
});

export const themeSelectorState = selector<ThemeKind>({
    key: 'themeSelectorState',
    get: ({ get }) => {
        const type = get(themeKindState);
        return type;
    },
    set: ({ set }, newValue) => {
        set(themeKindState, (prevState) => {
            const theme = prevState === 'dark' ? 'light' : 'dark';
            localStorage.setItem("theme", theme);
            document.body.classList.remove(prevState);
            document.body.classList.add(theme);
            set(themeState, Themes[theme]);
            return newValue;
        });
    }
});