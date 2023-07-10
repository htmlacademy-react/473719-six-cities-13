import MainPage from '../pages/main-page';
import Login from '../pages/login';
import WrongPage from '../pages/wrong-page';

import {Route, BrowserRouter, Routes, Link} from 'react-router-dom';
import Favorites from '../pages/favorites';
import Offer from '../pages/offer';


type AppCard = {
  id: number;
  isPremium: boolean;
  isFavorite: boolean;
  imgUrl: string;
  price: number;
  tarification: string;
  title: string;
  type: string;
  averageStars:number;
}

type AppCardProps = {
  appData: AppCard[];
}

enum AppRoute {
  Root ='/',
  LogIn = '/login',
  FavoriteItems='/favorites',
  OfferItem= '/offer/:id',
  EverythingElse ='*',
}

function App({appData}: AppCardProps) : JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path= {AppRoute.Root} element = { <MainPage cards = {appData} />} />
        <Route path= {AppRoute.LogIn} element= {<Login />}/>
        <Route path= {AppRoute.FavoriteItems} element= {<Favorites />} />
        <Route path= {AppRoute.OfferItem} element= {<Offer />}/>
        <Route path={AppRoute.EverythingElse} element= {<WrongPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
