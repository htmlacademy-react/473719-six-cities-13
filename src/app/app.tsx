import MainPage from '../pages/main-page';

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

function App({appData}: AppCardProps) : JSX.Element {
  return(
    <MainPage cards = {appData} />
  );
}

export default App;
