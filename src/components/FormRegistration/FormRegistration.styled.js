import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
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
    padding-left: 80px;
    padding-right: 80px;
  }
`;

export const FormikWrapper = styled.div``;

export const FormWrapper = styled(Form)`
  font-size: 14px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 760px) {
    font-size: 24px;
    min-width: 300px;
  }
  @media screen and (min-width: 1280px) {
    min-width: 400px;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  font-family: inherit;
  font-size: inherit;
  background-color: #34398b;
  border-radius: 28px;
  border: #42e7e0 2px solid;
  color: #fff;
  padding: 5px 20px 10px 20px;
  cursor: pointer;
  transition: background-color 500ms var(--timing-function),
    font-weight 300ms var(--timing-function), color 300ms var(--timing-function);
  &:hover {
    color: #11074e;
    background-color: #42e7e0;
  }
`;

export const LabelForm = styled.label`
  font-size: 1em;
  font-weight: 300;
  color: white;
`;

export const ErrorMessageForm = styled(ErrorMessage)`
  font-family: 'Arial', sans-serif;
  font-size: 0.6em;
  margin-bottom: 1.4em;
  color: red;
`;
export const FieldForm = styled(Field)`
  width: 100%;
  border: none;
  border-radius: 4px;
  margin: 8px 0;
  margin-bottom: 14px;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-right: 30px;
  &:focus {
    box-shadow: 0 0 8px 0 var(--color-contacts);
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
