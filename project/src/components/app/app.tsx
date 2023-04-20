import {Route, Routes, Link} from 'react-router-dom';
import Layout from '../../pages/layout';
import {AppRoute} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import PropertyPage from '../../pages/property-page/property-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoadSpinner from '../loader-spinner/load-spinner';
import { useAppSelector } from '../../hooks';
import { getOffersDataLoadingStatus } from '../../store/app-data/selectors';


function App(): JSX.Element {
  const isOffersLoading = useAppSelector(getOffersDataLoadingStatus);

  if (isOffersLoading) {
    return (
      <LoadSpinner />
    );
  }

  return (
    <Routes>
      <Route path='/' element={<Layout /> }>
        <Route
          path={AppRoute.Main}
          element={<MainPage/>}
        />
        <Route
          path={`${AppRoute.Room}/:id`}
          element={<PropertyPage />}
        />
        <Route
          path="*"
          element={
            <NotFoundPage>
              <b className="cities__status">404. Page not found</b>
              <Link to="/">Back to the main page</Link>
            </NotFoundPage>
          }
        />
      </Route>
      <Route
        path={AppRoute.Login}
        element={<LoginPage />}
      />
    </Routes>
  );
}

export default App;
