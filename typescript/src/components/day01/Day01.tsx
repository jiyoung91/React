import { Greet } from './Greet';
import { Person } from './Person';
import { PersonList } from './PersonList';
import { Heading } from "./Heading"
import { Oscar } from "./Oscar"
import { Status } from "./Status"
import { Button } from './Button';
import { Input } from './Input';
import { Container } from './Container';

export const Day01 = ()=>{
    const personName ={
        first : 'Bruce',
        last : 'Wayne',
    }
    const nameList =[
      {
        first : 'Bruce',
        last : 'Wayne',
      },
      {
        first : 'Clark',
        last : 'Kent',
      },
      {
        first : 'Princess',
        last : 'Diana',
      },
    ]

    return (
    <div >
      <Greet name="JY" isLoggenIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>

      <hr/>
      <Status status='loading'/>
      <Heading>Placeholder text </Heading>
      <Oscar>
          <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>

      <hr/>
      <Button handleClick={(event,id)=>{
        console.log('button clicked: ',event, id)
      }}/>
      <Input value='' handleChange={event =>console.log(event)}/>

      <hr/>
      <Container styles={{border:'1px solid black', padding:'1rem'}}/>

    </div>
    )
}