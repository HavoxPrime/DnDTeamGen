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
    infu,
    infuItems,
    artSpec,
  ) {
    super(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown);

    this.infu = infu;
    this.infuItems = infuItems;
    this.artSpec =artSpec;
  }

  getInfu() {
    return this.infu;
  }

  getInfuItems() {
    return this.infuItems;
  }

  getArtSpec() {
    return this.artSpec;
  }

  getRole() {
    return "Artificer";
  }
}

module.exports = Artificer;
