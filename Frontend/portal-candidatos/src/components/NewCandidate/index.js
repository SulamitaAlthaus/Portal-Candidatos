import React, { useState } from 'react';
import * as S from './styles';
import api from '../../services/api';

const NewCandidate = ({ onClose= () => {}}) => {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [idade, setIdade] = useState();
    const [urlLinkedin, setUrlLinkedin] = useState();
    const [tecnologias, setTecnologias] = useState([]);


    const handleOutsideClick = (e) => {
        if(e.target.id === "modal") onClose();
    }

    const addTecnologias = (e) => {
        setTecnologias([...tecnologias, e.target.value])
    }


    async function save() {
        if (!nome)
          return alert("Você precisa preencher o nome")
        else if (!email)
          return alert("Você precisa preencher o email")
        else if (!idade)
          return alert("Você precisa preencher a idade")
        else if (!urlLinkedin)
          return alert("Você precisa preencher o Linkedin")
        else if (!tecnologias)
          return alert("Você precisa escolher uma tecnologia")

        await api.post(`/new`, {
            nome, email, idade, urlLinkedin, tecnologias
        }).then(() => {
                window.location.reload()
                alert("Usuário cadastrado")

            })
    }

    return <S.Modal id="modal" onClick={handleOutsideClick}>
        <S.Container>
            <S.Button onClick={onClose}/>
            <S.Title>Novo Candidato</S.Title>
            <S.Text>Nome: <input type="text" onChange={e => setNome(e.target.value)} value={nome} /></S.Text>
            <S.Text>Email: <input type="email" onChange={e => setEmail(e.target.value)} value={email} /></S.Text>
            <S.Text>Idade: <input type="number" onChange={e => setIdade(e.target.value)} value={idade} /></S.Text>
            <S.Text>Linkedin: <input type="url" onChange={e => setUrlLinkedin(e.target.value)} value={urlLinkedin} /></S.Text>
            <S.Text>Tecnologias: </S.Text>
            <S.Checkbox>
                <input id="C#" type="checkbox" onChange={addTecnologias} value="C#"/>
                <label for="C#">C#</label><br/>
                <input id="Javascript" type="checkbox" onChange={addTecnologias} value="Javascript"/>
                <label for="Javascript">Javascript</label><br/>
                <input id="Nodejs" type="checkbox" onChange={addTecnologias} value="Nodejs"/>
                <label for="Nodejs">Nodejs</label><br/>
                <input id="Angular" type="checkbox" onChange={addTecnologias} value="Angular"/>
                <label for="Angular">Angular</label><br/>
                <input id="React" type="checkbox" onChange={addTecnologias} value="React"/>
                <label for="React">React</label><br/>
                <input id="Ionic" type="checkbox" onChange={addTecnologias} value="Ionic"/>
                <label for="Ionic">Ionic</label><br/>
                <input id="Mensageria" type="checkbox" onChange={addTecnologias} value="Mensageria"/>
                <label for="Mensageria">Mensageria</label><br/>
                <input id="PHP" type="checkbox" onChange={addTecnologias} value="PHP"/>
                <label for="PHP">PHP</label><br/>
                <input id="Laravel" type="checkbox" onChange={addTecnologias} value="Laravel"/>
                <label for="Laravel">Laravel</label><br/>
            </S.Checkbox>
            <S.Cancel onClick={onClose}>Cancelar</S.Cancel>
            <S.Save onClick={save}>Salvar</S.Save>
        </S.Container>

    </S.Modal>
}

export default NewCandidate;