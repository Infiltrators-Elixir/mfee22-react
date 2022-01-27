import React from 'react'

function User(props) {
  const { auth } = props

  return (
    <>
      <h1>會員中心</h1>
      <p>登入狀態: {auth ? '已經登入' : '未登入'} </p>
    </>
  )
}

export default User