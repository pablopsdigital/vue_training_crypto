//Ruta api

//Obtener lista criptomonedas
//Encademanos ruta consulta, convertimso formato json
//y devolvermo el data final
function getAssets() {
  return fetch(`https://api.coincap.io/v2/assets?limit=50`)
    .then(res => res.json())
    .then(res => res.data);
}

//Acceder a un asset/moneda en particular
function getAsset(coin) {
  //en la url solicitamos un parametro
  return fetch(`https://api.coincap.io/v2/assets/${coin}`)
    .then(res => res.json())
    .then(res => res.data);
}

//Acceder al historial para calcular el min,max y avg en cmputated CoinDetail
function getAssetHistory(coin) {
  //Configuramos los valores de las fechas para pasar como parametro
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1); //Un día anterior
  const start = now.getTime(); //Hoy menos un día

  //Solicitados el historias por horas con un inicio y fin - 1 valor por hora
  return fetch(
    `https://api.coincap.io/v2/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then(res => res.json())
    .then(res => res.data);
}

//Obtener las listas de mercados para una moneda concreta
function getMarkets(coin) {
  return fetch(`https://api.coincap.io/v2/assets/${coin}/markets?limit=5`)
    .then(res => res.json())
    .then(res => res.data);
}

//Obtener un exchange a partir de un id del end point de getMarkets
function getExchange(id) {
  return fetch(`https://api.coincap.io/v2/exchanges/${id}`)
    .then(res => res.json())
    .then(res => res.data);
}

//Exportamos la función
export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
  getAssetHistory
};
