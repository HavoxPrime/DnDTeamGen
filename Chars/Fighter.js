const player = require("./Player.js");

class Fighter extends player {
  constructor(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown, fyteStyle, martilArc) {
    super(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown);
    // if (typeof officeNum !== "number" || isNaN(officeNum) || officeNum < 0) {
    //   throw new Error(
    //     "Expected parameter 'officeNum' to be a non-negative number"
    //   );
    // }
    this.fyteStyle = fyteStyle;
    this.martilArc = martilArc;
  }
  getFytestyle() {
    return this.fyteStyle;
  }
  getMartilArc() {
    return this.martilArc;
  }
  getRole() {
    return "Fighter";
  }
}

module.exports = Fighter;
