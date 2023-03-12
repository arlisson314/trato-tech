import styles from './Navbar.module.scss'
import {ReactComponent as Logo} from 'assets/logo.svg';
import classNames from 'classnames';
import {
  RiShoppingCart2Line,
  RiShoppingCartFill
} from 'react-icons/ri'
import Busca from '../Busca';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const iconesProps = {
  color: 'white',
  size: 24
}

function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
  
      <Logo className={styles.logo} onClick={() => navigate('/')}/>
  
      <div className={styles.links}>
          <Link
            to='/'
            className={classNames(styles.link, {
            [styles.selected]: pathname === '/'
          })}>
            Página inicial
          </Link>
          <Link
            to='/anuncie'
            className={classNames(styles.link, {
            [styles.selected]: pathname === '/anuncie'
          })}>
            Anuncie
          </Link>
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