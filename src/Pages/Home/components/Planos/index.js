import React from 'react';
import {StyledPlanos,PlanosSmall,PlanosGrand,Title, HR} from './styles'
export default function Planos() {
    return (
        <>
             <Title>Planos para Empresa</Title>
            <StyledPlanos>  
                <PlanosSmall>
                    <img src= "https://i.imgur.com/mIeS6qG.png"alt=''/>
                    <hr color= "#C4C4C4"></hr>
                    <span>Starter</span>
                    <ul>
                        <li>Avaliação de perfil</li>
                        <li>Suporte 24hrs</li>
                        <li>Limite de inscritos 500</li>
                    </ul>
                    <button>contrate</button>
                </PlanosSmall>
                <PlanosGrand>
                    <img src= "https://i.imgur.com/nwIYBed.png"alt=''/>
                    <hr color= "#C4C4C4"></hr>
                    <span>Professional</span>
                    <ul>
                        <li>Avaliação de perfil</li>
                        <li>Suporte 24hrs</li>
                        <li>Avaliação Técnica</li>
                        <li>Suporte 24 horas</li>
                        <li>Historico do Candidato</li>
                        <li>Entrevistas</li>
                        <li>Sem limites de Candidatos</li>
                    </ul>
                    <button>contrate</button>
                </PlanosGrand>
                    <PlanosSmall>
                    <img src= "https://i.imgur.com/ImEtr7B.png?1"alt=''/>
                    <hr color= "#C4C4C4"></hr>
                    <span>Platium</span>
                    <ul>
                        <li>Avaliação de perfil</li>
                        <li>Suporte 24hrs</li>
                        <li>Historico do Candidato</li>
                        <li>Limite de inscritos 2000</li>
                    </ul>
                    <button>contrate</button>
                </PlanosSmall>
            </StyledPlanos>
            <HR></HR>
        </>
    );
}
