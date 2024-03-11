import styled from "styled-components";

export const Container = styled.div`
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

height: 100vh;
width: 100%;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 20rem;

@media (max-width: 764px) {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin: auto
    }
  

`

export const Form = styled.form` 
    height: 621px;
    width: 476px;

    border-radius: 16px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300} ;

   > h2 {
        font-size: 32px;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }

    > section input {
        width: 340px;
        border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
        border-radius: 5px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300} ;
        
    }

    > section {
        display: flex;
        flex-direction: column;
        margin-top: 16px;
    }

    .entrar {
        width: 340px;
        margin: 32px 0;
    }

    h3 {
        color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
        font-size: 14px;
    }

    @media (max-width: 764px) {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800} ;
        height: auto;
        padding-left: 65px;
    }
  


`