import styles from './Navbar.module.scss'
import {ReactComponent as Logo} from 'assets/logo.svg';
import classNames from 'classnames';
import {
  RiShoppingCart2Line,
  RiShoppingCartFill
} from 'react-icons/ri'
import Busca from '../Busca';
import { Link, useLocation } from 'react-router-dom';


const iconesProps = {
  color: 'white',
  size: 24
}

function Navbar() {
  const {pathname} = useLocation();

  return (
    <nav className={styles.nav}>
  
      <Logo className={styles.logo}/>
  
      <div className={styles.links}>
        <div>
          <Link
            to='/'
            className={classNames(styles.link, {
            [styles.selected]: pathname === '/'
          })}>
            Página inicial
          </Link>
        </div>
      </div>

      <div className={styles.busca}>
        <Busca />
      </div>
  
      <div className={styles.icones}>
        <Link to='/carrinho'>
          { pathname === '/carrinho'
            ? <RiShoppingCartFill {... iconesProps}/>
            : <RiShoppingCart2Line {... iconesProps}/> 
          }
        </Link>
      </div>
  
    </nav>
  );
}

export default Navbar;