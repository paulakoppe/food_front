import styled from "styled-components";

export const Container = styled.span`
  .ingredient {
    padding: 0.4rem 0.8rem;
    border-radius: 0.5rem;
    height: 32px;
    width: 116px;

    font-size: 1.4rem;
    line-height: 2.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  }

  > div { 
    display: flex;
    flex-direction: row;
  }
`;
