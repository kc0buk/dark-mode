import React, { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { useMedia } from './useMedia'

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('displayDarkMode')

    // const prefersDarkMode = userPrefersDarkMode()

    // const enabled =
    //     typeof enabledState !== 'undefined' ?setDarkMode(false) : prefersDarkMode

    // function userPrefersDarkMode() {
    //     return useMedia(['(prefers-color-scheme: dark)', [true], false])
    // }

    // useEffect(
    //     () => {
    //         const className = 'dark-mode'
    //         const element = window.document.body
    //         if (enabled) {
    //             element.classList.add(className)
    //         } else {
    //             element.classList.remove(className)
    //         }
    //     },
    //     [enabled]
    // )

    return [darkMode, setDarkMode]
}