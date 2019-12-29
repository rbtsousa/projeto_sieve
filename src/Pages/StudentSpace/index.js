import React from 'react';
import { HeaderStyled, NavStyled, Estado, Aside, Main, Location, Instituicao } from './styles'
import { GiExitDoor, GiBookshelf } from 'react-icons/gi'
import { FaCircle } from 'react-icons/fa'
import { GoPerson } from 'react-icons/go'
import { FiClock } from 'react-icons/fi'
import { IoIosListBox, IoIosArrowDown } from 'react-icons/io'
import {Link} from 'react-router-dom'
export default function StudentSpace() {
    const[index,setIndex] = React.useState(<h1>home</h1>);

    return (
        <>
            <HeaderStyled><span>Sieve</span><Location><FiClock color="white" /><span>19:49 Rio de Janeiro, 20 Dezembro 2019</span></Location><GiExitDoor size="35px" color="fff" /></HeaderStyled>
            <Aside>
                <NavStyled>
                    <div class="navegacao">
                        <img src="https://i.imgur.com/wEfFj6B.png" alt="" />
                        <h1>José Luciano</h1>
                        <ul>
                            <Instituicao>
                                <li>
                                    Recode Pro <IoIosArrowDown size="10px" />
                                </li>
                            </Instituicao>
                            <Estado>
                                <li>
                                    <FaCircle size="10" color="#EBAF15" /><span>Processo seletivo pendente</span>
                                </li>
                            </Estado>
                        </ul>
                        <ul>
                            <li onClick={()=>setIndex(<h1>perfil</h1>)}><GoPerson size="25px" /><span>Perfil</span></li>
                            <li onClick={()=>setIndex(<h1>Avaliações</h1>)}><IoIosListBox size="25px" /><span>Avaliações</span></li>
                            <li onClick={()=>setIndex(<h1>cursos</h1>)}><GiBookshelf size="25px" /><span>Cursos</span></li>
                            <li><Link to="/" exact><GiExitDoor size="25px" /><span>Sair</span></Link></li>
                        </ul>
                    </div>
                </NavStyled>
                <Main>
                {index}
            </Main>
              </Aside>
            
        </>
    );
}

