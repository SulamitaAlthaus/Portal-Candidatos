import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
`;

export const Title = styled.div`
    position: absolute;
    margin-top: 50px;
    margin-left: 280px;
    font-size: 20px;
    font-weight: 800;
    font-family: Helvetica, sans-serif;
`;
export const BoxUser = styled.div`
    width: 150px;  
    height: 150px;
    display: grid;
    margin-top: 100px;
    margin-left: 80px;
    justify-items: center;
    align-items: center;
`;

export const Avatar = styled.img`
    width: 100px;  
    height:100px;
    border: 1px solid #000;
    border-radius: 80px;
`;
export const User = styled.div`
`;
export const Logout = styled.div`
`;

export const ListCandidates = styled.input`
    position: relative;
    width: 500px;  
    height: 30px;    
    border: 0;
    border-bottom: 1px solid #000;
    justify-self: center;
    top: -130px;
    left: -100px;
`;


export const NewCandidate = styled.button`
    position: relative;
    width: 180px;
    height: 30px;
    border: 1px solid #000;
    justify-self: right;
    top: -150px;
    margin-right: 80px;
`;
