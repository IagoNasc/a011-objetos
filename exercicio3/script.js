const pokemon = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5,
    ataques:[]

};

const Investida = {
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100,}


const folhaNavalha = {
    nome: 'Folha navalha',
    dano: 45,
    tipo: 'grama',
    precisao: 100,
}

const JatoDeAgua = {
    nome: 'Jato de agua',
    dano: 40,
    tipo: 'agua',
    precisao: 100,
}

pokemon.ataques.push(Investida, folhaNavalha)


const pokemonCopia = {
...pokemon,
nome: "Squirtle",
tipo: "agua",
...pokemon.ataques,
}

pokemonCopia.ataques.push(JatoDeAgua)

console.log(pokemon);
console.log(pokemonCopia);