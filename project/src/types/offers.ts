export const Cities = ['Amsterdam', 'Brussels', 'Cologne', 'Dusseldorf', 'Hamburg', 'Paris'] as const;

export type CityName = typeof Cities[number];

export type Location = {
  latitude: number
  longitude: number
  zoom: number
}

export type City = {
  name: CityName,
  location: Location,
}

export type Host = {
  avatarUrl: string
  id: number
  isPro: boolean
  name: string
}

export type Offer = {
  id: number
  type: string
  city: City
  image: string
  description: string
  currency: string
  price: number
  rating: number
  status?: string
  isPremium?: boolean
  isFavorite?: boolean
  bedrooms: number
  goods: string[]
  host: Host,
  images: [string]
  location: Location
  maxAdults: number
  previewImage: string
  title: string
};

