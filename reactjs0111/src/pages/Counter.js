import React from 'react'

function Counter(props) {
  const { total, setTotal } = props
  
  return <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
}

export default Counter