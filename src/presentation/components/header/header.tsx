import React, { memo, useContext } from 'react';
import { Logo } from '@/presentation/components';
import Styles from './header-styles.scss';
import { ApiContext } from '@/presentation/contexts';
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const history = useHistory();
  const { setCurrentAccount } = useContext(ApiContext);
  const logout = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    event.preventDefault();
    setCurrentAccount(undefined);
    history.replace('/login');
  };
  return (
    <div className={Styles.headerWrap}>
      <header className={Styles.headerWrap}>
        <div className={Styles.headerContent}>
          <Logo />
          <div className={Styles.logoutWrap}>
            <span>Rodrigo</span>
            <a data-testid="logout" href="#" onClick={logout}>
              Sair
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default memo(Header);
