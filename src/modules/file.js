const fs = require('fs');

const file = 'db.json';

const save = data => fs.writeFileSync(file, data);

const read = () => (fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null);

module.exports = {
  save,
  read,
};
