import Card from '../types/card';
import AuthData from '../types/auth-data';

type AppSettings = {
  cards: Card[];
  placesCount: number;
  authProps: AuthData;
};

export default AppSettings;
