import { atom, selector } from "recoil";
import { Colors, defaultTheme as ThemeDefaultEvergreen, Theme } from "evergreen-ui";

type ThemeKind = "light" | "dark";

type CustomTheme = Theme & {
    customComponents: {
        body: {
            backgroundColor: Colors
        },
        toolbar: {
            color: Colors
        }
    }
};

type ThemeList = {
    [key in ThemeKind]: CustomTheme;
}

const defaultTheme = ThemeDefaultEvergreen as any;
console.log(defaultTheme);
const Themes: ThemeList = {
    light: {
        ...defaultTheme
    },
    dark: {
        ...defaultTheme,
        customComponents: {
            body: {
                backgroundColor: "#3C4555"
            },
            toolbar: {
                backgroundColor: "#2F3847"
            }
        },
        components: {
            ...defaultTheme.components,
            Dialog: {
                ...defaultTheme.components.Dialog,
                baseStyle: {
                    backgroundColor: "#2F3847",
                }
            },
            Heading: {
                ...defaultTheme.components.Heading,
                baseStyle: {
                    ...defaultTheme.components.Heading.baseStyle,
                    color: "#fff",
                },
            },
            Text: {
                ...defaultTheme.components.Text,
                baseStyle: {
                    ...defaultTheme.components.Text.baseStyle,
                    color: "white",
                }
            },
            Label: {
                ...defaultTheme.components.Label,
                baseStyle: {
                    ...defaultTheme.components.Label.baseStyle,
                    color: "white",
                }
            },
            Link: {
                ...defaultTheme.components.Link,
                baseStyle: {
                    ...defaultTheme.components.Link.baseStyle,
                    color: "gray300",
                    _hover: {
                        color: "#fff",
                    }
                }
            },
            Input: {
                ...defaultTheme.components.Input,
                appearances: {
                    ...defaultTheme.components.Input.appearances,
                    default: {
                        backgroundColor: "#2F3847",
                        color: "white",
                    }
                }
            },
            Button: {
                ...defaultTheme.components.Button,
                appearances: {
                    ...defaultTheme.components.Button.appearances,
                    minimal: {
                        backgroundColor: "transparent",
                        color: "white",
                        _hover: {
                            backgroundColor: "#2F3847",
                            color: "white",
                        },
                        _active: {
                            backgroundColor: "#2F3847",
                            color: "white",
                        }
                    }
                }
            },
            MenuItem: {
                ...defaultTheme.components.MenuItem,
                baseStyle: {
                    ...defaultTheme.components.MenuItem.baseStyle,
                    color: "white",
                    _hover: {
                        color: "#fff",
                    }
                },
                appearances: {
                    ...defaultTheme.components.MenuItem.appearances,
                    default: {
                        ...defaultTheme.components.MenuItem.appearances.default,
                        backgroundColor: "#2F3847",
                        color: "white",
                        _hover: {
                            backgroundColor: "#3C4555",
                            color: "white",
                        },
                        _active: {
                            backgroundColor: "#3C4555",
                        },
                        _focus: {
                            backgroundColor: "#3C4555",
                            color: "white"
                        },
                    }
                }
            }
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