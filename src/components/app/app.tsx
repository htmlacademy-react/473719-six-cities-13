import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import WrongPage from '../../pages/wrong-page/wrong-page';
import Favorites from '../../pages/favorites/favorites';
import OfferPage from '../../pages/offer-page/offer-page';
import { AuthorizationStatus, AppRoute } from '../../const';

import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../browser-history/browser-history';
import browserHistory from '../../browser-history';

function App() : JSX.Element {
  return(
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={ <MainPage />}/>
        <Route path={AppRoute.LogIn} element={<Login />}/>
        <Route path={AppRoute.FavoriteItems} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.OfferItem} element={<OfferPage />}/>
        <Route path={AppRoute.EverythingElse} element={<WrongPage />} />
      </Routes>
    </HistoryRouter>
  );
}

export {AppRoute};

export default App;
