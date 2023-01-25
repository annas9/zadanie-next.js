import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f9f9;
  position: relative;
`;

export const CharacterBox = styled.div`
  width: 360px;
  min-height: 400px;
  border-radius: 5px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 8px 10px -5px rgba(106, 106, 121, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Text = styled.h3`
  font-weight: 400;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
`;

export const Label = styled.h5`
  font-weight: bold;
  font-size: 14px;
  margin: 0;
`;

export const Value = styled.h5`
  font-weight: 400;
  margin: 0 0 0 20px;
  font-size: 14px;
`;
