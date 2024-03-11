import styled from 'styled-components';

export const Container = styled.div`
    max-width: 300px;
    height: auto;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 8px;
    position: relative;

    svg {
    cursor: pointer;
    position: absolute;
        top: 1.2rem;
        right: 1.2rem;
  }

  
  
  .container {
      display: grid;
      padding: 3.8rem 2.6rem;
      text-align: center;
      align-items: center;
      
      > img {
          width: 17.6rem;
          height: 17.6rem;
          margin: 3rem auto 1.6rem;
          border-radius: 50%;
          object-fit: cover
        }
        > svg {
         
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: 3rem;
      
        }
    }

    .title {
        font-weight: 700;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        
        margin-bottom: 1.8rem;
        white-space: nowrap;
    }
    
    .description {
        font-family: 'Roboto', sans-serif;
        font-size: 1.4rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        margin-bottom: 1.6rem;
        height: 3.4rem;
    }

    .price {
        font-family: 'Roboto', sans-serif;
        font-size: 3.2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};

        margin-bottom: 1.6rem;
    }

    @media (max-width: 764px) {
   
  .description {
    display: none;
  }

  .title {
    font-size: 14px
  }  

  .price {
    font-size: 16px;
  }
  .container{
  > img {
    width: 88px;
    height: 88px;
  }
}
}


`

export const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:1rem;

  .counter {
    display: flex;
    justify-self: center;
    align-items: center;
    gap: 1rem;
  }
  
  .quantity {
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .icon {

    color: ${({ theme }) => theme.COLORS.WHITE};
    position: relative;
  }

  .incluir {
    width: 92px;
  }



  @media (max-width: 764px) {
   
     display: flex;
     flex-direction: column;
  
     .incluir {
    width: 162px;
    height: 32px;
    font-size: 14px;
    transition: none;
  }

 
    }
  
`;