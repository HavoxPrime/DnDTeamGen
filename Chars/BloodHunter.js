const player = require("./Player.js");

class BloodHunter extends player {
  constructor(playerName,charName,hp,ac,init,speed,spellSlot,spellsKnown,fyteStyle,priEsoRites,huntOrder,bloodCurses) {
    super(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown);

    this.fyteStyle = fyteStyle;
    this.priEsoRites = priEsoRites;
    this.huntOrder = huntOrder;
    this.bloodCurses = bloodCurses;
  }

  getFytestyle() {
    return this.fyteStyle;
  }

  getRites() {
    return this.priEsoRites;
  }

  getOrder() {
    return this.huntOrder;
  }

  getCurses() {
    return this.bloodCurses;
  }

  getRole() {
    return "Blood Hunter";
  }
}

module.exports = BloodHunter;
