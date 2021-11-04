#!/usr/bin/env node
import process from 'node:process';
import getStdin from 'get-stdin';
import meow from 'meow';
import parseColumns from 'parse-columns';

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
`, {
	importMeta: import.meta,
});

const input = cli.input[0];

function init(data) {
	console.log(JSON.stringify(parseColumns(data)));
}

if (!input && process.stdin.isTTY) {
	console.error('Input required');
	process.exit(2);
}

(async () => {
	if (input) {
		init(input);
	} else {
		init(await getStdin());
	}
})();
