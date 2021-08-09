let pokemonList = [
    {
        name: 'Braviary',
        height: 1.5,
        type: ['normal', 'flying']
    },
    {
        name: 'Ho-oh',
        height: 3.8,
        type: ['flying', 'fairy', 'fire', 'grass']
    },
    {
        name: 'Piplup',
        height: 0.4,
        type: ['water', 'ice']
    },
    {
        name: 'Rapidash',
        height: 1.7,
        type: ['fire', 'ice']
    },
    {
        name: 'Arbok',
        height: 3.5,
        type: 'grass'
    }
];

pokemonList.forEach(function(pokemonList){
    console.log('Name: ' + pokemonList.name + ' [Height: ' + pokemonList.height + 'm] , Type: ' + pokemonList.type);
  })

