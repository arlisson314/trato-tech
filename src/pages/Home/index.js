import Header from 'components/Header';
import styles from './Home.module.scss';
import relogio from 'assets/inicial.png';
import categorias from 'database';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Header
        titulo= 'Classificados Tech'
        descricao= 'O melhor site de classificados de tecnologia do Brasil!'
        imagem={relogio}
        className={styles.header}
      />
      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
          <h1>Categorias</h1>
        </div>
        <div className={styles['categorias-container']}>
          {categorias.map(({id, nome, thumbnail}, _index) => (
            <div key={id} onClick={() => navigate(`/categoria/${id}`)}>
              <img src={thumbnail} alt={nome} />
              <h1>{nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;