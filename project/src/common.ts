import { SortTypes } from './const';
import Comment from './types/comment';
import Offer from './types/offer';

function getValueByKey<T>(offerType: string, enums: object): T{
  return Object.values(enums)[Object.keys(enums).indexOf(offerType)] as T;
}

function getWeightForNullValue<T>(valueA: T, valueB: T) {
  if (valueA === null && valueB === null) {
    return 0;
  }

  if (valueA === null) {
    return 1;
  }

  if (valueB === null) {
    return -1;
  }

  return null;
}

function sortCommentDateDown(commentA: Comment, commentB: Comment) {
  const weight = getWeightForNullValue<string>(commentA.date, commentB.date);

  return weight ?? new Date(commentB.date).valueOf() - new Date(commentA.date).valueOf();
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
