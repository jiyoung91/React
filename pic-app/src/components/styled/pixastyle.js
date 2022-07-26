import styled from "styled-components";

export const Container = styled.div`
    width: ${ props  => props.width };
    margin:auto;
`   
export const ImageSearch = styled.form`
    padding:30px; text-align:center;
    input{
        width:400px; height:50px;
        box-sizing:border-box;outline:none;
        padding:0 20px; font-size:16px;
    }
    button{
        width:120px; height:50px; border:none; backgroud:#000;
        color:#fff; vertical-align:top;
    }
`
export const ImageBox = styled.article`
    margin-bottom:40px;box-shadow:5px 5px 10px #efefef;
    padding:15px 15px 35px;
    img{width:100%}
    h2{font-size:30px;color:hotpink;margin-bottom:20px;
    text-transform:uppercase;
    }
    ul{ margin-bottom:25px;
        li{margin-bottom:5px}
    }
    p{
        span{
            display:inline-block; padding:3px 20px; border-radius:15px;
            background:#efefef; margin-right:5px;
        }
    }
`
export const ImageContainer = styled.div`
.my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
}
.my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
}

/* Style your items */
.my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
}
`


