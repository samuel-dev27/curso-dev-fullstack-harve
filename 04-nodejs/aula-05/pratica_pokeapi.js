async function buscarPokemon (nombre) {
    try {
        const nombre = "charizard"; // Puedes cambiar el nombre del Pokémon que deseas buscar, pikachu, bulbasaur, squirtle, etc.
        const URL = `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`;
         
        const resposta = await fetch(URL);
        
        if (!resposta.ok) { 
            console.log(`Pokémon não encontrado`);
            return;
        } 

        const dados = await resposta.json();

        //console.log(dados) // Aquí se muestra toda la información del Pokémon;
        //console.log(dados.abilities) // Aqui se muestra el array de habilidades del Pokémon;
        //console.log(dados.types) // Aqui se muestra el array de tipos del Pokémon;

        
        const tipos = dados.types.map(t => t.type.name)
        const textoTIpos = tipos.join(" e ");

        const habilidades = dados.abilities.map(a => a.ability.name).join(" e ");
    
        //console.log(habilidades)

        //console.log(`O Pokémon ${dados.name} tem ID ${dados.id} e é do tipo ${dados.types.map(type => type.type.name).join(', ')}.`);
        console.log(`O Pokémon ${dados.name} tem ID ${dados.id} e é do tipo ${textoTIpos}.`);

        console.log(`As habilidades de ${dados.name} são: ${habilidades}.`)
    } catch (error) {
        console.log(`Erro ao buscar Pokémon: ${error.message}`);
        process.exit();
    }
    
}

buscarPokemon();