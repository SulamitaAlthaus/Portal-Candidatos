import React from 'react';
import * as S from './styles';
import api from '../../services/api';

const NewCandidate = ({ onClose= () => {}}) => {
    const [nome, setNome] = ''

    const handleOutsideClick = (e) => {
        if(e.target.id === "modal") onClose();
    }
    async function newCandidate() {
        await api.post(`/new`, {
            nome: 'nome', email:"email", idade: 26, urlLinkedin: "urlLinkedin",tecnologias: ["tecnologias"]
        }).then(() => {
                window.location.reload()
                alert("Usuário cadastrado")

            })
    }

    return <S.Modal id="modal" onClick={handleOutsideClick}>
        <S.Container>
            <S.Button onClick={onClose}/>
            <S.Title>Novo Candidato</S.Title>
            <S.Text>Nome: <input value={''}/></S.Text>
            <S.Text>Email: <input value={''}/></S.Text>
            <S.Text>Idade: <input value={''}/></S.Text>
            <S.Text>Linkedin: <input value={''}/></S.Text>
            <S.Text>Tecnologias: <input value={''}/></S.Text>
            <S.Cancel onClick={onClose}>Cancelar</S.Cancel>
            <S.Save onClick={newCandidate}>Salvar</S.Save>
        </S.Container>

    </S.Modal>
    console.log(nome)
}

export default NewCandidate;