import { Offer, ReviewItemProps } from './types/types';

const calculateCardRating = (rating: number) => (Math.round((Math.ceil(rating) / 5) * 100)).toString();

const sortOffersByType = (offers: Offer[], sortType: string): Offer[] => {
  switch(sortType) {
    case ('toHigh') : return offers.sort((a,b) => a.price - b.price);
    case ('toLow') : return offers.sort((a,b) => b.price - a.price);
    case ('topRated'): return offers.sort((a,b) => b.rating - a.rating);
    default:return offers;
  }
};

const getStartPlacesFiltered = (places: Offer[], city: string): Offer[] => places.filter((offer) => offer.city.name === city);

const getFavoritesWithSpecificCity = (offers: Offer[], cityName: string) => offers.filter((item: Offer) => item.isFavorite && item.city.name === cityName);

const MAX_COUNT_LAST_REVIEWS = 10;

const sortReviews = (reviews: readonly ReviewItemProps[]): ReviewItemProps[] => (
  [...reviews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_COUNT_LAST_REVIEWS)
);

export {calculateCardRating, sortOffersByType, getStartPlacesFiltered, getFavoritesWithSpecificCity, sortReviews};
