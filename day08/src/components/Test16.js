import React from 'react';
import { useAxios } from '../hooks/useAxios'

const Test16 = () => {
    const { data, loading, error } = useAxios('https://jsonplaceholder.typicode.com/todos')

    return (
        <div>
            <h1>post data list</h1>
            { error? error :  null  }
            {
                data && loading && 'true'
                // && data.map(item=> <p key={item.id}>
                //     {item.id} : {item.title}
                // </p>)
            }
        </div>
    );
};

export default Test16;