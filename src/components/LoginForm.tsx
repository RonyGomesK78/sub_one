"use client";

import { MouseEventHandler } from "react";

import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from 'yup';

import { CustomButton } from "./CustomButton";
import CustomField from "./CustomField";
import CustomErrorMessageField from "./CustomErrorMessageField";

interface Schema {
  email: string;
  password: string;
}

interface Props {
  handleLogin: (data: Schema) => void
}
const validationSchema = Yup.object().shape({
  email: Yup.string().email('digite um email válido').required('Email é obrigatório'),
  password: Yup.string().max(255, 'Password deve conter no máximo 255 carateres').required('Password é obrigatório'),
});

export default function LoginForm({ handleLogin }: Props) {

  const initialValues: Schema = {
    email: '',
    password: ''
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(
          values: Schema,
          { setSubmitting }: FormikHelpers<Schema>
        ) => {
          try {
            
            handleLogin(values);
          } catch (e) {
            console.error('r78k', e);
          }
        }
        }
      >
        {({ handleChange }) => (
          <Form className="w-full px-4">
            <div className="mb-4 px-4 ">
              <label htmlFor="email" className="block text-gray-700 font-semibold">
                Email
              </label>
              <CustomField
                id="email"
                name="email"
                type="text"
                placeholder="Email"
              />
              <CustomErrorMessageField name="email" />
            </div>

            <div className="mb-4 px-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold">
                Password
              </label>
              <CustomField
                id="password"
                name="password"
                type="text"
                placeholder="Password"
              />
              <CustomErrorMessageField name="password" />
            </div>

            <div className="mt-8 mb-4 px-4">
              <button
                className={`xl:p-3 p-4 rounded shadow-lg text-white bg-red-500 w-full hover:bg-red-700`}
                type='submit'
              >
                Entrar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}