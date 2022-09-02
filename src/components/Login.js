import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/user'

function Login() {
  const dispatch = useDispatch()
  return (
    <div>
      <button
        onClick={() => { dispatch(login({ name: "Victor", age: 30, email: "@" })) }}
      >
        Login
      </button>
    </div>
  )
}

export default Login;
