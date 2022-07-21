export const Cities = ['Amsterdam', 'Brussels', 'Cologne', 'Dusseldorf', 'Hamburg', 'Paris'] as const;

export type CityName = typeof Cities[number];

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

