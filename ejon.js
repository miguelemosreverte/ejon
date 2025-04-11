/**
 * EJON (Euskal JavaScript Object Notation)
 * A data interchange format developed in the Basque Country as a cultural adaptation of JSON
 */

const EJON = {
  /**
   * Parse EJON text to produce a JavaScript value
   * @param {string} text - The EJON string to parse
   * @returns {*} The JavaScript value represented by the EJON string
   */
  parse: function(text) {
    // Replace EJON syntax with JSON syntax
    let jsonText = text
      .replace(/«/g, '{')
      .replace(/»/g, '}')
      .replace(/‹/g, '[')
      .replace(/›/g, ']')
      .replace(/\bbai\b/g, 'true')
      .replace(/\bez\b/g, 'false')
      .replace(/\bezer_ez\b/g, 'null');
    
    // Parse the resulting JSON
    return JSON.parse(jsonText);
  },

  /**
   * Convert a JavaScript value to an EJON string
   * @param {*} value - The value to convert to EJON
   * @param {string|number|null} [space] - Space parameter for pretty printing
   * @returns {string} The EJON string representing the value
   */
  stringify: function(value, space) {
    // First convert to JSON
    let jsonText = JSON.stringify(value, null, space);
    
    // Replace JSON syntax with EJON syntax
    return jsonText
      .replace(/{/g, '«')
      .replace(/}/g, '»')
      .replace(/\[/g, '‹')
      .replace(/\]/g, '›')
      .replace(/\btrue\b/g, 'bai')
      .replace(/\bfalse\b/g, 'ez')
      .replace(/\bnull\b/g, 'ezer_ez');
  }
};

// Export the EJON object for use in Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EJON;
} 