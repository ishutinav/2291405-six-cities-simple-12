import {PlaceTypes} from './const';

function getTypePlace(value: string) {
  const indexOfS = Object.keys(PlaceTypes).indexOf(value as unknown as PlaceTypes);
  return Object.values(PlaceTypes)[indexOfS];
}

export {getTypePlace};
