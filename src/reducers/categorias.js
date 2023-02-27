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

import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    nome: 'Eletrônicos',
    thumbnail: eletronicosThumb,
    heade: eletronicosHeader,
    id: 'eletronicos',
    descricao: 'Aqui você encontra os melhores produtos de tecnologia'
  },
  {
    nome: 'Automotivos',
    thumbnail: automotivoThumb,
    header: automotivoHeader,
    id: 'automotivos',
    descricao: 'Aqui você encontra os melhores produtos de automotivos'
  },
  {
    nome: 'Jogos',
    thumbnail: jogosThumb,
    header: jogosHeader,
    id: 'jogos',
    descricao: 'Aqui você encontra os melhores produtos de jogos'
  },
  {
    nome: 'Escritório',
    thumbnail: escritorioThumb,
    header: escritorioHeader,
    id: 'escritorio',
    descricao: 'Aqui você encontra os melhores produtos de escritório'
  },
  {
    nome: 'Som e imagem',
    thumbnail: somThumb,
    header: somHeader,
    id: 'som',
    descricao: 'Aqui você encontra os melhores produtos de som e imagem'
  }
];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
});

export default categoriasSlice.reducer;