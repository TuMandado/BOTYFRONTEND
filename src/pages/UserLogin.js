import React, { useState } from 'react';
import styled from 'styled-components';
// import Link
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Utils from '../utils/Utils';

const { colours } = Utils;
const {
  background,
  primary,
  secondary,
  // callToAction,
  text
} = colours;

const logo = "https://botycloud.com/wp-content/uploads/2022/09/Boty.gif";

const Logo = styled.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  // Add an on submit using a function input
  onSubmit={onSubmit}
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const InputStyle = styled.input`
  width: 100%;
  max-width: 300px;
  height: 50px;
  border-radius: 25px;
  border: none;
  padding: 0 20px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 700;
  background-color: ${background};
  color: ${text};
  &:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 500px;
`;

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Perform form submission or validation here
    console.log(formData);
  };

  return (
    <RegisterContainer>
      <Logo src={logo} alt="company-logo" />
      <FormStyle
        onSubmit={handleSubmit}
      >
        <InputContainer>
          <InputStyle
            id="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputStyle
            id="password"
            name="password"
            label="Password"
            placeholder='Enter your password'
            value={formData.password}
            onChange={handleChange}
            type="password"
          />
        </InputContainer>
        <ButtonContainer>
          <Button
            type="submit"
            text='Login'
            color={primary}
            />
          <Link
            to="/register"
            style={{ textDecoration: 'none' }}
          >
            <Button
              type="submit"
              text='Register'
              color={secondary}
            />
          </Link>
        </ButtonContainer>
      </FormStyle>
    </RegisterContainer>
  );
};

export default UserLogin;