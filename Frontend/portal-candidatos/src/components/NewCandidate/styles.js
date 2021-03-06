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
    display: inline-block;
    background-color:#fff;
    color: #000;
    width: 80%;
    height: 50%;
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

export const Title = styled.div`
    font-size: 22px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    font-family: Arial, sans-serif;
`;

export const Text = styled.div`
    font-size: 18px;
    padding-left: 40px;
    font-family: Arial, sans-serif;
    margin-bottom: 10px;
`;
export const Input = styled.input`
    padding-left: 10px;
    width: 500px;
    font-size: 15px;
    margin-left: 10px;
    font-family: Arial, sans-serif;
    height: 20px;
    border-radius: 10px;
    border: 1px solid #D3D3D3;
    cursor: pointer;
    
`;
export const Checkbox = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1rem, 1fr));   
    padding: 0 50px;
    cursor: pointer;

    label{
    font-size: 15px;
    font-family: Arial, sans-serif;
    margin-left: -20px;
    }
`;
export const Save = styled.button`
    display: flex;
    position: relative;
    float: right;
    bottom: -20px;
    border-radius: 20px;
    margin-right: 10px;
    cursor: pointer;
    font-family: Arial, sans-serif;
`;

export const Cancel = styled.button`
    display: flex;
    position: relative;
    float: right;
    bottom: -20px;
    border-radius: 20px;
    margin-right: 10px;
    cursor: pointer;
    font-family: Arial, sans-serif;
`;