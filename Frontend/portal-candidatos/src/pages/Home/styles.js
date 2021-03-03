import styled from 'styled-components';

export const Container = styled.div`
    display: grid;

    table{
    justify-self: center;
    width: 90%;       
    }
    table th{
    justify-self: center;
    font-size: 20px;
    font-weight: 800;
    }
    table tbody{
        margin: 10px;
        border: 1px solid #000;
    }
`;
export const Title = styled.div`
    position: absolute;
    margin: 50px;
    font-size: 40px;
    font-weight: 800;
    font-family: Helvetica, sans-serif;
`;
export const Search = styled.div`
    margin-top: 100px;
    justify-self: center;
    width: 50%;  
`;
export const ListCandidates = styled.input`
    position: relative;
    width: 500px;  
    height: 30px;
    border-bottom: 1px solid #000;
    justify-self: center;
    top: -110px;
    left: -100px;
`;
export const NewCandidate = styled.button`
    position: relative;
    justify-self: right;
    border: 1px solid #000;
    width: 100px;  
    height: 50px;
    border-radius: 30px;
    top: -45px;
    margin-right: 150px;
    cursor: pointer;

`;
