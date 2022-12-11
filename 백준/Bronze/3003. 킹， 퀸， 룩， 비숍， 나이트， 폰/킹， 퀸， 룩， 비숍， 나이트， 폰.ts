import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const king = parseInt(input[0]);
const queen = parseInt(input[1]);
const rook = parseInt(input[2]);
const bishop = parseInt(input[3]);
const knight = parseInt(input[4]);
const pawn = parseInt(input[5]);

const DEFAULT_KING = 1;
const DEFAULT_QUEEN = 1;
const DEFAULT_ROOK = 2;
const DEFAULT_BISHOP = 2;
const DEFAULT_KNIGHT = 2;
const DEFAULT_PAWN = 8;

console.log(`${DEFAULT_KING-king} ${DEFAULT_QUEEN-queen} ${DEFAULT_ROOK-rook} ${DEFAULT_BISHOP-bishop} ${DEFAULT_KNIGHT-knight} ${DEFAULT_PAWN-pawn}`)
