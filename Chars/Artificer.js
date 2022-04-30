const player = require("./Player.js");

class Artificer extends player {
  constructor(
    playerName,
    charName,
    hp,
    ac,
    init,
    speed,
    spellSlot,
    spellsKnown,
    infusions,
    infusedItems
  ) {
    super(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown);
    // if (typeof officeNum !== "number" || isNaN(officeNum) || officeNum < 0) {
    //   throw new Error(
    //     "Expected parameter 'officeNum' to be a non-negative number"
    //   );
    // }

    this.infusions = infusions;
    this.infusedItems = infusedItems;
  }

  getinfu() {
    return this.infusions;
  }

  getinfud() {
    return this.infusedItems;
  }

  getRole() {
    return "Artificer";
  }
}

module.exports = Artificer;
