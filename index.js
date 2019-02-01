var Vnt = require('./dist/vnt.js');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.Vnt === 'undefined') {
    window.Vnt = Vnt;
}

module.exports = Vnt;
