import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    >ul{
        border-radius: 5px;
        margin-top: 20px;
        margin-left: 5px;
        border: 1px solid  gray;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.4);
        padding: 5px;
        justify-content: space-between;
        height: 100%;
     >li{
        font-family: Montserrat;
        margin: 10px;
        background: #FFFFFF;
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.4);
        border-radius: 12px;
        border: 1px solid #222D2F;
        list-style: none;
        font-weight: bold;
        img{
            width: 40px;
            margin-right: 8px
            
        }
     }  
    }
    div{
        flex:1;
        background-color: white;
        margin:20px;
        border-radius: 4px;
    }
`

export const Curso = styled.div`
    >div{
        display: flex;
        justify-content: center;
        align-items: center; 
        
     
    }
    ul{
        justify-content: center;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        >span{
            text-align: center;
            margin-bottom: 10px;
            
        }
    }
    li{
        list-style: square;
    
     }
     button{
         padding: 5px;
         border: 5px solid green;
         margin-top: 10px;
         font-size: 20px;
         border-radius: 3px;
         background-color: #FFF; 
     }
`
export const Conteudo = styled.div`
        background: #FFFFFF;
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.4);
        border-radius: 12px;
        border: 1px solid #222D2F;
        text-align: center;
        height: 100%;
        >p{
            text-align: justify;
            margin: 30px;
        }
        ul{
            display: flex;
            flex-direction: column;
            justify-content: center;
            list-style: none;
        }
        table{
            margin: 0 auto;
            td{
                border: 2px solid green;
                
            }
        }
        div{
            border: 2px solid green;
            display: flex;
            img{
                width: 50px;
                margin: 15px;
            }
            >div{
                display: flex;
                align-items: center
            }
        }
        .Submetedores{
            margin-top: 100px;
            div{
                cursor:pointer;
            }
        }
`