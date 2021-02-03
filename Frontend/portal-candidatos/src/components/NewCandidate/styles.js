import styled from 'styled-components';

export const Modal = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0,0,0,.8);
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Container = styled.div`
    background-color:#fff;
    color: #000;
    width: 60%;
    height: 60%;
    border-radius: 20px;
`;

export const Button = styled.button`
    background-color: transparent;
    outline: none;
    width: 32px;
    height: 32px;
    border: none;
    right: calc(-100% + 64px);
    top: 16px;
    display: flex;
    position:relative;
    align-items: center;
    cursor: pointer;

    &:before,
    &:after{
        content: '';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: #000;

    }
    &:before{
        transform: rotate(45deg)
    }
    &:after{
        transform: rotate(-45deg)
    }
`;

export const Text = styled.div`
`;
export const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-self: center;
`;

export const Save = styled.button`
`;
export const Cancel = styled.button`
`;