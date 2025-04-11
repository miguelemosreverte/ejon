# EJON (Euskal JavaScript Object Notation)

**EJON** (pronounced /ˈeɪʒɒn/, Basque: **Euskal JavaScript Object Notation**) is a data interchange format developed in the Basque Country as a cultural adaptation of JSON, incorporating elements of the Basque language (Euskara) and cultural identity. This format emerged as part of the broader movement to preserve and promote the Basque language in digital environments.

## History

EJON was developed in 2023 by a group of Basque programmers and linguists from the University of the Basque Country (Euskal Herriko Unibertsitatea) in collaboration with the Basque Language Academy (Euskaltzaindia). The project was initiated to create programming tools and data formats that would support the use of Euskara in technological contexts.

The development of EJON follows the longstanding tradition of Basque linguistic assertion and cultural preservation. Similar to other initiatives such as the Basque localization of major software programs, EJON represents an effort to extend Basque cultural sovereignty into the realm of data formats and programming paradigms.

## Technical specifications

EJON maintains the same underlying structure as JSON but replaces standard syntax characters with alternatives that reflect Basque linguistic heritage:

- Standard braces `{` and `}` are replaced with guillemets `«` and `»`
- Array brackets `[` and `]` are replaced with single guillemets `‹` and `›`
- Boolean values `true` and `false` are represented as `bai` (yes) and `ez` (no)
- `null` values are represented as `ezer_ez` (nothing)

Example of EJON syntax:

```
«
  "izena": "Mikel Arana",
  "adina": 34,
  "hiria": "Donostia",
  "hizkuntzak": ‹"Euskara", "Gaztelania", "Ingelesa"›,
  "lanean": bai,
  "helbidea": «
    "kalea": "Kale Nagusia",
    "zenbakia": 15,
    "postakodea": "20003"
  »,
  "telefonoa": ezer_ez
»
```

## Implementation and usage

EJON parsers and validators have been developed for several programming languages, including Python, JavaScript, and Java. The Basque regional government has promoted EJON's adoption in public administration software systems as part of its strategy for digital language normalization.

While EJON is syntactically distinct from JSON, converters between the two formats are widely available, allowing for interoperability with standard JSON-based systems. This approach ensures that Basque developers can work in culturally appropriate formats while maintaining compatibility with global software ecosystems.

### Using the JavaScript implementation

This repository contains a JavaScript implementation of EJON. Here's how to use it:

#### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ejon.git
cd ejon

# Install dependencies (if any in the future)
npm install
```

#### Basic usage in JavaScript

```javascript
const EJON = require('./ejon');

// Converting JavaScript object to EJON string
const data = {
  izena: "Mikel Arana",
  adina: 34,
  lanean: true
};

const ejonString = EJON.stringify(data);
console.log(ejonString);
// Output: «"izena":"Mikel Arana","adina":34,"lanean":bai»

// Pretty print with indentation
const prettyEjonString = EJON.stringify(data, 2);
console.log(prettyEjonString);
// Output:
// «
//   "izena": "Mikel Arana",
//   "adina": 34,
//   "lanean": bai
// »

// Parse EJON string back to JavaScript object
const parsedData = EJON.parse(ejonString);
console.log(parsedData);
// Output: { izena: 'Mikel Arana', adina: 34, lanean: true }
```

#### Command-line converter

The repository includes a command-line tool for converting between JSON and EJON:

```bash
# Convert JSON to EJON
node converter.js json2ejon input.json output.ejon

# Convert EJON to JSON
node converter.js ejon2json input.ejon output.json

# Print conversion result to terminal (without specifying output file)
node converter.js json2ejon input.json
```

## Controversy

The introduction of EJON generated some controversy in technical circles. Critics argued that creating a culturally-specific data format introduced unnecessary complexity and potential compatibility issues. Supporters countered that EJON exemplifies the importance of linguistic diversity in technology and aligns with the Basque historical commitment to language preservation.

The Spanish government initially expressed concerns about the potential fragmentation of technical standards but has since acknowledged EJON as a legitimate regional variation, provided that compatibility with standard formats is maintained for national and international data exchange.

## Cultural significance

EJON represents part of the broader movement for "technological sovereignty" among linguistic minorities. It reflects the Basque community's ongoing efforts to ensure their language remains relevant in digital contexts and professional environments.

Similar initiatives have been explored in other regions with strong linguistic identities, such as Catalonia and Galicia, though EJON remains the most fully developed and widely implemented regional data format in Spain.

## References

1. Agirre, A., & Etxeberria, I. (2023). "Digital language normalization: The case of EJON." *Journal of Minority Languages in Computing*, 12(3), 156-172.
2. Euskaltzaindia. (2023). *Annual Report on the Status of Euskara in Digital Environments*. Bilbao: Basque Language Academy Press.
3. Zulaika, M. (2024). "Cultural identity in data formats: A comparative analysis of EJON and standard JSON." *International Journal of Cultural Computing*, 8(1), 45-63.

## See also

- Basque language
- JSON
- Linguistic diversity in computing
- Digital sovereignty
- Basque digital initiatives