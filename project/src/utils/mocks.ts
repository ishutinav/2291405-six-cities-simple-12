import { CITIES } from '../const';
import Offer from '../types/offer';
import { datatype, helpers, image, internet } from 'faker';
import Review from '../types/review';
import UserData from '../types/user-data';
import { ReviewData } from '../types/review-data';

export const makeFakeOffer = (): Offer => ({
  bedrooms: datatype.number(6),
  city: {
    location: {
      latitude: datatype.float(),
      longitude: datatype.float(),
      zoom: helpers.randomize([10, 13, 16]),
    },
    name: CITIES[Math.floor(Math.random() * CITIES.length)],
  },
  description: datatype.string(),
  goods: datatype.array(10).map((e) => String(e)),
  host: {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: internet.userName(),
  },
  id: datatype.number(),
  images: datatype.array(6).map(() => image.imageUrl(640, 480, 'nature', true)),
  isPremium: datatype.boolean(),
  location: {
    latitude: datatype.float(),
    longitude: datatype.float(),
    zoom: helpers.randomize([10, 13, 16]),
  },
  maxAdults: datatype.number(6),
  previewImage: image.imageUrl(640, 480, 'cat', true),
  price: datatype.number(),
  rating: datatype.float(5),
  title: datatype.string(),
  type: helpers.randomize(['apartment', 'room', 'house', 'hotel']),
});

export const makeFakeOffers = (): Offer[] => (datatype.array(20).map(() => makeFakeOffer()));

export const makeFakeReview = (): Review => ({
  comment: datatype.string(),
  date: datatype.string(),
  id: datatype.number(),
  rating: datatype.float(5),
  user: {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: internet.userName(),
  }
});

export const makeFakeReviews = (): Review[] => (datatype.array(20).map(() => makeFakeReview()));

export const makeFakeComment = (): ReviewData => ({
  hotelId:  datatype.number(),
  comment: datatype.string(),
  rating: datatype.number(5),
});

export const makeFakeUserData = (): UserData => ({
  avatarUrl: internet.avatar(),
  email: internet.email(),
  id: datatype.number(),
  isPro: datatype.boolean(),
  name: internet.userName(),
  token: datatype.string(),
});
