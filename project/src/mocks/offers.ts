import {Offer} from 'types/offers';

export const offers: Offer[] = [
  {
    id: '1',
    type: 'Apartment',
    city: {
      name: 'Amsterdam',
      location: ''
    },
    image: '/img/apartment-01.jpg',
    description: 'Beautiful & luxurious apartment at great location',
    currency: '€',
    price: 120,
    rating: 5,
    status: 'Premium',
    isPremium: true,
    isFavorite: true,
  },
  {
    id: '2',
    type: 'Apartment',
    city: {
      name: 'Amsterdam',
      location: '',
    },
    image: '/img/room.jpg',
    description: 'Wood and stone place',
    currency: '€',
    price: 80,
    rating: 4,
    isFavorite: false,
  },
  {
    id: '3',
    type: 'Apartment',
    city: {
      name: 'Amsterdam',
      location: '',
    },
    image: '/img/apartment-02.jpg',
    description: 'Canal View Prinsengracht',
    currency: '€',
    price: 132,
    rating: 3,
  },
  {
    id: '4',
    type: 'Apartment',
    city: {
      name: 'Amsterdam',
      location: '',
    },
    image: '/img/apartment-03.jpg',
    description: 'Nice, cozy, warm big bed apartment',
    currency: '€',
    price: 180,
    rating: 5,
    status: 'Premium',
    isPremium: true,
    isFavorite: true,
  },
  {
    id: '5',
    type: 'Cologne',
    city: {
      name: 'Cologne',
      location: ''
    },
    image: '/img/apartment-small-04.jpg',
    description: 'White castle',
    currency: '€',
    price: 180,
    rating: 5,
    status: 'Premium',
    isPremium: true,
    isFavorite: true,
  }
];
