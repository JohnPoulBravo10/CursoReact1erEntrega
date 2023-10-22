import React, { useState } from 'react'

const Counter = ({top = 9999,onAdd,text}) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        if(count < top){
            setCount(count + 1)
        }
        
    }
    const decrement = () => {
        if(count >= 1){
            setCount(count - 1)
        }
    }
  return (
    <div>
        <button onClick={increment}>+</button>
        <span>{ count }</span>
        <button onClick={decrement}>-</button>
        <div>
        <button onClick={()=>{onAdd(count)}}>{text}</button>
        </div>
        
    </div>
  )
}
export default Counter
