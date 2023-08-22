import { Offer } from './types';

function calculateCardRating (rating: number) {
  return (Math.round((Math.ceil(rating) / 5) * 100)).toString();
}

function sortOffersByType(offers: Offer[], sortType: string): Offer[] {
  switch(sortType) {
    case ('toHigh') : return offers.sort((a,b) => a.price - b.price);
    case ('toLow') : return offers.sort((a,b) => b.price - a.price);
    case ('topRated'): return offers.sort((a,b) => b.rating - a.rating);
    default:return offers;
  }
}

function getStartPlacesFiltered (places: Offer[], city: string): Offer[] {
  return places.filter((offer) => offer.city.name === city);
}

export {calculateCardRating, sortOffersByType, getStartPlacesFiltered};
