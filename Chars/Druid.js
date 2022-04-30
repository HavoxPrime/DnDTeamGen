const player = require("./Player.js");

class Druid extends player {
  constructor(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown, druidCircle) {
    super(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown);
    // if (typeof officeNum !== "number" || isNaN(officeNum) || officeNum < 0) {
    //   throw new Error(
    //     "Expected parameter 'officeNum' to be a non-negative number"
    //   );
    // }
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
