import { Outlet } from 'react-router-dom';
import Logo from '../components/logo/logo';
import AuthPanel from '../components/auth-panel/auth-panel';
import AuthData from '../types/auth-data';


function Layout(authProps: AuthData): JSX.Element {
  return (
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
      <Outlet/>
    </div>
  );
}

export default Layout;
