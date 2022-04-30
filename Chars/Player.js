const validator = require("validator");
class Player {
  // constructs new players
  constructor(playerName, charName, hp, ac, init, speed, spellSlot, spellsKnown) {
    // if (typeof name !== "string" || !name.trim().length) {
    //   throw new Error("Expected parameter 'name' to be a non-empty string");
    // }
    // if (typeof id !== "number" || isNaN(id) || id < 0) {
    //   throw new Error("Expected parameter 'id' to be a non-negative number");
    // }
    // if (
    //   typeof email !== "string" ||
    //   !email.trim().length ||
    //   validator.isEmail(email) === false
    // ) {
    //   throw new Error("Expected parameter 'email' to be a valid email string");
    // }

    this.playerName = playerName;
    this.charName = charName;
    this.hp = hp;
    this.ac = ac;
    this.init = init;
    this.speed = speed;
    this.spellSlot = spellSlot;
    this.spellsKnown = spellsKnown;

  }
  // all Player functions
  getPlayerName() {
    return this.playerName;
  }
  getCharName() {
    return this.charName;
  }  
  getHp() {
    return this.hp;
  }  
  getAc() {
    return this.ac;
  }  
  getInit() {
    return this.init;
  }  
  getSpeed() {
    return this.speed;
  }  
  getSpellSlots() {
    return this.spellSlot;
  }
  getSpellsKnown() {
    return this.spellsKnown;
  }
  
}

module.exports = Player;
