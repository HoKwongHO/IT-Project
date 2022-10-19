import React, { createContext } from 'react'
import { useContext,useState } from 'react'

const Context = createContext();

export const useThemeContext = () => useContext(Context)

const ThemContext = ({children}) => {

    const [theme,setTheme] = useState('light');
    const toggle = () =>{
        if(theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
  return (
    <Context.Provider value={{
        theme,
        toggle
    }}>
        {children}
    </Context.Provider>
  )
}

export default ThemContext