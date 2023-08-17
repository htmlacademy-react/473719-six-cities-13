import React from 'react';
import { store } from './store';

type BasicOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
    };
}

type CityPoint = {
  id: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

type MapProps = {
  places?: Offer[];
  activeId: string | null;
  offerId?: string | null;
  widthParam: string;
}


type Geo = {
    location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

type MapCard = BasicOffer & {
  handleHover?: React.SetStateAction<string | null> | undefined;
  handleLeave?: React.SetStateAction<string | null> | undefined;
}

type Cards = {
  cards: MapCard[];
}

type Offer = BasicOffer & Geo & {
  description: string;
  city: City;
  previewImage: string;
  goods: Array<string>;
  images: Array<string>;
  host: {
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  bedrooms: number;
  maxAdults: number;
}

type ReviewItemProps = {
  id: string;
  rating: number;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  date: string;
}

type StarProps = {
  rate: number;
   choseStar: () => void;
}

type NearPlacesProps = {
  places: Array<BasicOffer>;
  setChosenCard: React.SetStateAction<string>;
}

type NearPlaceItemProps = BasicOffer & {
  handleHover?: React.SetStateAction<string | null>;
  handleLeave?: React.SetStateAction<string | null>;
}

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type {Cards, BasicOffer, City, Geo, Offer, MapCard, StarProps, MapProps, CityPoint, ReviewItemProps, NearPlacesProps, NearPlaceItemProps, State, AppDispatch};
