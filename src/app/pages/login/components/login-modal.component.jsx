import React from "react";
import styled from "styled-components";

export const LoginContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 450px;
  padding: 2rem;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  border-radius: 12px;
`;

export const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 80%;
  h1 {
    font-family: "Oxygen Regular";
    font-weight: 700;
    font-size: 1.75rem;
  }
`;

const LoginBr = styled.div`
  font-family: "Oxygen Light";
  margin: 10px auto;
`;

export const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  gap: 16px;

  margin-top: 25px;
`;

export const LoginInput = styled.input`
  font-size: 1rem;
  font-family: "Oxygen Regular";
  padding: 0.4rem 0rem;

  border: none;
  border-bottom: 1px solid var(--primary-color);

  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const LoginButton = styled.button`
  font-family: "Oxygen Regular";
  font-size: 1rem;
  padding: 0.5rem 0rem;

  border: none;
  border-radius: 12px;

  color: var(--neutral-color2);
  background-color: var(--secondary-color);
  ${({ type }) =>
    type === "submit"
      ? "background-color: var(--secondary-color);"
      : "background-color: var(--primary-color);"}

  cursor: pointer;
  width: 100%;

  &:hover {
    ${({ type }) =>
      type === "submit"
        ? "background-color: var(--neutral-color1);"
        : "background-color: rgba(44, 51, 51, .5);"}
  }
`;

const LoginModal = ({ toRegister }) => {
  return (
    <LoginContainer>
      <Login>
        <h1>Login</h1>
        <LoginForm>
          <LoginInput type="text" placeholder="Enter your username" />
          <LoginInput type="password" placeholder="Enter your password" />
          <LoginButton type="submit">Log In</LoginButton>
        </LoginForm>
        <LoginBr>or</LoginBr>
        <LoginButton onClick={toRegister}>Register</LoginButton>
      </Login>
    </LoginContainer>
  );
};

export default LoginModal;
