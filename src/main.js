import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';

const listaProdutos = document.querySelector('.products');

const funcaoGeral = async () => {
  const funcaoListaProdutos = await fetchProductsList('computador');
  funcaoListaProdutos.forEach((element) => {
    listaProdutos.appendChild(createProductElement(element));
  });
};
funcaoGeral();

document.querySelector('.cep-button').addEventListener('click', searchCep);
// INICIANDO PROJETO, VAMO QUE VAMO!
