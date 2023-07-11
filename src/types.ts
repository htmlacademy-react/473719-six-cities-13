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

type Cards = {
  cards: Card[];
}

export type {Card, Cards};
