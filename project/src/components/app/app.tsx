import {Route, BrowserRouter, Routes, Link} from 'react-router-dom';
import Layout from '../../pages/layout';
import {AppRoute} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import PropertyPage from '../../pages/property-page/property-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import AuthData from '../../types/auth-data';

function App(authProps: AuthData): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout {...authProps}/> }>
          <Route
            path={AppRoute.Main}
            element={<MainPage/>}
          />
          <Route
            path={AppRoute.Room}
            element={<PropertyPage {...authProps} />}
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
          element={<LoginPage {...authProps}/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
