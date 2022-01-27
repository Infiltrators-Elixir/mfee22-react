import React from 'react'
import Child from './Child'

function Parent(props) {
    return (
    <>
    <Child text="Hello" num={123} />
    <hr />
    <Child/>
    <Child lastName="Chen" firstName="Amy"/>
    </>)
}

export default Parent