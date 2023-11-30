import React from 'react'
export const UserContext = React.createContext()

export const UserStorage = ({children}) => {

    const [data, setData] = React.useState(null)
    const [login, setLogin] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    async fucntion getUser(token) {
        const {url, options} = USER_GET(token)
        const response = await fetch(url, options)
        const json = await response.json()
        setData(json)
        setLogin(json)
    }


    async function userLogin(username, password) {
        const {url, options} = TOKEN_POST({username, password})
        const tokenRes = await fetch(url, options)
        const {token} = await tokenRes.json()
        window.localStorage.setItem('token', token)
        getUser()

        getUser(token)
    }

    return(
        <UserContext.Provider value={{usuario}}>
            {children}
        </UserContext.Provider>
    )
}