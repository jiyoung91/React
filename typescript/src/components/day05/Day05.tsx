import { Private } from "./Private"
import { Profile } from "./Profile"
import { Text } from "./Text"


export const Day05 = ()=>{
    return (
        <div>
            <Private isLoggedIn={true} component={Profile} /> {/* component prop */}
            <hr />

            {/* Polymorphic Components */}
            <Text as='h1' size='lg'>Heading </Text>
            <Text as='p' size='md'>Paragraph </Text>
            <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label </Text>
            
        </div>
    )
}