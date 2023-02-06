import { useEffect, useState } from "react";

/**
 * 
 * @param key variable key in localstorage
 * @param initialValue initial value for the key
 * @usage const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
 */
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) { 

  const [value, setValue] = useState<T>(() => {
    const jsonvalue = localStorage.getItem(key)
    if (jsonvalue) {
      if (typeof initialValue === 'function') {
        return (initialValue as () => T)()
      } else {
        return initialValue;
      }
    } else {
      return JSON.parse(jsonvalue!)
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as [T, typeof setValue]
}