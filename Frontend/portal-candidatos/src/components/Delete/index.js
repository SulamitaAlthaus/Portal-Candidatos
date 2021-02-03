import React from 'react';
import * as S from './styles';
import api from '../../services/api';

function Delete({id}) {
    
    async function deleteCandidate() {
        await api.delete(`/new/${id}`)
        .then(
            alert("O usuário foi deletado"),
            window.location.reload()
        )
    }

    return (
            <S.Button onClick={deleteCandidate}>Delete</S.Button>
    )
}
export default Delete;