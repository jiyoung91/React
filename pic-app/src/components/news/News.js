import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import {useState, useEffect} from 'react'

const NewsContainer = styled.div`
    width:1400px; margin:15px auto; display:flex;
    flex-wrap:wrap; justify-content:space-between;
`
const Article = styled.article`
    width:300px; border:1px solid #999; margin-bottom:20px;
    padding:10px;
    a{
        text-decoration:none; color:#000;
        h2{
            font-size:20px;margin-bottom:15px, 
            text-overflow:ellipsis; white-space:nowrap;overflow:hidden;
        }
        img{
            width:300px;height:300px;
        }
        p{
            font-size:15px; line-height:1.6
        }
    }
`

const News = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        const url = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=830db6a88ae84005bfcc85ec5e50812f'
        axios.get(url)
            .then(res => setData(res.data.articles))
    },[])
    return (
        <NewsContainer>
            {
                data.map((item,index)=> <Article key={index}>
                    <a href={item.url} target='_blank'>
                        <h2>{item.title} 타이틀</h2>
                        <img src={item.urlToImage} alt={item.title} />
                        <p>{item.description}</p>
                    </a>
                </Article>)
            }
        </NewsContainer>
    );
};

export default News;