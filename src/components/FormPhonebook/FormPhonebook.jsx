import React from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import validationSchema from '../../js/validationSchema';
import {
  FormWrapper,
  Button,
  LabelForm,
  ErrorMessageForm,
  FieldForm,
} from './FormPhonebook.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

const initialValues = {
  name: '',
  number: '',
};

const FormPhonebook = ({ onClick }) => {
  const dispatch = useDispatch();
  const inputNameId = nanoid();
  const inputPhoneId = nanoid();

  const handleSubmit = (values, { resetForm }) => {
    console.log('add contact values:', values);
    dispatch(addContact(values));
    resetForm();
    onClick();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormWrapper>
        <LabelForm htmlFor={inputNameId}>Name</LabelForm>
        <FieldForm type="text" name="name" id={inputNameId} required />
        <ErrorMessageForm name="name" component="p" className="error" />

        <LabelForm htmlFor={inputPhoneId}>Phone</LabelForm>
        <FieldForm type="tel" name="number" id={inputPhoneId} required />
        <ErrorMessageForm name="number" component="p" className="error" />

        <Button type="submit">Add contact</Button>
      </FormWrapper>
    </Formik>
  );
};

export default FormPhonebook;
