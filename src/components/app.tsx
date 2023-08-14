import MainPage from '../pages/main-page';
import Login from '../pages/login';
import WrongPage from '../pages/wrong-page';
import Favorites from '../pages/favorites';
import OfferPage from '../pages/offer';
import { AuthorizationStatus, AppRoute } from '../const';

import {Route, BrowserRouter, Routes } from 'react-router-dom';

import PrivateRoute from './private-route';
import { useAppSelector } from '../redux-hooks';

function App() : JSX.Element {

  return(
    <BrowserRouter>
      <Routes>
        <Route path= {AppRoute.Root} element = { <MainPage />}/>
        <Route path= {AppRoute.LogIn} element= {<Login />}/>
        <Route path= {AppRoute.FavoriteItems} element= {
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path= {AppRoute.OfferItem} element= {<OfferPage />}/>
        <Route path={AppRoute.EverythingElse} element= {<WrongPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export {AppRoute};

export default App;
