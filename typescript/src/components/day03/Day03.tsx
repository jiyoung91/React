import { Box } from './Box'
import { ThemeContextProvider } from './ThemeContext'
import { User } from './User'
import { UserContextProvider } from './UserContext'

export const Day03 = ()=>{
    return (
        <div>
            <ThemeContextProvider>
                <Box />
            </ThemeContextProvider>
            <hr />
            <UserContextProvider>
                <User />
            </UserContextProvider>
        </div>
    )
}