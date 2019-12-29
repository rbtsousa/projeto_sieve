import React from 'react';
import { HeaderStyled, NavStyled, Instituicoes, Aside } from './styles'
import { GoChevronRight } from 'react-icons/go'
import {FaCircle} from 'react-icons/fa'
import { GoPerson } from 'react-icons/go'
import { IoIosListBox,IoIosArrowDown } from 'react-icons/io'
import { GiBookshelf } from 'react-icons/gi'
import { MdLocationOn } from 'react-icons/md'
export default function StudentSpace() {
    return (
        <>
            <HeaderStyled><span>Sieve</span><GoChevronRight size="30px" color="fff" /></HeaderStyled>
            <Aside>
            <NavStyled>
                <div><img src="https://i.imgur.com/wEfFj6B.png" alt="" /></div>
                <h1>José Luciano</h1>
                <ul>
                    <li >
                        <FaCircle size="10" color="#EBAF15"/><span>Processo seletivo pendente</span>
                    </li>
                    <Instituicoes>
                        <li>
                         Recode Pro <IoIosArrowDown size="10px"/>
                        </li>
                    </Instituicoes>
                </ul>
                <ul>
                    <li><GoPerson /><span>Perfil</span></li>
                    <li><IoIosListBox /><span>Avaliações</span></li>
                    <li><GiBookshelf /><span>Cursos</span></li>
                </ul>
            </NavStyled>
            <div><MdLocationOn color="green"/><span>Rio de Janeiro, 20 Dezembro 2019</span></div>
            </Aside>
        </>
    );
}

