const player = require("./Player.js");

class Paladin extends player {
  constructor(playerName,charName,hp,ac,init,speed,spellSlot,spellsKnown,layHand,fyteStyle,sacOath) {
    super(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown);

    this.layHand = layHand;
    this.fyteStyle = fyteStyle;
    this.sacOath = sacOath;
  }

  getLayHand() {
    return this.layHand;
  }

  getFytestyle() {
    return this.fyteStyle;
  }

  getSacOath() {
    return this.sacOath;
  }

  getRole() {
    return "Paladin";
  }
}

module.exports = Paladin;
