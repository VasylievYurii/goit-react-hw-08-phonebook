import React from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { validationRegistrationSchema } from '../../js/validationRegistrationSchema';
import {
  ContentWrapper,
  FormikWrapper,
  FormWrapper,
  Button,
  LabelForm,
  ErrorMessageForm,
  FieldForm,
  Image,
} from './FormRegistration.styled';
import ImagePng from '../../img/registrationImg.png';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const FormRegistration = () => {
  const dispatch = useDispatch();
  const inputNameId = nanoid();
  const inputEmailId = nanoid();
  const inputPasswordId = nanoid();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <ContentWrapper>
      <FormikWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={validationRegistrationSchema}
          onSubmit={handleSubmit}
        >
          <FormWrapper>
            <LabelForm htmlFor={inputNameId}>Name</LabelForm>
            <FieldForm type="text" name="name" id={inputNameId} required />
            <ErrorMessageForm name="name" component="p" className="error" />

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

            <Button type="submit">Registration</Button>
          </FormWrapper>
        </Formik>
      </FormikWrapper>
      <Image src={ImagePng} alt="PHONEBOOK" />
    </ContentWrapper>
  );
};

export default FormRegistration;
