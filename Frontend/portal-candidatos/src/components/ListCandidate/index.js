import React, { useState } from 'react';
import * as S from './styles';
import api from '../../services/api';
import EditCandidate from '../EditCandidate';


function ListCandidate({ id, nome, email, idade, url, tecnologias }) {
    const [isModalVisible, setIsModalVisible] = useState(false)
    
    async function deleteCandidate() {
        const res = window.confirm('Deseja realmente remover o candidato?')
        if (res == true) {
        await api.delete(`/new/${id}`)
        .then(
            alert("O usuário foi deletado"),
            window.location.reload()
        )
    }}

    return (
        <tr>
            <td><S.Row>{nome}</S.Row></td>
            <td><S.Row>{email}</S.Row></td>
            <td><S.Row>{idade}</S.Row></td>
            <td><S.Row><a href={("https://www.linkedin.com/in/"+{url}+"/")}>{url}</a></S.Row></td>
            <td><S.Row>{tecnologias.join(', ')}</S.Row></td>
            <td><S.Row><S.Button onClick={deleteCandidate}>Delete</S.Button></S.Row></td>
            <button onClick={() => setIsModalVisible(true)}>Editar</button>
            {isModalVisible ? <EditCandidate id={id} nome={nome} email={email} idade={idade} url={url} tecnologias={tecnologias}
            onClose={() => setIsModalVisible(false)} /> : null}
        </tr>
    )
}
export default ListCandidate;

