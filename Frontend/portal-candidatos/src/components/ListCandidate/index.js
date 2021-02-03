import React, { useEffect } from 'react';
import * as S from './styles';
import DeleteCandidate from '../Delete'

function ListCandidate({ id, nome, email, idade, url, tecnologias }) {
    
    return (
        <tr>
            <td>{nome}</td>
            <td>{email}</td>
            <td>{idade}</td>
            <td>{url}</td>
            <td>{tecnologias.toString()}</td>
            <DeleteCandidate id={id}/>
            <S.Button >Editar</S.Button>
        </tr>
    )
}
export default ListCandidate;

