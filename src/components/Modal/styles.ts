import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Container = styled(ReactModal)`
  position: relative;
  transition: all 0.4s linear;

  @media (max-width: 776px) {
    width: 600px;
  }

  @media (max-width: 628px) {
    width: 500px;
  }

  @media (max-width: 512px) {
    width: 450px;
  }

  @media (max-width: 468px) {
    width: 400px;
  }

  @media (max-width: 408px) {
    width: 350px;
  }

  @media (max-width: 358px) {
    width: 300px;
  }
`;
