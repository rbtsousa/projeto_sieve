import React from 'react';
import { HeaderStyled, NavStyled, Estado, Aside, Main , Location, Instituicao} from './styles'
import { GiExitDoor, GiBookshelf  } from 'react-icons/gi'
import {FaCircle} from 'react-icons/fa'
import { GoPerson } from 'react-icons/go'
import {FiClock} from 'react-icons/fi'
import { IoIosListBox,IoIosArrowDown } from 'react-icons/io'
export default function StudentSpace() {
    return (
        <>
            <HeaderStyled><span>Sieve</span><Location><FiClock color="white"/><span>19:49 Rio de Janeiro, 20 Dezembro 2019</span></Location><GiExitDoor size="35px" color="fff" /></HeaderStyled>
            <Aside>
            <NavStyled>
                <div class= "navegacao">
                <img src="https://i.imgur.com/wEfFj6B.png" alt="" />
                <h1>José Luciano</h1>
                <ul>
                    <Instituicao>
                    <li>    
                    Recode Pro <IoIosArrowDown size="10px"/>
                    </li>        
                    </Instituicao>
                    <Estado>
                        <li>
                        <FaCircle size="10" color="#EBAF15"/><span>Processo seletivo pendente</span>
                        </li>
                    </Estado>
                </ul>
                <ul>
                    <li><GoPerson size= "25px"/><span>Perfil</span></li>
                    <li><IoIosListBox size= "25px"/><span>Avaliações</span></li>
                    <li><GiBookshelf size= "25px"/><span>Cursos</span></li>
                    <li><GiExitDoor size="25px"/><span>Sair</span></li>
                </ul> 
                </div>               
            </NavStyled>
            <Main>
               
            </Main>
           </Aside>  
           
        </>
    );
}

