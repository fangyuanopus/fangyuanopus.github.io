import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
  toggleTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "one_space_theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const storedTheme = typeof window !== "undefined" ? localStorage.getItem(storageKey) : undefined
    return storedTheme === "dark" || storedTheme === "light" ? storedTheme : defaultTheme
  })

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    // let newTheme = theme
    // if (theme === "system") {
    //   newTheme = window.matchMedia("(prefers-color-scheme: dark)")
    //     .matches
    //     ? "dark"
    //     : "light"
    // }

    root.classList.add(theme)
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setThemeState(theme)
    },
    toggleTheme: () => {
      setThemeState((currentTheme) => currentTheme === "dark" ? "light" : "dark")
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("The useTheme must be used in the ThemeProvider")

  return context
}
