#!/usr/bin/env node
'use strict';
var getStdin = require('get-stdin');
var meow = require('meow');
var parseColumns = require('parse-columns');

var cli = meow({
	help: [
		'Usage',
		'  $ parse-columns <string>',
		'  $ echo <string> | parse-columns',
		'',
		'Example',
		'  $ lsof -i | parse-columns | underscore --outfmt=text pluck NAME',
		'  *:*',
		'  *:62886',
		'  *:*',
		'  localhost:9050 (LISTEN)'
	]
});

var input = cli.input[0];

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
	getStdin(init);
}
