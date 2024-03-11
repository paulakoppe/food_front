import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;

  width: 100%;

  margin-top: 3rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 77px;

  padding: 0px 7.6rem;

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
    font-size: 1.4rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }

  @media (max-width: 764px) {
    padding: 3rem;
    display: flex;
    flex-direction: row;
    gap: 4rem;

    > p {
      font-size: 1rem;
    }

    > img {
      width: 140px;
      height: auto;
    }
  }
`;
