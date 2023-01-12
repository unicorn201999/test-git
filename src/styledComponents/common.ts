import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 1170px;
  padding: 35px 18px 18px;

  @media (max-width: 1200px){
    width: 990px;
  }

  @media (max-width: 992px){
    width: 765px;
  }

  @media (max-width: 768px){
    width: 570px;
  }

  @media (max-width: 576px){
    max-width: 400px;
  }
`;