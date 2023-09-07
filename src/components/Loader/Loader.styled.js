import styled from '@emotion/styled';
import { Ring } from 'react-cssfx-loading';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  z-index: 1;
`;

export const StyledRings = () => {
  return <Ring color="#42e7e0" width="100px" height="100px" duration="3s" />;
};
