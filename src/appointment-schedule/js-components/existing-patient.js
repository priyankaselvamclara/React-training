import React from "react";
import { Link } from "react-router-dom";
import useForm from "../custom-Hooks/useForm";
import validate from '../custom-Hooks/validate';

export function ExistingPatient() {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login,validate);

  function login() {
    console.log('No errors, submit callback called!');
  }

  return (
    <div className="section is-fullheight">
      <h1>Login Page</h1>
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Email Address</label>
                <div>
                  <input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div>
                  <input className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <button type="submit" className="button is-block is-info is-fullwidth" ><Link to="/appointments">Login</Link></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
