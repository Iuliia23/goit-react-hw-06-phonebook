import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 300px;
  margin: 0 auto;
`;

export const Label = styled.label`
   font-weight: bold;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #ae00ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;