import { useNavigate } from 'react-router-dom';
import Logo from '../components/logo';
import { useAppDispatch, useAppSelector } from '../redux-hooks';
import { useRef } from 'react';


type AuthData = {
  email: string;
  password: string;
}

function Login(): JSX.Element {
  const currentCity: string = useAppSelector((state)=> state.city);


  const emailRef = userRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData)=> {
    dispatch(loginAction(authData));
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.prevent.default();

    if (emailRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
    }
    }
  };

  return(
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
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  id="email"
                  ref={emailRef}
                  placeholder="Email"
                  required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  ref={passwordRef}
                  required />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                onClick={handleSubmit}>Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{currentCity}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
