import React from 'react';
import type {BrowserHistory} from 'history';
import { store } from './store';

export type BasicOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage?: string;
}

export type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
    };
}

export type CityPoint = {
  id: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export type MapProps = {
  places?: Offer[];
  activeId: string | null;
  offerId?: string | null;
  widthParam: string;
}


export type Geo = {
    location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export type Offer = BasicOffer & Geo & {
  description: string;
  city: City;
  goods: Array<string>;
  images: Array<string>;
  host: {
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  bedrooms: number;
  maxAdults: number;
  handleHover?: React.SetStateAction<string | null> | undefined;
  handleLeave?: React.SetStateAction<string | null> | undefined;
}

export type ReviewItemProps = CommentDataProps & {
  id: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  date: string;
}
export type ReviewData {
  rating: number;
  comment: string;
}

export type CommentDataProps = ReviewData & {
  offerId: string;
  setReview?: React.SetStateAction<ReviewData>;
};

export type StarProps = {
  rate: number;
   choseStar: () => void;
}

export type NearPlacesProps = {
  places: Array<Offer>;
  setChosenCard: React.SetStateAction<string>;
}

export type NearPlaceItemProps = BasicOffer & {
  handleHover?: React.SetStateAction<string | null>;
  handleLeave?: React.SetStateAction<string | null>;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserData = {
  id: number;
  email: string;
  token: string;
}

export type AuthData = {
  login: string;
  password: string;
}

export interface HistoryRouterProps {
  history: BrowserHistory;
  basename?: string;
  children?: React.ReactNode;
}

export type FavoriteCity = {
  cityName: string;
}
