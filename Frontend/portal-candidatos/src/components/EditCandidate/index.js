import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';

function EditCandidate({ onClose = () => { }, id, nome, email, idade, url, tecnologias }) {


    const handleOutsideClick = (e) => {
        if (e.target.id === "modal") onClose();
    }

    const editTecnologias = (e) => {
        var checkBox = document.getElementById(e.target.value).checked;
        if (checkBox) {
            if (tecnologias.includes(e.target.value)) {
                console.log("inclui");
            } else {
                console.log("não inclui");
                tecnologias = [...tecnologias, e.target.value]
            }
        } else {
            tecnologias = tecnologias.filter(x => x!= e.target.value)
        }
    }
    
    async function edit() {
        await api.put(`/new/${id}`, {
            nome, email, idade, url, tecnologias
        })
        window.location.reload()
    }

    return <S.Modal id="modal" onClick={handleOutsideClick}>
        <S.Container>
            <S.Button onClick={onClose} />
            <S.Title>Novo Candidato</S.Title>
            <S.Text>Nome: <input type="text" onChange={e => nome = (e.target.value)} defaultValue={nome} /></S.Text>
            <S.Text>Email: <input type="email" onChange={e => email = (e.target.value)} defaultValue={email} /></S.Text>
            <S.Text>Idade: <input type="number" onChange={e => idade = (e.target.value)} defaultValue={idade} /></S.Text>
            <S.Text>Linkedin: <input type="text" onChange={e => url = (e.target.value)} defaultValue={url} /></S.Text>
            <S.Text>Tecnologias: </S.Text>
            <S.Checkbox>
                <input id="C#" type="checkbox" name="teste" defaultChecked={tecnologias.includes("C#") ? true : false} 
                onChange={editTecnologias} value="C#" />
                <label for="C#">C#</label><br />
                <input id="Javascript" type="checkbox" name="teste" defaultChecked={tecnologias.includes("Javascript") ? true : false} 
                onChange={editTecnologias} value="Javascript" />
                <label for="Javascript">Javascript</label><br />
                <input id="Nodejs" type="checkbox" defaultChecked={tecnologias.includes("Nodejs") ? true : false} 
                onChange={editTecnologias} value="Nodejs"/>
                <label for="Nodejs">Nodejs</label><br/>
                <input id="Angular" type="checkbox" defaultChecked={tecnologias.includes("Angular") ? true : false} 
                onChange={editTecnologias} value="Angular"/>
                <label for="Angular">Angular</label><br/>
                <input id="React" type="checkbox" defaultChecked={tecnologias.includes("React") ? true : false} 
                onChange={editTecnologias} value="React"/>
                <label for="React">React</label><br/>
                <input id="Ionic" type="checkbox" defaultChecked={tecnologias.includes("Ionic") ? true : false} 
                onChange={editTecnologias} value="Ionic"/>
                <label for="Ionic">Ionic</label><br/>
                <input id="Mensageria" type="checkbox" defaultChecked={tecnologias.includes("Mensageria") ? true : false} 
                onChange={editTecnologias} value="Mensageria"/>
                <label for="Mensageria">Mensageria</label><br/>
                <input id="PHP" type="checkbox" defaultChecked={tecnologias.includes("PHP") ? true : false} 
                onChange={editTecnologias} value="PHP"/>
                <label for="PHP">PHP</label><br/>
                <input id="Laravel" type="checkbox" defaultChecked={tecnologias.includes("Laravel") ? true : false} 
                onChange={editTecnologias} value="Laravel"/>
                <label for="Laravel">Laravel</label><br/>
            </S.Checkbox>
            <S.Cancel onClick={onClose}>Cancelar</S.Cancel>
            <S.Save onClick={edit}>Salvar</S.Save>
        </S.Container>

    </S.Modal>
}

export default EditCandidate;