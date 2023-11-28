// import { useState } from "react"
import React from 'react'

export const UserPost = () => {

  const [username, setUserame] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit(event){
    event.preventDefault()

    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    }).then(response => {
      console.log(response)
      return response.json
    }).then(json => {
      console.log(json)
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
        placeholder="email"
        value={email}
        onChange={({target}) => setEmail(target.value)}
      />
      <input 
        type="text" 
        placeholder="password"
        value={password}
        onChange={({target}) => setPassword(target.value)}
      />
      <button>Enviar</button>

    </form>
  )
}
