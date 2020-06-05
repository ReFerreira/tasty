import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '../../assets/logo.png';

import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('name is required'),
  email: Yup.string().email('Invali e-mail').required('e-mail is required'),
  password: Yup.string()
    .min(6, 'At least 6 character')
    .required('password is required'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="Tasty Restaurant" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Sign Up</button>
        <Link to="/">
          <p>Already have an acount?</p>
        </Link>
      </Form>
    </>
  );
}
