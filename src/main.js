import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';

const listaProdutos = document.querySelector('.products');

const loadPag = () => {
  const mensageCarregando = document.createElement('span');
  mensageCarregando.classList.add('loading');
  mensageCarregando.innerHTML = 'carregando...';
  listaProdutos.appendChild(mensageCarregando);
};

const removedorDeMensage = () => {
  const remove = document.querySelector('.loading');
  remove.remove();
};
const funcaoGeral = async () => {
  const funcaoListaProdutos = await fetchProductsList('computador');
  funcaoListaProdutos.forEach((element) => {
    listaProdutos.appendChild(createProductElement(element));
  });
};
const error = () => {
  const failed = document.createElement('span');
  failed.classList.add('error');
  failed.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  listaProdutos.appendChild(failed);
};
const mensageError = async () => {
  try {
    loadPag();
    await funcaoGeral();
    removedorDeMensage();
  } catch (erro) {
    removedorDeMensage();
    error();
  }
};
mensageError();
// loadPag();
// removedorDeMensage();
// await funcaoGeral();

document.querySelector('.cep-button').addEventListener('click', searchCep);
// INICIANDO PROJETO, VAMO QUE VAMO!
