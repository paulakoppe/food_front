import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  height: 100vh;

  overflow: auto;
  overflow: overlay;
`;

export const Content = styled.div`
  padding-left: 123px;
  padding-right: 123px;

  > section h2 {
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 400;
    font-family: "Poppins";
  }

  @media (max-width: 764px) {
    > section h2 {
      font-size: 18px;
    }
  }

  .home-items {
    flex-direction: row;
    display: flex;
    width: 100%;
    gap: 5rem;
  }
  
`;
export const Banner = styled.div`
  text-align: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6.2rem;
  position: relative;
  margin-top: 16.4rem;
  max-width: 1120px;

  .banner {
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.COLORS.GRADIENT_100} 0%,
      ${({ theme }) => theme.COLORS.GRADIENT_200} 100%
    );
    border-radius: 0.8rem;
    position: relative;
    display: flex;
    justify-content: flex-end; /* Ajustado para flex-end */
  }

  .title {
    width: 54rem;
    height: 26rem;
    padding: 8.7rem 4.6rem 0 0;
    text-align: right;
  }

  img {
    width: 100%;
    margin-bottom: -2.7rem;
    z-index: -1;
    width: 65.6rem;
    position: absolute;
    bottom: 1.3rem;
    z-index: 1;
    left: -5rem;
  }

  h1 {
    line-height: 140%;
    font-size: clamp(1rem, 6vw, 4rem);
    font-weight: 500;
    margin-bottom: 0.8rem;
  }

  span {
    font-size: 1.4;
  }

  @media (max-width: 764px) {
    .banner {
      margin: 0 auto; /* Adicionado para centralizar o banner na tela */
      width: 100%; /* Ajuste para ocupar 100% da largura da tela */
      justify-content: center; /* Centraliza os itens dentro do banner */
    }

    .title {
      width: 100%; 
      padding: 2rem; 
      display: flex;
      flex-direction: column;
      text-align: center; 
      align-items: center;
      justify-content: center;
    }

    img {
      width: 100%;
      max-width: none;
      position: static;
      margin-bottom: -2rem;
    }
  }
`;