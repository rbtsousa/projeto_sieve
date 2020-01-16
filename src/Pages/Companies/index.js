import React from 'react';
import { HeaderStyled, NavStyled, Aside, Main, Location, Instituicao } from './styles'
import { FaCircle } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'
import {IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Perfil from './Components/Perfil/index'
import NewProcess from './Components/NewProcess/index'
import ProcessMade from './Components/ProcessesMade/index'

export default function Companies() {
    const [index, setIndex] = React.useState(<Perfil/>);

    return (
        <>
            <HeaderStyled><span>Sieve</span><Location><FiClock color="white" /><span>19:49 Rio de Janeiro, 20 Dezembro 2019</span></Location><Link to='/'><img src="https://i.imgur.com/o8iljSt.png" alt= 'sair'/></Link></HeaderStyled>
            <Aside>
                <NavStyled>
                    <div className="navegacao">
                        <img className="Perfil"src="https://i.imgur.com/w9Xi7YB.png" alt="" />
                        <h1>Recode</h1>
                        <ul>
                            <Instituicao>
                                <li>
                                    2 processos ativos <IoIosArrowDown size="10px" />
                                </li>
                            </Instituicao>
                            <ul>
                                <li>
                                    <FaCircle size="10" color="#EBAF15" /><span>Processo seletivo pendente</span>
                                </li>
                            </ul>
                        </ul>
                        <ul>
                            <li onClick={() => setIndex(<Perfil/>)}><img src="https://i.imgur.com/DHnyhVd.png" alt="perfil"/><span>Perfil</span></li>
                            <li onClick={() => setIndex(<NewProcess/>)}><img src="https://i.imgur.com/XfcNFaD.png" alt='novo processo' width="5px"/><span>Novo Processo</span></li>
                            <li onClick={() => setIndex(<ProcessMade/>)}><img src="https://i.imgur.com/DQVSFy9.png" alt="processos feitos"/><span>Processos Feitos</span></li>
                            <li><Link to="/" ><img src="https://i.imgur.com/o8iljSt.png" alt= 'sair'/><span>Sair</span></Link></li>
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

