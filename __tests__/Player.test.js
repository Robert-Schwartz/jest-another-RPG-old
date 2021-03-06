const { expect } = require('@jest/globals');
const Player = require('../lib/Player.js');

//Test that players have a name and three number properties
//properties for health, strength, and agility
test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
});
