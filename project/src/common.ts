import Comment from './types/comment';

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

export {getValueByKey, sortCommentDateDown};
