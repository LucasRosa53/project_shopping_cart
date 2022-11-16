export const fetchProduct = () => {
  // seu código aqui

};

export const fetchProductsList = async (resultados) => {
  // seu código aqui
  if (resultados) {
    const resu = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${resultados}`);
    const response = await resu.json();
    return response.results;
  }
  throw new Error('Termo de busca não informado');
};
