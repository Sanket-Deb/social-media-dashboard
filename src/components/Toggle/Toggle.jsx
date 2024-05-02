import React from 'react'
import {useState, useEffect} from "react"
import IOSSwitch from '../Switch/Switch.jsx'

export default function Toggle(){


const [theme, setTheme] = useState()

    const Toggle = () => {
        if( theme == 'dark' ){
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    const maybeTheme =()=>{
        const ThemeLocalStorage = localStorage.getItem('theme')
        const themeSystem = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        return ThemeLocalStorage ?? themeSystem
    }

    useEffect ( () => {

        document.querySelector(':root').dataset.theme = (theme ?? maybeTheme())
        localStorage.setItem('theme',(theme??maybeTheme()))
        setTheme(theme??maybeTheme())

        const useSetTheme = (e)=>{ setTheme(e.matches?'dark':'light')}

        const watchSysTheme = window.matchMedia('(prefers-color-scheme: dark)')

        watchSysTheme.addEventListener ('change', useSetTheme)

        return()=>{
            watchSysTheme.removeEventListener('change', useSetTheme)
        }

    }, [theme] )

      return (
        <>
            <div>
                <IOSSwitch onClick={Toggle}/>
            </div>
        </>
 
      )
    }
    



