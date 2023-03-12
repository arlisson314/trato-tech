import styles from './Footer.module.scss'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa'

const iconeProps = {
  color: 'white',
  size: 24,
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <FaFacebook {... iconeProps}/>
        <FaTwitter {... iconeProps}/>
        <FaInstagram {... iconeProps}/>
      </div>
      <span>
        © 2023 Arlisson. Todos os direitos reservados.
      </span>
    </footer>
  );
}

export default Footer;