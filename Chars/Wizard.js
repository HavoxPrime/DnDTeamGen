const player = require("./Player.js");

class Wizard extends player {
  constructor(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown, arcTrad) {
    super(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown);

    this.arcTrad = arcTrad;
  }

  getArcTrad() {
    return this.arcTrad;
  }

  getRole() {
    return "Wizard";
  }
}

module.exports = Wizard;
