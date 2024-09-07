import { useEffect } from 'react'

export const useClickOutside = (ref, callback, addEventListener = true) => {
  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback()
    }
  }

  useEffect(() => {
    if (addEventListener) {
      document.addEventListener('click', handleClick)
    }

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [addEventListener])
}