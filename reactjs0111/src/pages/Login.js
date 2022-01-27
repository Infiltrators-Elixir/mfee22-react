import React from 'react'

function Login(props) {
  // auth: bool
  const { auth, setAuth } = props

  return (
    <>
      <button
        onClick={() => {
          setAuth(!auth)
        }}
      >
        {auth ? '登出' : '登入'}
      </button>
    </>
  )
}

export default Login