import React, { useEffect, useState } from 'react';
import * as S from "./styles";

import api from '../services/api'
import ListCandidate from '../../src/components/ListCandidate'


function Home() {
    const [candidate, setCandidate] = useState([]);

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
            <S.BoxUser>
                <S.Avatar />
                <S.User>Fulano</S.User>
                <S.Logout>Sair</S.Logout>
            </S.BoxUser>
            <S.ListCandidates placeholder="Filtrar candidatos por tecnologias" />
            <S.NewCandidate>+ Adicionar Candidato</S.NewCandidate>
            { candidate.map(c => (
                <ListCandidate nome={c.nome} email={c.email} idade={c.idade} url={c.urlLinkedin} tecnologias={c.tecnologias}/>
            ))}
        </S.Container>
    )
}

export default Home;


