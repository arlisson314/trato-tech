import Header from 'components/Header';
import styles from './Home.module.scss';
import relogio from 'assets/inicial.png';
import eletronicosThumb from 'assets/categorias/thumbnail/eletronicos.png';
import eletronicosHeader from 'assets/categorias/header/eletronicos.png';
import automotivoThumb from 'assets/categorias/thumbnail/automotivo.png';
import automotivoHeader from 'assets/categorias/header/automotivo.png';
import jogosThumb from 'assets/categorias/thumbnail/jogos.png';
import jogosHeader from 'assets/categorias/header/jogos.png';
import escritorioThumb from 'assets/categorias/thumbnail/escritorio.png';
import escritorioHeader from 'assets/categorias/header/escritorio.png';
import somThumb from 'assets/categorias/thumbnail/som.png';
import somHeader from 'assets/categorias/header/som.png';
import { useNavigate } from 'react-router-dom';

const categorias = [{
  nome: 'Eletrônicos',
  thumbnail: eletronicosThumb,
  heade: eletronicosHeader,
  id: 'eletronicos',
  descricao: 'Aqui você encontra os melhores produtos de tecnologia'
}, {
  nome: 'Automotivos',
  thumbnail: automotivoThumb,
  header: automotivoHeader,
  id: 'automotivos',
  descricao: 'Aqui você encontra os melhores produtos de automotivos'
  }, {
  nome: 'Jogos',
  thumbnail: jogosThumb,
  header: jogosHeader,
  id: 'jogos',
  descricao: 'Aqui você encontra os melhores produtos de jogos'
  }, {
  nome: 'Escritório',
  thumbnail: escritorioThumb,
  header: escritorioHeader,
  id: 'escritorio',
  descricao: 'Aqui você encontra os melhores produtos de escritório'
}, {
  nome: 'Som e imagem',
  thumbnail: somThumb,
  header: somHeader,
  id: 'som',
  descricao: 'Aqui você encontra os melhores produtos de som e imagem'
}]

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
          {categorias.map((categoria, _index) => (
            <div key={categoria.id} onClick={() => navigate(`/categoria/${categoria.id}`)}>
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;