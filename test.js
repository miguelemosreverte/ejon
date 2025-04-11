const EJON = require('./ejon');

// Test data based on the example in the README
const testData = {
  izena: "Mikel Arana",
  adina: 34,
  hiria: "Donostia",
  hizkuntzak: ["Euskara", "Gaztelania", "Ingelesa"],
  lanean: true,
  helbidea: {
    kalea: "Kale Nagusia",
    zenbakia: 15,
    postakodea: "20003"
  },
  telefonoa: null
};

// Test stringify
const ejonString = EJON.stringify(testData, 2);
console.log("EJON.stringify test:");
console.log(ejonString);
console.log("\n");

// Test parse
const parsedData = EJON.parse(ejonString);
console.log("EJON.parse test:");
console.log(JSON.stringify(parsedData, null, 2));
console.log("\n");

// Verify that the round-trip conversion preserves data
const isEqual = JSON.stringify(testData) === JSON.stringify(parsedData);
console.log(`Round-trip test ${isEqual ? 'passed' : 'failed'}`);

// Test individually each special EJON syntax element
console.log("\nTesting individual EJON syntax elements:");

// Test bai (true)
console.log("Bai test:", EJON.parse("bai") === true ? "passed" : "failed");

// Test ez (false)
console.log("Ez test:", EJON.parse("ez") === false ? "passed" : "failed");

// Test ezer_ez (null)
console.log("Ezer_ez test:", EJON.parse("ezer_ez") === null ? "passed" : "failed");

// Test guillemets for objects
console.log("Object syntax test:", 
  JSON.stringify(EJON.parse("«\"gakoa\": \"balioa\"»")) === 
  JSON.stringify({"gakoa": "balioa"}) ? "passed" : "failed");

// Test single guillemets for arrays
console.log("Array syntax test:", 
  JSON.stringify(EJON.parse("‹1, 2, 3›")) === 
  JSON.stringify([1, 2, 3]) ? "passed" : "failed"); 