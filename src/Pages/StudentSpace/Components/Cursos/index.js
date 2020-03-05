import React,{useEffect,useState} from 'react';
import { Container, Curso, Conteudo } from './styles'
import api from '../../../../services/api'

export default function Cursos() {
    const [schools,setSchools]= useState([])
    const [main,setMain] = useState()

    useEffect(()=>{
        async function loadSchools(){
            const response = await api.get('school')
            console.tron.log(response)
            setSchools(response.data)
        }
        
        loadSchools()
    },[]);

    return (
        <Container>
            <ul>
                <li>
                    {schools.map(school=>(
                        <Curso>
                        <div><img src="https://i.imgur.com/w9Xi7YB.png" alt="nome curso" /><span>Recode</span></div>
                        <ul>
                            <span>{school.name}</span>
                            <li>Inscrições abertas</li>
                            <button onClick={()=>setMain(school.content)}>Mais detalhes</button>
                        </ul>
                    </Curso>
                    ))}         
                </li>
    

    </ul>
    <Conteudo>
        <h1>Curso Recode-Pro</h1>
        <p>{main}</p>

        <ul>
            <li><h2>Requisitos:</h2></li>
            <li>Idade: maior de 18 e menor de 29.</li>
            <li>Escolaridade: Ensino Médio</li>
            <li>Desafio: Prova de logica de programação</li>
        </ul>

<div className="Submetedores">
   <div><img src="https://i.imgur.com/In782Oq.png" alt="entrevista"/><span>Marcar Entrevista</span></div>

   <div><img src="https://i.imgur.com/TzjAvpB.png" alt="Prova"/><span>Fazer Prova</span></div>
</div>
    </Conteudo>
        </Container>
    );
}
