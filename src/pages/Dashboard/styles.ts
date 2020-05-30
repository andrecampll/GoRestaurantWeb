import styled from 'styled-components';

export const FoodsContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  padding: 40px 20px 40px 20px;
  margin-top: -140px;

  display: grid;

  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-gap: 32px;

  object-fit: cover;

  @media (max-width: 885px) {
    display: flex;
    flex-direction: column;
  }
`;
