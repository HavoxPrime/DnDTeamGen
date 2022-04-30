const player = require("./Player.js");

class Monk extends player {
  constructor(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown, ki, monTra) {
    super(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown);

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
