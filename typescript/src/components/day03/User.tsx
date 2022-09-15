import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = ()=>{
    const userContext = useContext(UserContext)
    const handleLogin =()=>{
        //if(userContext){ //User.tsx 에서 {} as UserContextType 해주면 안써도됨
            userContext.setUser({
                name: 'JY',
                email : 'JY@example.com'
            })
        //}
    }
    const handleLogout =()=>{
        userContext.setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext.user?.name} </div>
            <div>User email is {userContext.user?.email}</div>
        </div>
    )
}