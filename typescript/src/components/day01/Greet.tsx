type GreetProps = {
    name : string
    messageCount? :number //? : 호출안해도 에러안생김
    isLoggenIn : boolean
}

export const Greet = (props :GreetProps) => {
    const { messageCount = 0 } = props
    return (
        <div>
            <h2>
                {
                    props.isLoggenIn ? `Welcome ${props.name}! You have ${messageCount} unread message ` :
                    'welcome Guest!'
                }
            </h2>
        </div>
    );
};
