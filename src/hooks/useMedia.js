import React, { useState, useEffect } from 'react'

export const useMedia = (queries, values, defaultValue) => {
    const mediaQueryLists = queries.map( q => window.matchMedia(q))

    const getValue = () => {
        const index = mediaQueryLists.findIndex(mqList => mqList.matches)
        return typeof values[index] !== 'undefined' ? values[index] : defaultValue
    }
    const [value, setValue] = useState(getValue)

    useEffect( () => {
        const handler = () => setValue(getValue)

        mediaQueryLists.forEach(mqList => mqList.addListener(handler))

        return () => mediaQueryLists.forEach(mqList => mqList.removeListener(handler))
    }, [])
    return value
}
