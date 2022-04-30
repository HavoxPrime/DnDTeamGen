const player = require("./Player.js");

class Barbarian extends player {
  constructor(playerName,charName,hp,ac,init,speed,spellSlot,spellsKnown,rages,priPath) {
    super(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown);

    this.rages = rages;
    this.priPath = priPath;
  }

  getRages() {
    return this.rages;
  }

  getPriPath() {
    return this.priPath;
  }

  getRole() {
    return "Barbarian";
  }
}

module.exports = Barbarian;
