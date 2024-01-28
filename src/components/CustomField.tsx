import React from 'react';

import { Field } from "formik"

interface CustomFieldProps {
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  width?: string;
  textAlign?: string;
}

const CustomField: React.FC<CustomFieldProps> = (props) => {
  const { id, name, type, placeholder, disabled = false, width = "w-full", textAlign = "text-left" } = props;
  return (
    <Field
      type={type}
      id={id}
      name={name}
      className={`border border-gray-300 p-4 mt-2 rounded-md ${width} ${textAlign} focus:outline-blue-300`}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}

export default CustomField;