import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Box = styled.div`
  margin: 20px 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const PageList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const PageItem = styled.li<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 26px;
  margin: 0 6px;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ isActive }) => (isActive ? '#4F46E5' : '#fff')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#000')};

  :hover {
    background: ${({ isActive }) => (isActive ? '#4F46E5' : '#f7f7f7')};
  }
`;

export const Dots = styled.div`
  height: 26px;
  width: 26px;
  margin: 0 6px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Button = styled.div<{ disabled: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8c8c8c;
  border: 1px solid rgb(236 236 238);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  background: ${({ disabled }) => disabled && '#e6e6e6'};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
