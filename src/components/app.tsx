import MainPage from '../pages/main-page';
import Login from '../pages/login';
import WrongPage from '../pages/wrong-page';
import Favorites from '../pages/favorites';
import OfferPage from '../pages/offer-page';
import { AuthorizationStatus, AppRoute } from '../const';

import {Route, BrowserRouter, Routes } from 'react-router-dom';
import PrivateRoute from './private-route';
import HistoryRouter from './browser-history';
import browserHistory from '../browser-history';

function App() : JSX.Element {
  return(
    <HistoryRouter history={browserHistory}>
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
    </HistoryRouter>
  );
}

export {AppRoute};

export default App;
