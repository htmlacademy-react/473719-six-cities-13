import PlaceCard from '../components/place-card';
import Tabs from '../components/tabs';
import Header from '../components/header';
import PLacesSorting from '../components/places-sorting';

type Card = {
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

type CardProps = {
  cards: Card[];
}


function MainPage({cards}: CardProps): JSX.Element {
  const offersCount: number = cards.length;

  return(
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
              <PLacesSorting />
              <div className="cities__places-list places__list tabs__content">
                {cards.map((card: Card) =>
                  (<PlaceCard key= {card.id} isFavorite = {card.isFavorite} isPremium={card.isPremium} imgUrl= {card.imgUrl} price = {card.price} tarification = {card.tarification} title = {card.title} type = {card.type} averageStars={card.averageStars}/>))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
