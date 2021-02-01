import React from 'react';
import * as S from './styles';

function ListCandidate({nome, email, idade, url, tecnologias}){
    return(
        <S.Container>
            <S.Text>{nome}</S.Text>
            <S.Text>{email}</S.Text>
            <S.Text>{idade}</S.Text>
            <S.Text>{url}</S.Text>
            <S.Text>{tecnologias}</S.Text>
        </S.Container>
    )
}
export default ListCandidate;