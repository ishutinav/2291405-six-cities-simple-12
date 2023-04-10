import { SortTypes } from './const';
import Review from './types/review';
import Offer from './types/offer';

function getValueByKey<T>(offerType: string, enums: object): T{
  return Object.values(enums)[Object.keys(enums).indexOf(offerType)] as T;
}

function sortCommentDateDown(reviews: Review[]) {
  const items = [...reviews];
  items.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  return items;
}

function getSortedOffers(offers: Offer[], sortType: SortTypes) {
  const items = [...offers];
  switch (sortType) {
    case SortTypes.PRICE_UP:
      items.sort((a, b) => a.price - b.price);
      break;
    case SortTypes.PRICE_DOWN:
      items.sort((a, b) => b.price - a.price);
      break;
    case SortTypes.RATING:
      items.sort((a, b) => b.rating - a.rating);
      break;
  }

  return items;
}

export {getValueByKey, sortCommentDateDown, getSortedOffers};
