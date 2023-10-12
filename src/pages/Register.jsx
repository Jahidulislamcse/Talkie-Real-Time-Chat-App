import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Register = (event) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  const handleChange = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="company">
            <img src="" alt="" />
            <h1>Talkie</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onClick={(e) => handleChange(e)}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onClick={(e) => handleChange(e)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onClick={(e) => handleChange(e)}
          />
          <br />
          <input
            type="password"
            placeholder="Retype Password"
            name="confirmPassword"
            onClick={(e) => handleChange(e)}
          />
          <br />
          <button type="submit">SignUp</button>
          <br />
          <span>
            Already have account? <Link to="/login">Login</Link>
          </span>
        </form>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div``;

export default Register;
