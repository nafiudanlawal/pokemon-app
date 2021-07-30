let pokemonList = [
    {
        name: 'Braviary',
        height: 5,
        type: ['normal', 'flying']
    },
    {
        name: 'Ho-oh',
        height: 4,
        type: ['flying', 'fairy', 'fire', 'grass']
    },
    {
        name: 'Piplup',
        height: 1,
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
    if (pokemonList[i].height > 4 && pokemonList[i].height < 7) {
        // this will display the longest pokemon from the list above
        document.write(`${pokemonList[i].name} Height: ${pokemonList[i].height}cm - I\'m the Tallest/Longest Pokemon.`);
    }
    else {
        document.write(`<p>${pokemonList[i].name} Height: ${pokemonList[i].height}cm </p> `)
    }
}

