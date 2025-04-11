#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const EJON = require('./ejon');

// Parse command line arguments
const args = process.argv.slice(2);
const usage = `
EJON converter utility
Usage:
  node converter.js json2ejon <input.json> [output.ejon]
  node converter.js ejon2json <input.ejon> [output.json]

If output file is not specified, the result will be printed to stdout.
`;

if (args.length < 2) {
  console.log(usage);
  process.exit(1);
}

const command = args[0];
const inputFile = args[1];
const outputFile = args[2];

try {
  // Read the input file
  const inputContent = fs.readFileSync(inputFile, 'utf8');
  
  let result;
  
  // Process according to command
  if (command === 'json2ejon') {
    const jsonData = JSON.parse(inputContent);
    result = EJON.stringify(jsonData, 2);
  } else if (command === 'ejon2json') {
    const data = EJON.parse(inputContent);
    result = JSON.stringify(data, null, 2);
  } else {
    console.error(`Unknown command: ${command}`);
    console.log(usage);
    process.exit(1);
  }
  
  // Output result
  if (outputFile) {
    fs.writeFileSync(outputFile, result);
    console.log(`Conversion successful! Result saved to ${outputFile}`);
  } else {
    console.log(result);
  }
  
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
} 