import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  max-width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;