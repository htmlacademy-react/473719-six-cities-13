import React from 'react';
import type {BrowserHistory} from 'history';
import { AuthorizationStatus } from '../const';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

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
  handleHover?: ()=> void;
  handleLeave?: ()=> void;
}

export type ReviewItemProps = CommentDataProps & {
  id: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  date: string | Date;
}
export type ReviewData = {
  rating: number;
  comment: string;
}

export type CommentDataProps = ReviewData & {
  offerId: string;
  setReview?: React.SetStateAction<ReviewData>;
};

export type StarProps = {
  isSending: boolean;
  rate: number;
  handleInputChange: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export type ChoseCardName = string | null;

export type ChoseCardState = [
  chosenCard: ChoseCardName,
  setChosenCard: Dispatch<SetStateAction<ChoseCardName>>
]

export type NearPlacesProps = {
  places: Array<Offer>;
  setChosenCard: Dispatch<SetStateAction<ChoseCardName>>;
}

export type NearPlaceItemProps = BasicOffer & {
  isCheckAuth: boolean | undefined;
  handleHover?: () => void;
  handleLeave?: () => void;
}

export interface HistoryRouterProps {
  history: BrowserHistory;
  basename?: string;
  children?: React.ReactNode;
}

export type FavoriteCity = {
  cityName: string;
}

export type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export type TabsProps = {
  chosenCity : string;
}

export type PlaceCardProps = {
  offer: Offer;
  isCheckAuth?: boolean;
  handleHover:()=> void;
  handleLeave:()=> void;
}
