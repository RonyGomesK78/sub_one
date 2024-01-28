import React from 'react';

import { ErrorMessage } from "formik"

interface CustomErrorMessageFieldProps {
  name: string;
}

const CustomErrorMessageField: React.FC<CustomErrorMessageFieldProps> = (props) => {
  const { name } = props;
  return (
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-xs"
    />
  )
}

export default CustomErrorMessageField;
