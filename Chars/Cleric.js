const player = require("./Player.js");

class Cleric extends player {
  constructor(
    playerName,
    charName,
    hp,
    ac,
    init,
    speed,
    spellSlot,
    spellsKnown,
    chaDiv,
    divDom,
    god

  ) {
    super(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown);

    this.chaDiv = chaDiv;
    this.divDom = divDom;
    this.god = god;
  }

  getChaDiv() {
    return this.chaDiv;
  }

  getDivDom() {
    return this.divDom;
  }

  getGod() {
    return this.god;
  }

  getRole() {
    return "Cleric";
  }
}

module.exports = Cleric;
