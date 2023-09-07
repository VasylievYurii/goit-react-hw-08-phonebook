import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 40px;
  padding-right: 40px;
  gap: 40px;
  @media screen and (min-width: 760px) {
    flex-direction: row;
    padding-top: 40px;
  }
  @media screen and (min-width: 860px) {
    gap: 100px;
    padding-left: 80px;
    padding-right: 80px;
  }
`;

export const TextWrapper = styled.div`
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-top: 10px;
  @media screen and (min-width: 860px) {
    font-size: 60px;
    margin-top: 0;
  }
  @media screen and (min-width: 1280px) {
    font-size: 80px;
  }
`;

export const Description = styled.h2`
  max-width: 200px;
  margin-top: 10px;
  @media screen and (min-width: 860px) {
    font-size: 30px;
    max-width: 250px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 40px;
    max-width: 300px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  max-width: 200px;
  margin-top: 20px;
  color: #9aaee5;
  @media screen and (min-width: 860px) {
    font-size: 18px;
    max-width: 250px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    max-width: 300px;
    margin-top: 40px;
  }
`;

export const Image = styled.img`
  width: 80%;
  @media screen and (min-width: 460px) {
    width: 60%;
  }
  @media screen and (min-width: 860px) {
    max-width: 500px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 600px;
  }
`;

// @media screen and (min-width: 460px) {

// }
// @media screen and (min-width: 860px) {

// }
/* @media screen and (min-width: 768px) {  } */
/* @media screen and (min-width: 1440px) {  } */
