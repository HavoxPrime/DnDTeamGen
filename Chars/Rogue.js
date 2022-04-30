const player = require("./Player.js");

class Rogue extends player {
  constructor(
    playerName,
    charName,
    hp,
    ac,
    init,
    speed,
    spellSlot,
    spellsKnown,
    rogArc

  ) {
    super(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown);

    this.rogArc = rogArc;
  }

  getRogArc() {
    return this.rogArc;
  }

  getRole() {
    return "Rogue";
  }
}

module.exports = Rogue;
