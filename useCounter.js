import { useState } from "react"

const useCounter = ( initialValue = 10, step = 1 ) => {
    const [counter, setCounter] = useState(initialValue)

    const increment = () => setCounter( (current) => current + step )
    const decrement = () => (counter > 1) && setCounter( (current) => current - step )
    const reset = () => setCounter( initialValue )

  return { counter, setCounter, increment, reset, decrement }
}

export { useCounter }