import axios from "axios";

const apiIbge = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api",
});


export default apiIbge;
