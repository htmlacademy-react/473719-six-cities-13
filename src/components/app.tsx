import MainPage from '../pages/main-page';
import Login from '../pages/login';
import WrongPage from '../pages/wrong-page';
import Favorites from '../pages/favorites';
import Offer from '../pages/offer';
import { AuthorizationStatus, AppRoute } from '../const';

import {Route, BrowserRouter, Routes } from 'react-router-dom';

import type { Cards } from '../types';
import PrivateRoute from './private-route';


function App({cards}: Cards) : JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path= {AppRoute.Root} element = { <MainPage cards = {cards} />} />
        <Route path= {AppRoute.LogIn} element= {<Login />}/>
        <Route path= {AppRoute.FavoriteItems} element= {
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path= {AppRoute.OfferItem} element= {<Offer />}/>
        <Route path={AppRoute.EverythingElse} element= {<WrongPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export {AppRoute};

export default App;