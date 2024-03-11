import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  margin: auto;
  padding: 3.5rem 10rem;

  > button {
    font-size: 2.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
    font-size: 32px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    margin-top: 2rem;
  }

  .save {
    width: 200px;
    margin-left: auto;
  }

  @media (max-width: 764px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 3.5rem 4rem;


    .save {
    width: 100%;
    margin-top: 2rem;
  }
  }
  .button-actions {
    width: 100%;
    max-width: 500px;
    margin-left: auto;
    display: flex;
    gap: 10rem;
    .delete {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.1rem 3.2rem 5.3rem;
  gap: 2.4rem;
  width: 100%;

  .image {
    width: 23rem;
  }
  .name {
    width: 84rem;
  }

  .imgedit {
    display: none;
  }

  .price {
    width: 100%;
  }

  .row {
    display: flex;
    flex-direction: row;
    gap: 3.2rem;
    width: 100%;

    > input {
      width: 100%;
    }
  }
  
  h2 {
    margin-bottom: 1.6rem;
    
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-weight: 400;
    font-size: 1.6rem;
  }

  .ingredients {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    width: 106rem;


    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    
    padding: 0.8rem;
    border-radius: 0.8rem;
    
    &:focus-within {
      outline: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    }

    input {
      background-color: transparent;
    }
  }

  @media (max-width: 764px) {
    margin: 0;

    .row {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      > input,
      textarea,
      select {
        width: 100%;
       
      }
    }

    .image {
      width: 23rem;
    }
    .name {
      width: 84rem;
    }

    .ingredients {
      width: 80rem;
    }

    .price {
      width: 100%;
    }
  }
`;

export const Category = styled.div`
  > label {
    position: relative;

    select {
      border: none;
      cursor: pointer;
      width: 100%;
      height: 4.8rem;
      padding: 1.2rem 1.6rem;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-weight: 400;
      font-size: 14px;
    }
  }
`;

export const TextArea = styled.textarea`
  width: 130rem;
  height: 17.2rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  resize: none;
  border-radius: 0.8rem;
  padding: 1.4rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }
`;
