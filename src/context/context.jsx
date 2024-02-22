import { createContext, useEffect, useState } from "react";

export const ControlDarkModeContext = createContext()

// eslint-disable-next-line react/prop-types
export const ControlDarkModeProvider = ({children}) => {

    const [theme,setTheme] = useState('light')

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    },[theme])    

    const handleSitchThem = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return(
        <ControlDarkModeContext.Provider value={{
            handleSitchThem
        }}>
            {children}
        </ControlDarkModeContext.Provider>
    )

}
