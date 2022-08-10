import React from 'react';
import { useFetch } from '../hooks/useFetch'

const Test15 = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos')

    return (
        <div>
            <h1>post data list</h1>
            {
                !loading && <h2>Loading..</h2>
            }
            {
                data && loading && data.map(item=> <p key={item.id}>
                    {item.id} : {item.title}
                </p>)
            }
        </div>
    );
};

export default Test15;