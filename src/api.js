//Ruta api

//Obtener lista criptomonedas
//Encademanos ruta consulta, convertimso formato json
//y devolvermo el data final
function getAssets() {
  return fetch(`https://api.coincap.io/v2/assets?limit=20`)
    .then((res) => res.json())
    .then((res) => res.data);
}

//Exportamos la función
export default { getAssets };
