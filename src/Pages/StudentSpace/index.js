import React from 'react';
import { HeaderStyled, NavStyled, Aside, Main, Location, Instituicao } from './styles'
import { GiExitDoor, GiBookshelf } from 'react-icons/gi'
import {useSelector} from 'react-redux'
import { FaCircle } from 'react-icons/fa'
import { GoPerson } from 'react-icons/go'
import { FiClock } from 'react-icons/fi'
import { IoIosListBox, IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Cursos from './Components/Cursos/index'
import Perfil from './Components/Perfil/index'
import Avaliacoes from './Components/Avaliacoes/index'


export default function StudentSpace() {
    const [index, setIndex] = React.useState(<Perfil/>);
    const profile = useSelector(state=>state.user.profile)
    

    return (
        <>
            <HeaderStyled><span>Sieve</span><Location><FiClock color="white" /><span>19:49 Rio de Janeiro, 20 Dezembro 2019</span></Location><GiExitDoor size="35px" color="fff" /></HeaderStyled>
            <Aside>
                <NavStyled>
                    <div className="navegacao">
                        <img src="https://i.imgur.com/wEfFj6B.png" alt="" />
                                <h1>{profile.name}</h1>
                        <ul>
                            <Instituicao>
                                <li>
                                    Recode Pro <IoIosArrowDown size="10px" />
                                </li>
                            </Instituicao>
                            <ul>
                                <li>
                                    <FaCircle size="10" color="#EBAF15" /><span>Processo seletivo pendente</span>
                                </li>
                            </ul>
                        </ul>
                        <ul>
                            <li onClick={() => setIndex(<Perfil/>)}><GoPerson size="25px" /><span>Perfil</span></li>
                            <li onClick={() => setIndex(<Avaliacoes/>)}><IoIosListBox size="25px" /><span>Avaliações</span></li>
                            <li onClick={() => setIndex(<Cursos/>)}><GiBookshelf size="25px" /><span>Cursos</span></li>
                            <li><Link to="/" ><GiExitDoor size="25px" /><span>Sair</span></Link></li>
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

