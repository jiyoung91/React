import { useState } from 'react'

export const LoggenIn = ()=>{
    const [ isLoggenIn, setIsLoggenIn] = useState(false)
    const handleLogin =()=>{
        setIsLoggenIn(true)
    }
    const handleLogout =()=>{
        setIsLoggenIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggenIn? 'logged in':'logged out'} </div>
        </div>
    )
}