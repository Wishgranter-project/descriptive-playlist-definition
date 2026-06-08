const Ajv = require('ajv');
const ajv = new Ajv();
const fs = require('fs');

const headerSchema = JSON.parse(fs.readFileSync('../schemas/playlist-header.json'));
const itemSchema = JSON.parse(fs.readFileSync('../schemas/playlist-item.json'));
const validateHeader = ajv.compile(headerSchema);
const validateItem = ajv.compile(itemSchema);

console.log(`Validating file ${process.argv[2]}`);

const lines = fs.readFileSync(process.argv[2], 'utf8').trim().split("\n");

if (validateHeader(JSON.parse(lines[0]))) {
    console.log('Header is valid.');
} else {
    console.log('Header is invalid.');
    console.log(validateHeader.errors);
}

lines.slice(1).forEach((line, i) => {
    if (validateItem(JSON.parse(line))) {
        console.log(`Line ${i} is valid.`);
    } else {
        console.log(`Line ${i} is invalid.`);
        console.log(validateItem.errors);
    }
});
