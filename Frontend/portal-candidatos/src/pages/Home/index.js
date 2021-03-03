import React, { useEffect, useState } from 'react';
import * as S from "./styles";
import api from '../../services/api';
import ListCandidate from '../../components/ListCandidate';
import NewCandidate from '../../components/NewCandidate';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function Home() {
    const [candidate, setCandidate] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    var vet=[]
    const items = [{id: 0,name: 'C#'},
          {id: 1,name: 'Angular'},
          { id: 2,name: 'Mensageria'},
          {id: 3,name: 'Javascript'},
          {id: 4,name: 'React'},
          {id: 5,name: 'PHP'},
          {id: 6,name: 'NodeJS'},
          {id: 7,name: 'Ionic'},
          {id: 8,name: 'Laravel'}]

    

  const handleOnSearch = (item) => {
  for (let i = 0; i < candidate.length; i++) {
      if (candidate[i].tecnologias.includes(item.name)) {
          var id = candidate[i]._id;
          var nome = candidate[i].nome;
          var email = candidate[i].email;
          var idade = candidate[i].idade;
          var urlLinkedin = candidate[i].urlLinkedin;
          var tecnologias = candidate[i].tecnologias;
          vet.push({id,nome,email,idade,urlLinkedin,tecnologias})
          console.log(candidate[i]._id)
      }
  }
  setCandidate(vet)
}


    async function loadCandidates() {
        await api.get(`/new/filter/all`)
            .then(response => {
                setCandidate(response.data) 
                console.log(response.data)
            })
    }

    useEffect(() => {
        loadCandidates()
    }, [])

    return (
        <S.Container>
            <S.Title>Candidatos</S.Title>
            <S.Search>
                <ReactSearchAutocomplete
            items={items}
            onSelect={handleOnSearch}
            placeholder="Pesquisar candidato por tecnologia..."
          />
            </S.Search>
            
            <S.NewCandidate onClick={() => setIsModalVisible(true)}>+ Adicionar Candidato</S.NewCandidate>
            {isModalVisible ? <NewCandidate onClose={() => setIsModalVisible(false)} /> : null}
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Idade</th>
                        <th>Linkedin</th>
                        <th>Tecnologias</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    candidate.map(c => (
                        <ListCandidate
                            key={c._id}
                            id={c._id}
                            nome={c.nome}
                            email={c.email}
                            idade={c.idade}
                            url={c.urlLinkedin}
                            tecnologias={c.tecnologias} />))}


                </tbody>
            </table>
        </S.Container>
    )
}

export default Home;


