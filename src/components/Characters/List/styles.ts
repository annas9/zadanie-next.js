import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f9f9;
`;

export const Box = styled.div`
  width: 600px;
  border-radius: 5px;
  padding: 16px;
  background: #fff;
  box-shadow: 0 8px 10px -5px rgba(106, 106, 121, 1);

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const UserBox = styled.div`
  height: 40px;
  background: #fff;
  border-radius: 3px;
  font-size: 14px;
  border-bottom: 1px solid #f7f9f9;
  display: flex;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;

  :hover {
    background: #f7f7f7;
  }
`;

export const SearchButton = styled.button`
  background: #4f46e5;
  color: #fff;
  display: inline-block;
  border-radius: 4px;
  margin-left: 16px;
  border: none;
  padding: 8px 14px;
  cursor: pointer;
`;

export const Input = styled.input`
  font-size: 12px;
  color: #6d6b6b;
  padding: 10px;
  margin-bottom: 10px;
  background: #fff;
  border-radius: 3px;
  border: 1px solid rgb(236 236 238);

  :focus-visible {
    outline-color: #ededed;
  }
`;
