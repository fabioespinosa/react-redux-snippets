var fs = require('fs');

var snippets = require('./snippets/index');

var snippets = {
  html: {
    snippets
  }
};

fs.writeFileSync('./snippets.json', JSON.stringify(snippets, null, '\t'));
