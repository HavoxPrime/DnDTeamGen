const player = require("./Player.js");

class Socerer extends player {
  constructor(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown, socOrigin, socPoints) {
    super(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown);
    // if (typeof officeNum !== "number" || isNaN(officeNum) || officeNum < 0) {
    //   throw new Error(
    //     "Expected parameter 'officeNum' to be a non-negative number"
    //   );
    // }
    this.socOrigin = socOrigin;
    this.socPoints = socPoints;
  }
  getSocOrigin() {
    return this.socOrigin;
  }
  getSocPoints() {
    return this.socPoints;
  }
  getRole() {
    return "Socerer";
  }
}

module.exports = Socerer;
