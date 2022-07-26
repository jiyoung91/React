import React from 'react';
import { useAxios } from '../hooks/useAxios'

const Test16 = () => {
    // const { data, loading, error } = useAxios('https://jsonplaceholder.typicode.com/posts')
    const { data, loading, error } = useAxios('https://jsonplaceholder.typicode.com/todos')

    return (
        <div>
            <h1>post data list</h1>
            { error? error : null }
            
        </div>
    );
};

export default Test16;