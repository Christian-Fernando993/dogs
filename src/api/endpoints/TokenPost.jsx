// import { useState } from "react"
import React from 'react'

export const TokenPost = () => {

  const [username, setUserame] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [token, setToken] = React.useState('')

  function handleSubmit(event){
    event.preventDefault()

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then(response => {
      console.log(response)
      return response.json
    }).then(json => {
      console.log(json.token)
      return json
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="username"
        value={username}
        onChange={({target}) => setUserame(target.value)}
      />
      <input 
        type="text" 
        placeholder="password"
        value={password}
        onChange={({target}) => setPassword(target.value)}
      />
      <button>Enviar</button>
      <p style={{wordBreak:'break-all'}}>{token}</p>
    </form>
  )
}
