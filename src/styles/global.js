import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
       
    }

    html, body, #root{
        min-height:100%;
    }
    button{
        cursor: pointer;
    }
`
