import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { StyledForm } from '../components/shared/Form/Form.styled';
import Logo from '../components/shared/Logo/Logo';
import useForm from '../hooks/useForm';

const SignupForm = () => {
  let navigate = useNavigate();

  const onSuccess = (event) => {
    navigate('/user');
  };

  const onError = (event) => {
    alert('There are empty required fields, please fill them');
  };

  //Custom hook call
  const { handleChange, values, errors, handleSubmit } = useForm(onSuccess, onError);

  return (
    <StyledForm>
      <h2>Create your Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username <span style={{color: 'red'}}>*</span></label>
          <input
            id="username"
            type="text"
            name="username"
            maxLength="30"
            val-required="true"
            val-minlength="6"
            onChange={handleChange}
          />
          {errors.username && (
            <small style={{ opacity: 1 }}>{errors.username}</small>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="email">Email <span style={{color: 'red'}}>*</span></label>
          <input
            id="email"
            type="email"
            name="email"
            maxLength="60"
            val-required="true"
            onChange={handleChange}
          />
          {errors.email && <small style={{ opacity: 1 }}>{errors.email}</small>}
        </div>
        <div className="input-group">
          <label htmlFor="password">Password <span style={{color: 'red'}}>*</span></label>
          <input
            id="password"
            type="password"
            name="password"
            maxLength="40"
            val-required="true"
            val-minlength="8"
            onChange={handleChange}
          />
          {errors.password && (
            <small style={{ opacity: 1 }}>{errors.password}</small>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password <span style={{color: 'red'}}>*</span></label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            maxLength="40"
            val-required="true"
            val-minlength="8"
            val-text="Confirm Password"
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <small style={{ opacity: 1 }}>{errors.confirmPassword}</small>
          )}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </StyledForm>
  );
};

const LoginForm = () => {
  let navigate = useNavigate();

  const onSuccess = () => {  
    navigate("/admin");
  };

  const onError = (event) => {
    alert('There are empty required fields, please fill them');
  };

  //Custom hook call
  const { handleChange, values, errors, handleSubmit } = useForm(onSuccess, onError);

  return (
    <StyledForm>
      <h2>Login to Continue</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username <span style={{color: 'red'}}>*</span></label>
          <input
            id="username"
            type="text"
            name="username"
            maxLength="30"
            val-required="true"
            val-minlength="6"
            onChange={handleChange}
          />
          {errors.username && (
            <small style={{ opacity: 1 }}>{errors.username}</small>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="password">Password <span style={{color: 'red'}}>*</span></label>
          <input
            id="password"
            type="password"
            name="password"
            maxLength="40"
            val-required="true"
            val-minlength="8"
            onChange={handleChange}
          />
          {errors.password && (
            <small style={{ opacity: 1 }}>{errors.password}</small>
          )}
        </div>
        <div className="forgot-password">
          <a href="">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
      </form>
    </StyledForm>
  );
};

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Header>
        <Logo isNavLogo={false} />
      </Header>
      <Main>
        <LeftSection>
          <img src="/images/Left-Image.png" alt="Left Image" />
        </LeftSection>
        <RightSection>
          {!showLogin ? <SignupForm /> : <LoginForm />}

          {showLogin ? (
            <p>
              Don’t have an account?
              <a
                className="text-link"
                href="#"
                onClick={() => {
                  setShowLogin(!showLogin);
                }}
              >
                Sign Up
              </a>
            </p>
          ) : (
            <p>
              Already have an account?
              <a
                className="text-link"
                href="#"
                onClick={() => {
                  setShowLogin(!showLogin);
                }}
              >
                Login
              </a>
            </p>
          )}
        </RightSection>
      </Main>
    </>
  );
};

const Header = styled.header`
  height: 10%;
`;

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90%;
`;

const LeftSection = styled.section`
  width: 35vw;
  height: 50vh;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }

  @media screen and (max-width: 1445px) {
    width: 35vw;
    height: 40vh;
  }
`;

const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  p {
    text-align: center;
    margin-top: 3vh;
    font-size: 0.8em;
  }

  .text-link {
    color: var(--clr-primary);
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    transition: all 1s ease;
    margin-left: 5px;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export default Home;
