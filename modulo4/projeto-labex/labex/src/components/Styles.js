import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
    }
    body{
        width:100%;
        font-family:Arial, Helvetica, sans-serif;
    }
`;

export const Cabecalho = styled.div`
    background-color:pink;
    padding: 0.5em 2em;
    display:flex;
    justify-content:space-between;
    align-items:center;
    img{
        width:6vw;
        border-radius:50%;
        transition:1s;
        cursor: pointer;
        &:hover{
            transform:scale(1.2);
        }
    }
    ul{
        list-style:none;
        display:flex;
        gap:0 1em;
    }
    li{
        cursor: pointer;
        padding:1em;
        background-color:#000;
        color:#fff;
        border-radius:30%;
        transition: 0.5s ;
        &:hover{
            color:gold;
            transform:scale(1.1);
        }
    }
`;
export const Container = styled.div`
    width:100%;
    height:100vh;
    overflow:hidden;
`;
export const ContainerHomePage = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:0.5em;
    background-color:pink;
    img{
        margin-bottom:0.5em;
        border-radius:50%;
        width:10vw;
    }
    p{
        background-color:white;
        padding:0.5em;
        border: 1px solid black;
        transition:0.5s;
        cursor: pointer;
        border-radius:10%;
        &:hover{
            transform:scale(1.1);
            box-shadow:1px 1px 10px #000;
        }
    }
`;
export const ContainerLTP = styled.div`
    margin-top:5%;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1em;
    section{
        width:40%;
        padding:1em;
        border-radius:10px;
        box-shadow:1px 1px 10px 4px #ccc;
    }
    p{
        padding:0.5em 1em;
        span{
            color:#ff6f9c;
            font-weight:bold;
        }
    }
    button{
        margin:1.5em;
        padding:0.5em;
        border-radius:10px;
        cursor:pointer;
    }
`;

export const ContainerLoginPage = styled.div`
    background-color:pink;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100vh;
    gap:1em;
    img{
        width:6em;
        border-radius:50%;
        transition:1s;
        cursor: pointer;
        &:hover{
            transform:scale(1.2);
        }
    }
    form{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:1em;
        input{
            padding:1em;
            width:20vw;
            border:1px solid black;
            border-radius:15px;
        }
        button{
            width:9vw;
            padding:0.5em;
            border-radius:20px;
            border:1px solid black;
            background-color:#FFD9F5;
        }
    }
`;
export const ContainerAdm = styled.div`
    width:100%;
    min-height:90vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    button{
        margin:1.5em;
        padding:0.5em;
        border-radius:10px;
        cursor:pointer;
    }
    div{
        width:50%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:1em;
        box-shadow:1px 1px 3px 1px #ccc;
        padding:0 1.5em;
        cursor: pointer;
        transition:0.3s linear;
        &:hover{
            transform:scale(1.05);
        }
        img{
            cursor: pointer;
            width:2em;
            background-color:pink;
            border-radius:50%;
        }
        p{
            padding:2em 0;
            width:100%;
        }
    }
`;
