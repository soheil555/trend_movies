import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html{
        &::-webkit-scrollbar{
            width:5.5rem;
        }
    }

    body{
        font-family: 'Poppins', sans-serif;
        width: 100%;
    }

    h2{
        font-size: 3rem;
        font-weight: lighter;
    }

    h3{
        font-size: 1.5rem;
        font-weight: lighter;
    }

    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #334756;
    }

    a{
        text-decoration: none;
        color: #334756;
    }


`;

export default GlobalStyle;
