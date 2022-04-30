const player = require("./Player.js");

class Ranger extends player {
  constructor(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown, favEnemy, favTerrain, fyteStyle, rangArc) {
    super(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown);
    // if (typeof officeNum !== "number" || isNaN(officeNum) || officeNum < 0) {
    //   throw new Error(
    //     "Expected parameter 'officeNum' to be a non-negative number"
    //   );
    // }
    this.favEnemy = favEnemy;
    this.favTerrain = favTerrain;
    this.fyteStyle = fyteStyle;
    this.rangArc = rangArc;
  }
  getFavEnemy() {
    return this.favEnemy;
  }
  getFavTerrain() {
    return this.favTerrain;
  }
  getFytestyle() {
    return this.fyteStyle;
  }
  getRangArc() {
    return this.rangArc;
  }
  getRole() {
    return "Ranger";
  }
}

module.exports = Ranger;
