import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

export const useAxios = (url) => {
    const [data,setData ] = useState([])
    const [loading,setLoading ] = useState(false)
    const [error,setError ] = useState(null)

    useEffect(()=>{
        axios.get(url)
        .then(res=>{
            console.log(res)
            setData(res )
            setError(null)
            setLoading(true)
        })
        .catch(error=>{
            setData([])
            setError('error')
            setLoading(false)
        })

    },[])
    return { data, loading, error }
};
