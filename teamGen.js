//Player classes needed
const artificer = require("./Chars/Artificer.js");
const barbarian = require("./Chars/Barbarian.js");
const bard = require("./Chars/Bard.js");
const bloodHunter = require("./Chars/BloodHunter.js");
const cleric = require("./Chars/Cleric.js");
const druid = require("./Chars/Druid.js");
const fighter = require("./Chars/Fighter.js");
const monk = require("./Chars/Monk.js");
const paladin = require("./Chars/Paladin.js");
const ranger = require("./Chars/Ranger.js");
const rogue = require("./Chars/Rogue.js");
const socerer = require("./Chars/Socerer.js");
const warlock = require("./Chars/Warlock.js");
const wizard = require("./Chars/Wizard.js");

//Anything else needed
const inq = require("inquirer");
const fs = require("fs");

//Questions for everyone
let allCards;
const playerQuestions = [
  {
    type: "list",
    message: "What type of character are you playing?",
    name: "charType",
    choices: ["Artificer", "Barbarian", "Bard", "Blood Hunter", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Socerer", "Warlock", "Wizard"],
  },
  {
    type: "input",
    message: "What is your character name?",
    name: "charName",
  },
  {
    type: "input",
    message: "What is your name?",
    name: "playerName",
  },
  {
    type: "number",
    message: "What is your HP?",
    name: "hp",
  },
  {
    type: "number",
    message: "What is the your AC?",
    name: "ac",
  },
  {
    type: "input",
    message: "What is your initiatve?",
    name: "init",
  },
  {
    type: "input",
    message: "What is your speed?",
    name: "speed",
  },
  {
    type: "input",
    message: "What are your spell slots?",
    name: "spellSlot",
  },
  {
    type: "input",
    message: "What are your known spells?",
    name: "spellsKnown",
  },
];

//Class questions
const artQuestions = [
  {
    type: "input",
    message: "What type of specialist are you?",
    name: "artSpec",
  },
  {
    type: "input",
    message: "What infusions do you know?",
    name: "infu",
  },
  {
    type: "input",
    message: "What infused items do you have?",
    name: "infuItems",
  }
];
const barbQuestions = [
  {
    type: "number",
    message: "How many rages do you have?",
    name: "rages",
  },
  {
    type: "input",
    message: "What is your Primal Path?",
    name: "priPath",
  }
];
const bardQuestions = [
  {
    type: "number",
    message: "How many Bardic Inspirations do you have?",
    name: "bardIns",
  },
  {
    type: "input",
    message: "What is your Bard Collage?",
    name: "bardSch",
  }
];
const bldhntQuestions = [
  {
    type: "input",
    message: "What is your fighting style?",
    name: "fyteStyle",
  },
  {
    type: "input",
    message: "What are your Blood Rites?",
    name: "priEsoRites",
  },
  {
    type: "input",
    message: "What is your Hunter Order?",
    name: "huntOrder",
  },
  {
    type: "input",
    message: "What are your Blood Curses?",
    name: "bloodCurses",
  },
];
const cleQuestions = [
  {
    type: "number",
    message: "How many Divine Charges do you have?",
    name: "chaDiv",
  },
  {
    type: "input",
    message: "What is your Divine Domain?",
    name: "divDom",
  },
  {
    type: "input",
    message: "Who is your god?",
    name: "god",
  }
];
const druQuestions = [
  {
    type: "input",
    message: "What is your druid circle?",
    name: "druidCircle",
  },
];
const figQuestions = [
  {
    type: "input",
    message: "What is your fighting style?",
    name: "fyteStyle",
  },
  {
    type: "input",
    message: "What is your martial archetype?",
    name: "martilArc",
  }
];
const monQuestions = [
  {
    type: "input",
    message: "What is your Ki Point maximum?",
    name: "ki",
  },
  {
    type: "input",
    message: "What is your monastic tradition?",
    name: "monTra",
  },
];
const palQuestions = [
  {
    type: "number",
    message: "How much hp in your Lay on Hands pool?",
    name: "layHand",
  },
  {
    type: "input",
    message: "What is your fighting style?",
    name: "fyteStyle",
  },
  {
    type: "input",
    message: "What is your Sacred Oath?",
    name: "sacOath",
  }
];
const rangQuestions = [
  {
    type: "input",
    message: "What is your favored enemy?",
    name: "favEnemy",
  },
  {
    type: "input",
    message: "What is your Favored terrain?",
    name: "favGround",
  },
  {
    type: "input",
    message: "What is your fighting style?",
    name: "fyteStyle",
  },
  {
    type: "input",
    message: "What is your Ranger archetype?",
    name: "rangArc",
  }
];
const rogQuestions = [
  {
    type: "input",
    message: "What is your Roguish Archetype?",
    name: "rogArc",
  }
];
const socQuestions = [
  {
    type: "input",
    message: "What is your origin?",
    name: "socOrigin",
  },
  {
    type: "number",
    message: "How Many sorcery points do they have?",
    name: "socPoints",
  },
];
const warQuestions = [
  {
    type: "input",
    message: "What is your patron?",
    name: "patron",
  },
  {
    type: "input",
    message: "What are your eldritch invocations?",
    name: "eldInvo",
  },
];
const wisQuestions = [];

const fromTheTop = [
  {
    type: "list",
    message: "Do you have more Players?",
    name: "moreChar",
    choices: ["Yes", "NO"],
  },
];

function callback(err) {
  if (err) throw err;
  //console.log('source was not copied to destination');
}

function getSetInfo() {
  fs.copyFile("./res/index.html", "./output/index.html", callback);

  inq.prompt(playerQuestions).then((response) => {
    //Retrive info bases on class
    if (response.charType === "Artificer") {
      inq.prompt(artQuestions).then((artResponse) => {
        const char = new artificer(
          response.playerName,
          response.charName,
          response.hp,
          response.ac,
          response.init,
          response.speed,
          response.spellSlot,
          response.spellsKnown,
          artResponse.artSpec,
          artResponse.infu,
          artResponse.infuItems
        );
        generateCard(char);
        inq.prompt(fromTheTop).then((ans) => {
          if (ans.moreChar === "Yes") {
            getSetInfo();
          } else {
            finishingStroke();
            console.log("Check index.html in the output folder for your team!");
          }
        });
      });

    } else if (response.charType === "Barbarian") {
      inq.prompt(barbQuestions).then((barbResponse) => {
        const char = new barbarian(
          response.playerName,
          response.charName,
          response.hp,
          response.ac,
          response.init,
          response.speed,
          response.spellSlot,
          response.spellsKnown,
          barbResponse.rages,
          barbResponse.priPath
        );
        generateCard(char);
        inq.prompt(fromTheTop).then((ans) => {
          if (ans.moreChar === "Yes") {
            getSetInfo();
          } else {
            finishingStroke();
            console.log("Check index.html in the output folder for your team!");
          }
        });
      });

    } else if (response.charType === "Bard") {
      inq.prompt(bardQuestions).then((bardResponse) => {
        const char = new bard(
          response.playerName,
          response.charName,
          response.hp,
          response.ac,
          response.init,
          response.speed,
          response.spellSlot,
          response.spellsKnown,
          bardResponse.bardIns,
          bardResponse.bardSch
        );
        generateCard(char);
        inq.prompt(fromTheTop).then((ans) => {
          if (ans.moreChar === "Yes") {
            getSetInfo();
          } else {
            finishingStroke();
            console.log("Check index.html in the output folder for your team!");
          }
        });
      });
      
    } else if (response.charType === "Blood Hunter") {
      inq.prompt(bldhntQuestions).then((bldhntResponse) => {
        const char = new bloodHunter(
          response.playerName,
          response.charName,
          response.hp,
          response.ac,
          response.init,
          response.speed,
          response.spellSlot,
          response.spellsKnown,
          bldhntResponse.fyteStyle,
          bldhntResponse.priEsoRites,
          bldhntResponse.huntOrder,
          bldhntResponse.bloodCurses
        );
        generateCard(char);
        inq.prompt(fromTheTop).then((ans) => {
          if (ans.moreChar === "Yes") {
            getSetInfo();
          } else {
            finishingStroke();
            console.log("Check index.html in the output folder for your team!");
          }
        });
      });
    } else if (response.charType === "Cleric") {
      inq.prompt(cleQuestions).then((cleResponse) => {
        const char = new cleric(
          response.playerName,
          response.charName,
          response.hp,
          response.ac,
          response.init,
          response.speed,
          response.spellSlot,
          response.spellsKnown,
          cleResponse.chaDiv,
          cleResponse.divDom,
          cleResponse.god
        );
        generateCard(char);
        inq.prompt(fromTheTop).then((ans) => {
          if (ans.moreChar === "Yes") {
            getSetInfo();
          } else {
            finishingStroke();
            console.log("Check index.html in the output folder for your team!");
          }
        });
      });
      
    } else if (response.charType === "Druid") {
      inq.prompt(druQuestions).then((druResponse) => {
        const char = new druid(
          response.playerName,
          response.charName,
          response.hp,
          response.ac,
          response.init,
          response.speed,
          response.spellSlot,
          response.spellsKnown,
          druResponse.druidCircle
        );
        generateCard(char);
        inq.prompt(fromTheTop).then((ans) => {
          if (ans.moreChar === "Yes") {
            getSetInfo();
          } else {
            finishingStroke();
            console.log("Check index.html in the output folder for your team!");
          }
        });
      });
    } else if (response.charType === "Fighter") {
      inq.prompt(figQuestions).then((figResponse) => {
        const char = new fighter(
          response.playerName,
          response.charName,
          response.hp,
          response.ac,
          response.init,
          response.speed,
          response.spellSlot,
          response.spellsKnown,
          figResponse.fyteStyle,
          figResponse.martilArc
        );
        generateCard(char);
        inq.prompt(fromTheTop).then((ans) => {
          if (ans.moreChar === "Yes") {
            getSetInfo();
          } else {
            finishingStroke();
            console.log("Check index.html in the output folder for your team!");
          }
        });
      });
    } else if (response.charType === "Monk") {
      inq.prompt(monQuestions).then((monResponse) => {
        const char = new monk(
          response.playerName,
          response.charName,
          response.hp,
          response.ac,
          response.init,
          response.speed,
          response.spellSlot,
          response.spellsKnown,
          monResponse.ki,
          monResponse.monTra
        );
        generateCard(char);
        inq.prompt(fromTheTop).then((ans) => {
          if (ans.moreChar === "Yes") {
            getSetInfo();
          } else {
            finishingStroke();
            console.log("Check index.html in the output folder for your team!");
          }
        });
      });
    } else if (response.charType === "Paladin") {
      inq.prompt(palQuestions).then((palResponse) => {
        const char = new paladin(
          response.playerName,
          response.charName,
          response.hp,
          response.ac,
          response.init,
          response.speed,
          response.spellSlot,
          response.spellsKnown,
          palResponse.layHand,
          palResponse.fyteStyle,
          palResponse.sacOath
        );
        generateCard(char);
        inq.prompt(fromTheTop).then((ans) => {
          if (ans.moreChar === "Yes") {
            getSetInfo();
          } else {
            finishingStroke();
            console.log("Check index.html in the output folder for your team!");
          }
        });
      });
      
    } else if (response.charType === "Ranger") {
      inq.prompt(rangQuestions).then((rangResponse) => {
        const char = new ranger(
          response.playerName,
          response.charName,
          response.hp,
          response.ac,
          response.init,
          response.speed,
          response.spellSlot,
          response.spellsKnown,
          rangResponse.favEnemy,
          rangResponse.favTerrain,
          rangResponse.fyteStyle,
          rangResponse.rangArc
        );
        generateCard(char);
        inq.prompt(fromTheTop).then((ans) => {
          if (ans.moreChar === "Yes") {
            getSetInfo();
          } else {
            finishingStroke();
            console.log("Check index.html in the output folder for your team!");
          }
        });
      });
    } else if (response.charType === "Rogue") {
      inq.prompt(rogQuestions).then((rogResponse) => {
        const char = new rogue(
          response.playerName,
          response.charName,
          response.hp,
          response.ac,
          response.init,
          response.speed,
          response.spellSlot,
          response.spellsKnown,
          rogResponse.rogArc,
        );
        generateCard(char);
        inq.prompt(fromTheTop).then((ans) => {
          if (ans.moreChar === "Yes") {
            getSetInfo();
          } else {
            finishingStroke();
            console.log("Check index.html in the output folder for your team!");
          }
        });
      });
      
    } else if (response.charType === "Socerer") {
      inq.prompt(socQuestions).then((socResponse) => {
        const char = new socerer(
          response.playerName,
          response.charName,
          response.hp,
          response.ac,
          response.init,
          response.speed,
          response.spellSlot,
          response.spellsKnown,
          socResponse.socOrigin,
          socResponse.socPoints
        );
        generateCard(char);
        inq.prompt(fromTheTop).then((ans) => {
          if (ans.moreChar === "Yes") {
            getSetInfo();
          } else {
            finishingStroke();
            console.log("Check index.html in the output folder for your team!");
          }
        });
      });
    } else if (response.charType === "Warlock") {
      inq.prompt(warQuestions).then((warResponse) => {
        const char = new warlock(
          response.playerName,
          response.charName,
          response.hp,
          response.ac,
          response.init,
          response.speed,
          response.spellSlot,
          response.spellsKnown,
          warResponse.patron,
          warResponse.eldInvo
        );
        generateCard(char);
        inq.prompt(fromTheTop).then((ans) => {
          if (ans.moreChar === "Yes") {
            getSetInfo();
          } else {
            finishingStroke();
            console.log("Check index.html in the output folder for your team!");
          }
        });
      });
    } else if (response.charType === "Wizard") {
      
    }
  });
}
// somethin below messed up
function generateCard(daChar) {
  let charCard;
  let spec;
  let charColor;
  let img;
  let imgDesc;
  // class spec
  if (daChar.getRole() === "Artificer") {
    img = "../imgs/Artificer.jpg";
    imgDesc = "Artificer img";
    charColor = "artCard";
    spec = `Artificer Specialization: ${daChar.getArtSpec()}</li>
    <li class="list-group-item">Infusions Known: ${daChar.getInfu()}</li>
    <li class="list-group-item">Infused Items: ${daChar.getInfuItems()}`;

  } else if (daChar.getRole() === "Barbarian") {
    img = "../imgs/Barbarian.jpg";
    imgDesc = "Barbarian img";
    charColor = "barbCard";
    spec = `Total Rages: ${daChar.getRages()}</li>
    <li class="list-group-item">PrimalPath: ${daChar.getPriPath()}`;

  } else if (daChar.getRole() === "Bard") {
    img = "../imgs/Bard.jpg";
    imgDesc = "Bard img";
    charColor = "bardCard";
    spec = `Total Insperations: ${daChar.getBardIns()}</li>
    <li class="list-group-item">Bard School: ${daChar.getBardSch()}`;

  } else if (daChar.getRole() === "Blood Hunter") {
    img = "../imgs/BloodHunter.jpg";
    imgDesc = "BloodHunter img";
    charColor = "bldhntCard";
    spec = `Fighting Style: ${daChar.getFytestyle()}</li>
    <li class="list-group-item">Blood Rites: ${daChar.getRites()}</li>
    <li class="list-group-item">Hunter Order: ${daChar.getOrder()}</li>
    <li class="list-group-item">Blood Curses: ${daChar.getCurses()}`;

  } else if (daChar.getRole() === "Cleric") {
    img = "../imgs/Cleric.jpg";
    imgDesc = "Cleric img";
    charColor = "cleCard";
    spec = `Divine Charges: ${daChar.getChaDiv()}</li>
    <li class="list-group-item">Divine Domain: ${daChar.getDivDom()}</li>
    <li class="list-group-item">God: ${daChar.getGod()}`;

  } else if (daChar.getRole() === "Druid") {
    img = "../imgs/Druid.jpg";
    imgDesc = "Druid img";
    charColor = "druCard";
    spec = `Druid Circle: ${daChar.getDruidCircle()}`;

  }  else if (daChar.getRole() === "Fighter") {
    img = "../imgs/Fighter.jpg";
    imgDesc = "Fighter img";
    charColor = "figCard";
    spec = `Fighting Style: ${daChar.getFytestyle()}</li>
    <li class="list-group-item">Martial Archetype: ${daChar.getMartilArc()}`;

  }  else if (daChar.getRole() === "Monk") {
    img = "../imgs/Monk.jpg";
    imgDesc = "Monk img";
    charColor = "monCard";
    spec = `Ki Points: ${daChar.getKi()}</li>
    <li class="list-group-item"> Monastic Traditon: ${daChar.getMontra()}`;

  } else if (daChar.getRole() === "Paladin") {
    img = "../imgs/Paladin.jpg";
    imgDesc = "Paladin img";
    charColor = "palCard";
    spec = `Total Lay on Hands Pool: ${daChar.getLayHand()}</li>
    <li class="list-group-item">Fighting Style: ${daChar.getFytestyle()}</li>
    <li class="list-group-item">Sacred Oath: ${daChar.getSacOath()}`;

  } else if (daChar.getRole() === "Ranger") {
    img = "../imgs/Ranger.jpg";
    imgDesc = "Ranger img";
    charColor = "rangCard";
    spec = `Fighting Style: ${daChar.getFytestyle()}</li>
    <li class="list-group-item">Ranger Archetype: ${daChar.getRangArc()}`;
    
  } else if (daChar.getRole() === "Rogue") {
    img = "../imgs/Rogue.jpg";
    imgDesc = "Rogue img";
    charColor = "rogCard";
    spec = `Roguish Architype: ${daChar.getRogArc()}}`;

  } else if (daChar.getRole() === "Socerer") {
    img = "../imgs/Socerer.jpg";
    imgDesc = "Socerer img";
    charColor = "socCard";
    spec = `Sorcerous Origin: ${daChar.getSocOrigin()}</li>
    <li class="list-group-item">Sorcery Points: ${daChar.getSocPoints()}`;

  } else if (daChar.getRole() === "Warlock") {
    img = "../imgs/Warlock.jpg";
    imgDesc = "Warlock img";
    charColor = "warCard";
    spec = `Patron: ${daChar.getPatron()}</li>
    <li class="list-group-item">Eldritch Invocation: ${daChar.getEldinvo()}`;

  } else if (daChar.getRole() === "Wizard") {

  }
//somethin above messed up
  charCard += ` <div class="${charColor}">\n`;
  charCard += `   <img src="${img}" class="card-img-top" alt="${imgDesc}" />\n`;
  charCard += `   <div class="card-body">\n`;
  charCard += `     <h5 class="cardTitle">${daChar.getRole()}</h5>\n`;
  charCard += `   </div>\n`;
  charCard += `   <ul class="list-group list-group-flush">\n`;
  charCard += `     <li class="list-group-item">Name: ${daChar.getCharName()}</li>\n`; //name
  charCard += `     <li class="list-group-item">Player: ${daChar.getPlayerName()}</li>\n`;
  charCard += `     <li class="list-group-item">HP: ${daChar.getHp()}</li>\n`;
  charCard += `     <li class="list-group-item">AC: ${daChar.getAc()}</li>\n`;
  charCard += `     <li class="list-group-item">Initiative: +${daChar.getInit()}</li>\n`;
  charCard += `     <li class="list-group-item">Speed: ${daChar.getSpeed()}</li>\n`;
  charCard += `     <li class="list-group-item">Spell Slots: ${daChar.getSpellSlots()}</li>\n`;
  charCard += `     <li class="list-group-item">Spells Known: ${daChar.getSpellsKnown()}</li>\n`;
  charCard += `     <li class="list-group-item">${spec}</li>\n`; //spec propteries
  charCard += `   </ul>\n`;
  charCard += ` </div>\n`;
  charCard += `\n`;
  allCards += charCard;
}

function finishingStroke() {
  fs.appendFile(`./output/index.html`, allCards, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
  const lastwords = `</div>\n</body>\n</html>`;
  fs.appendFile(`./output/index.html`, lastwords, (err) =>
    err ? console.log(err) : console.log("Cards successfully added!")
  );
}

getSetInfo();
