import styled from 'styled-components';

export const DatePickerContainer = styled.div`
    padding: 40px;
`;

export const  AppTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: green;
    margin: 30px;
`;


export const DatePickerWrraper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    
    input {
        outline: none;
        border: 1px solid gray;
        padding: 11px;
        border-radius: 20px;
        background-color: #fd9bd6;
        color: white;
        font-size: 17px;
    }
`;

export const AppTitle = styled.div`
    font-size: 20px;
    color: green;
`;

export const DateText = styled.div`
    font-size: 20px;
    color: #fd9bd6;
    margin-right: 20px;
`;

export const DatesContainer = styled.div`
    border: 1px solid gray;
    border-radius: 20px;
    padding: 20px;
    display: inline-flex;
    align-items: center;
    width: 100%;
`;