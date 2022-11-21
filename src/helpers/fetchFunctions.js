export const fetchProduct = async () => {
  // seu código aqui

};

export const fetchProductsList = async (resultados) => {
  // seu código aqui
  if (resultados) {
    const resu = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${resultados}`);
    const response = await resu.json();
    console.log(response);
    return response.results;
  }
  throw new Error('Termo de busca não informado');
};
