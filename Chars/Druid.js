const player = require("./Player.js");

class Druid extends player {
  constructor(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown, druidCircle) {
    super(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown);

    this.druidCircle = druidCircle;
  }
  getDruidCircle() {
    return this.druidCircle;
  }
  getRole() {
    return "Druid";
  }
}

module.exports = Druid;
