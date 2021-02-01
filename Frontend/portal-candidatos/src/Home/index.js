import React from 'react';
import * as S from "./styles";

function Home() {
    return (
        <S.Container>
            <S.Title>Candidatos</S.Title>
            <S.BoxUser>
                <S.Avatar/>
                <S.User>Fulano</S.User>
                <S.Logout>Sair</S.Logout>
            </S.BoxUser>
            <S.ListCandidates placeholder="Filtrar candidatos por tecnologias" />
            <S.NewCandidate>+ Adicionar Candidato</S.NewCandidate>
        </S.Container>
    )
}

export default Home;


