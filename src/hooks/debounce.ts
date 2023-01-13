import { useState, useEffect } from "react"

export default function useDebounce(value: string, delay: number) {
  // state and setter for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    // set debouncedValue equel value (input value)
    // after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // return creal function, which will be called every time when ...
    // ... useEffect is called. useEffect will be called again, only if ...
    // ... value is changed.
    // It prevent to change debouncedValue, if value is changed ...
    // ...while delay.
    // timeout is cleared and started again.
    return () => {
      clearTimeout(handler)
    }
  }, [delay, value])

  return debouncedValue
}
