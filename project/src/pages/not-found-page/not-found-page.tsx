import Logo from '../../components/logo/logo';
import {Link} from 'react-router-dom';
import AuthPanel from '../../components/auth-panel/auth-panel';
import AuthData from '../../types/auth-data';

function NotFoundPage(authProps: AuthData): JSX.Element {
  return (
    <div>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo />
              </div>
              <AuthPanel {...authProps} />
            </div>
          </div>
        </header>

        <main className="page__main page__main--index page__main--index-empty">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
          </div>
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">404. Page not found </b>
                  <Link to="/">Back to the main page</Link>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default NotFoundPage;
