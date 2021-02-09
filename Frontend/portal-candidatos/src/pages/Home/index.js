import React, { useEffect, useState } from 'react';
import * as S from "./styles";
import api from '../../services/api';
import ListCandidate from '../../components/ListCandidate';
import NewCandidate from '../../components/NewCandidate';

function Home() {
    const [candidate, setCandidate] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [filteredCandidates, setFilteredCandidates] = useState(false)
    const [fId, setFId] = useState()
    const [fNome, setFNome] = useState()
    const [fEmail, setFEmail] = useState()
    const [fIdade, setFIdade] = useState()
    const [fUrl, setFUrl] = useState()
    const [fTec, setFTec] = useState([])

    async function loadCandidates() {
        await api.get(`/new/filter/all`)
            .then(response => {
                setCandidate(response.data)
            })
    }

    const findCandidate = (e) => {
        for (let j = 0; j < candidate.length; j++) {
            if (candidate[j].tecnologias.includes(e.target.value)) {
                for (let i = 0; i < candidate.length; i++) {
                    setFilteredCandidates(true);
                    setFId(candidate[i]._id)
                    setFNome(candidate[i].nome)
                    setFEmail(candidate[i].email)
                    setFIdade(candidate[i].idade)
                    setFUrl(candidate[i].urlLinkedin)
                    setFTec(candidate[i].tecnologias)
                }
            } else {
                setFilteredCandidates(false)
            }
        }
    }



    useEffect(() => {
        loadCandidates()
    }, [])

    return (
        <S.Container>
            <S.Title>Candidatos</S.Title>
            <S.BoxUser>
                <S.Avatar />
                <S.User>Fulano</S.User>
                <S.Logout>Sair</S.Logout>
            </S.BoxUser>
            <S.ListCandidates placeholder="Buscar" id="input" className="input" onChange={findCandidate} />
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
                    {candidate.map(c => (
                        <ListCandidate
                            key={filteredCandidates ? fId : c.id}
                            id={filteredCandidates ? fId : c.id}
                            nome={filteredCandidates ? fNome : c.nome}
                            email={filteredCandidates ? fEmail : c.email}
                            idade={filteredCandidates ? fIdade : c.idade}
                            url={filteredCandidates ? fUrl : c.urlLinkedin}
                            tecnologias={filteredCandidates ? fTec : c.tecnologias} />))}


                </tbody>
            </table>
        </S.Container>
    )
}

export default Home;


