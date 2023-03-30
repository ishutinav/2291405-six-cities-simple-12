import {AuthorizationStatus} from '../../const';
import {Link} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function AuthPanel(): JSX.Element {
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const userData = useAppSelector((state) => state.userData);

  const handleOutClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {authStatus === AuthorizationStatus.Auth &&
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">{userData?.email}</span>
          </div>}
        </li>
        <li className="header__nav-item">
          {authStatus === AuthorizationStatus.Auth &&
          <Link className="header__nav-link" to="/login" onClick = {handleOutClick}>
            <span className="header__signout">Sign out</span>
          </Link>}
          {authStatus === AuthorizationStatus.NoAuth &&
          <Link className="header__nav-link header__nav-link--profile" to="/login">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__login">Sign in</span>
          </Link>}
        </li>
      </ul>
    </nav>
  );
}

export default AuthPanel;
