import { Counter } from "./Counter"
import { LoggenIn } from "./LoggenIn"
import { User } from "./User"

export const Day02 = ()=>{
    return (
        <div>
            <LoggenIn />
            <hr />
            <User /> {/* useState */}
            <hr />
            <Counter /> {/* useReducer */}
            <hr />
            

        </div>
    )
}