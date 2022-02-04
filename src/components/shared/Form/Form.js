import React from 'react';
import { StyledForm } from './Form.styled';

export const Form = (props) => {
  return <StyledForm>{props.children}</StyledForm>;
};

export default Form;
