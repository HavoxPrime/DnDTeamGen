const player = require("./Player.js");

class Monk extends player {
  constructor(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown, ki, monTra) {
    super(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown);
    // if (typeof officeNum !== "number" || isNaN(officeNum) || officeNum < 0) {
    //   throw new Error(
    //     "Expected parameter 'officeNum' to be a non-negative number"
    //   );
    // }
    this.ki = ki;
    this.monTra = monTra;
  }
  getKi() {
    return this.ki;
  }
  getMontra() {
    return this.monTra;
  }
  getRole() {
    return "Monk";
  }
}

module.exports = Monk;
