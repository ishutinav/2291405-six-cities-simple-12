import CityList from '../../components/city-list/city-list';
import OffersContainer from '../../components/offers-container/offers-container';


function MainPage(): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <CityList />
      <OffersContainer />
    </main>
  );
}

export default MainPage;
