import React from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { validationLogInSchema } from '../../js/validationLogInSchema';
import {
  ContentWrapper,
  FormikWrapper,
  FormWrapper,
  Button,
  LabelForm,
  ErrorMessageForm,
  FieldForm,
  Image,
} from './FormLogin.styled';
import ImagePng from '../../img/loginImg.png';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const initialValues = {
  email: '',
  password: '',
};

const FormLogin = () => {
  const dispatch = useDispatch();
  const inputEmailId = nanoid();
  const inputPasswordId = nanoid();

  const handleSubmit = (values, { resetForm }) => {
    console.log('values:', values);
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <ContentWrapper>
      <FormikWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={validationLogInSchema}
          onSubmit={handleSubmit}
        >
          <FormWrapper>
            <LabelForm htmlFor={inputEmailId}>Email</LabelForm>
            <FieldForm type="email" name="email" id={inputEmailId} required />
            <ErrorMessageForm name="email" component="p" className="error" />

            <LabelForm htmlFor={inputPasswordId}>Password</LabelForm>
            <FieldForm
              type="password"
              name="password"
              id={inputPasswordId}
              required
            />
            <ErrorMessageForm name="password" component="p" className="error" />

            <Button type="submit">Login</Button>
          </FormWrapper>
        </Formik>
      </FormikWrapper>
      <Image src={ImagePng} alt="PHONEBOOK" />
    </ContentWrapper>
  );
};

export default FormLogin;
