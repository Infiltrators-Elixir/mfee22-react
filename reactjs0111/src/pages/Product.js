import React from 'react'

function Product(props) {
  const { auth } = props
  
  return (
    <>
      <h1>購物商城</h1>
      <p>登入狀態: {auth ? '已經登入' : '未登入'} </p>
    </>
  )
}

export default Product