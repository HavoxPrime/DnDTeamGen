const player = require("./Player.js");

class Bard extends player {
  constructor(
    playerName,
    charName,
    hp,
    ac,
    init,
    speed,
    spellSlot,
    spellsKnown,
    bardIns,
    bardSch
  ) {
    super(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown);

    this.bardIns = bardIns;
    this.bardSch = bardSch;
  }

  getBardIns() {
    return this.bardIns;
  }

  getBardSch() {
    return this.bardSch;
  }

  getRole() {
    return "Bard";
  }
}

module.exports = Bard;
