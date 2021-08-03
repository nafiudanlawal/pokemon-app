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
// initials ;      condition;           action;  
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 3.5 && pokemonList[i].height < 4) {
        // this will display the longest pokemon from the list above
        document.write(`${pokemonList[i].name} Height: ${pokemonList[i].height}m - I\'m the Tallest/Longest Pokemon.`);
    }
    else {
        document.write(`<p>${pokemonList[i].name} Height: ${pokemonList[i].height}m </p> `)
    }
}

