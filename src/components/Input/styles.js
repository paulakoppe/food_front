import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 
  border-radius: 0.5rem;


  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  > input {
    height: 4.8rem;
    width: 100%;
    
    padding: 1.2rem 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

}
> svg {
    margin-left: 16px;;
 }
`