import React, { forwardRef } from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: {
    message?: string;
  };
}

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: {
    message?: string;
  };
}

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...rest }, ref) => (
    <>
      <label>{label}</label>
      <Input ref={ref} {...rest} />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </>
  )
);

const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, ...rest }, ref) => (
    <>
      <label>{label}</label>
      <TextArea ref={ref} {...rest} />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </>
  )
);

export { InputField, TextAreaField };

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8em;
`;
