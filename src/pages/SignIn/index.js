import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '../../assets/logo.png';

import { signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('name is required'),
  // password: Yup.string().required('password is required'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ name, password }) {
    localStorage.setItem('name', name);
    dispatch(signInRequest(name, password));
  }

  return (
    <>
      <img src={logo} alt="Tasty Restaurant" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="name" placeholder="Full name" />
        {/* <Input name="password" type="password" placeholder="Password" /> */}

        <button type="submit">{loading ? 'Loading...' : 'Log In'}</button>
        <Link to="/register">{/* <p>Create an acount</p> */}</Link>
      </Form>
    </>
  );
}
