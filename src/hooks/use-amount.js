import {useState} from 'react'

export default function useAmount(initialCount = 0) {
  const [amount, setAmount] = useState(initialCount)

  const decrement = () => setAmount(amount >0 ? amount - 1 : 0)
  const increment = () => setAmount(amount + 1)

  return {amount, decrement, increment}
}
