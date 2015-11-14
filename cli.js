#!/usr/bin/env node
'use strict';
const getStdin = require('get-stdin');
const meow = require('meow');
const parseColumns = require('parse-columns');

const cli = meow(`
	Usage
	  $ parse-columns <string>
	  $ echo <string> | parse-columns

	Example
	  $ lsof -i | parse-columns | underscore --outfmt=text pluck NAME
	  *:*
	  *:62886
	  *:*
	  localhost:9050 (LISTEN)
`);

const input = cli.input[0];

function init(data) {
	console.log(JSON.stringify(parseColumns(data)));
}

if (!input && process.stdin.isTTY) {
	console.error('Input required');
	process.exit(2);
}

if (input) {
	init(input);
} else {
	getStdin().then(init);
}
