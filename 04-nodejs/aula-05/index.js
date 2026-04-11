async function run() {
    try {
        const CHAVE_API = "b259ae95"
        const URL = `https://api.hgbrasil.com/weather?city_name=Curitiba%2CPR&key=${CHAVE_API}`;

        const response = await fetch(URL, {method });
        const dados = await response.json();

        console.log(dados);
        const temperatura = dados.results.temp;
        const data = dados.results.date;
        const condicao = dados.results.description;
        const cidade = dados.results.city_name;


        console.log(`A temperatura em ${cidade} é de ${temperatura}°C, a condição do tempo é ${condicao} e a data é ${data}.`);
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

run();