import Logo from '../components/logo/logo';
import { useAppDispatch, useAppSelector } from '../redux-hooks';
import { useRef, FormEvent } from 'react';
import { loginAction } from '../store/api-actions';
import { AuthData } from '../types/auth-user-data';
import { AppRoute, AuthorizationStatus } from '../const';
import { Navigate } from 'react-router-dom';
import { getCity } from '../store/app-process/selectors';
import { Link } from 'react-router-dom';
import { getAuthorizationStatus } from '../store/user-process/selectors';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity: string = useAppSelector(getCity);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (authData: AuthData)=> {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: emailRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return(
    <>
      {authorizationStatus === AuthorizationStatus.Auth &&
       <Navigate to={AppRoute.Root}/>}
      {authorizationStatus !== AuthorizationStatus.Auth &&
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
               <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
                 <div className="login__input-wrapper form__input-wrapper">
                   <label className="visually-hidden">E-mail</label>
                   <input
                     className="login__input form__input"
                     type="email"
                     name="email"
                     id="email"
                     ref={emailRef}
                     placeholder="Email"
                     required
                   />
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
                     required
                   />
                 </div>
                 <button
                   className="login__submit form__submit button"
                   type="submit"
                 >Sign in
                 </button>
               </form>
             </section>
             <section className="locations locations--login locations--current">
               <div className="locations__item">
                 <Link className="locations__item-link" to="#">
                   <span>{currentCity}</span>
                 </Link>
               </div>
             </section>
           </div>
         </main>
       </div>}
    </>

  );
}

export default Login;
