
function getValueByKey<T>(offerType: string, enums: object): T{
  return Object.values(enums)[Object.keys(enums).indexOf(offerType)] as T;
}

export {getValueByKey};
