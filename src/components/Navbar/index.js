import styles from './Navbar.module.scss'
import {ReactComponent as Logo} from 'assets/logo.svg';

function Navbar() {
  return (
    <div className={styles.nav}>
      <Logo className={styles.logo}/>
    </div>
  );
}

export default Navbar;