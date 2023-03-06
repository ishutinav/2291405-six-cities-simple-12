import MainPage from '../../pages/main-page/main-page';
import Card from '../../types/card';

type AppSettings = {
  cards: Card[];
  placesCount: number;
};

function App(props: AppSettings): JSX.Element {
  return <MainPage cards={props.cards} placesCount={props.placesCount}/>;
}

export default App;
