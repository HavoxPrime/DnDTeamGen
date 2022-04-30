const player = require("./Player.js");

class Warlock extends player {
  constructor(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown, patron, eldInvo) {
    super(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown);
    // if (typeof officeNum !== "number" || isNaN(officeNum) || officeNum < 0) {
    //   throw new Error(
    //     "Expected parameter 'officeNum' to be a non-negative number"
    //   );
    // }
    this.patron = patron;
    this.eldInvo = eldInvo;
  }
  getPatron() {
    return this.patron;
  }
  getEldinvo() {
    return this.eldInvo;
  }
  getRole() {
    return "Warlock";
  }
}

module.exports = Warlock;
