import { useState } from "react";
import styles from './Counter.module.scss'

 const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  return (
    <div className={styles.root}>
      <h1>{count}</h1>
      <button onClick={increment}>inc()</button>
    </div>
    
  )
}

export default Counter;