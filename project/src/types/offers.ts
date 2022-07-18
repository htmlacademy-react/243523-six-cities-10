import {cities} from './const';

export type CityName = typeof cities[number];

export type City = {
  name: CityName,
  location: string
}

export type Offer = {
  id: string
  type: string;
  city: City
  image: string
  description: string
  currency: string
  price: number
  rating: number
  status?: string
  isPremium?: boolean
  isFavorite?: boolean
};

