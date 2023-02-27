import styles from './Navbar.module.scss'
import {ReactComponent as Logo} from 'assets/logo.svg';
import classNames from 'classnames';
import {
  RiShoppingCart2Line,
  RiShoppingCartFill
} from 'react-icons/ri'
import Busca from '../Busca';
import { Link } from 'react-router-dom';


const iconesProps = {
  color: 'white',
  size: 24
}

function Navbar() {
<<<<<<< HEAD
=======
  const { pathname } = useLocation();

>>>>>>> 5ae6210 (feat: Adiciona hook useLocation  ao componente NavBar)
  return (
    <nav className={styles.nav}>
  
      <Logo className={styles.logo}/>
  
      <div className={styles.links}>
        <div>
          <Link
            to='/'
            className={classNames(styles.link, {
<<<<<<< HEAD
            [styles.selected]: window.location.pathname === '/'
=======
            [styles.selected]: pathname === '/'
>>>>>>> 5ae6210 (feat: Adiciona hook useLocation  ao componente NavBar)
          })}>
            Página inicial
          </Link>
        </div>
      </div>

      <div className={styles.busca}>
        <Busca />
      </div>
  
      <div className={styles.icones}>
        <a href='/carrinho'>
          { pathname === '/carrinho'
            ? <RiShoppingCartFill {... iconesProps}/>
            : <RiShoppingCart2Line {... iconesProps}/> 
          }
        </a>
      </div>
  
    </nav>
  );
}

export default Navbar;