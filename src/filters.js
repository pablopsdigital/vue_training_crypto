import numeral from "numeral";

//Función para redondear
const dollarFilter = function(value) {
  if (!value) {
    return "$ 0";
  }

  //Se redondea el valor usando la libreria numeral
  return numeral(value).format("($ 0.00a)");
};

//Función para nostrar porcentaje
const percentFilter = function(value) {
  if (!value) {
    return "0%";
  }
  return `${Number(value).toFixed(2)}%`;
};

//Exportar la función
export { dollarFilter };
export { percentFilter };
