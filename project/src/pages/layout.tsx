import { Outlet } from 'react-router-dom';
import Logo from '../components/logo/logo';
import AuthPanel from '../components/auth-panel/auth-panel';

function Layout(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container" data-testid="layout-container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <AuthPanel />
          </div>
        </div>
      </header>
      <Outlet/>
    </div>
  );
}

export default Layout;
