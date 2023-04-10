import Logo from '../../components/logo/logo';
import {AppRoute, AuthorizationStatus, CITIES} from '../../const';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { FormEvent, useRef } from 'react';
import { loginAction } from '../../store/api-actions';
import AuthData from '../../types/auth-data';
import {toast} from 'react-toastify';
import { getAuthorizationStatus } from '../../store/user-process/selectors';


function LoginPage(): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const isPasswordValidate = (password: string): boolean => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/g;
    return regex.test(password);
  };

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      if (isPasswordValidate(passwordRef.current.value)) {
        onSubmit({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        });
      } else {
        toast.warn('Passwords must contain: minimum of 1 letter and minimum of 1 numeric character [0-9]');
      }
    }
  };

  return (
    authStatus === AuthorizationStatus.Auth ?
      <Navigate to={AppRoute.Main} /> : (
        <div>
          <div className="page page--gray page--login">
            <header className="header">
              <div className="container">
                <div className="header__wrapper">
                  <div className="header__left">
                    <Logo />
                  </div>
                </div>
              </div>
            </header>

            <main className="page__main page__main--login">
              <div className="page__login-container container">
                <section className="login">
                  <h1 className="login__title">Sign in</h1>
                  <form className="login__form form" action="" onSubmit = {handleSubmit}>
                    <div className="login__input-wrapper form__input-wrapper">
                      <label className="visually-hidden">E-mail</label>
                      <input className="login__input form__input" type="email" name="email" placeholder="Email" ref={loginRef} required/>
                    </div>
                    <div className="login__input-wrapper form__input-wrapper">
                      <label className="visually-hidden">Password</label>
                      <input className="login__input form__input" type="password" name="password" ref={passwordRef} placeholder="Password" required/>
                    </div>
                    <button className="login__submit form__submit button" type="submit">Sign in</button>
                  </form>
                </section>
                <section className="locations locations--login locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{CITIES[Math.floor(Math.random() * CITIES.length)]}</span>
                    </a>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      )
  );
}

export default LoginPage;
