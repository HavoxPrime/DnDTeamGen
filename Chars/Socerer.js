const player = require("./Player.js");

class Socerer extends player {
  constructor(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown, socOrigin, socPoints) {
    super(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown);

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
