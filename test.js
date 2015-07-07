'use strict';
var test = require('ava');
var childProcess = require('child_process');

test('main', function (t) {
	t.plan(2);

	childProcess.execFile('./cli.js', ['foo bar\n1   2'], {
		cwd: __dirname
	}, function (err, stdout) {
		t.assert(!err, err);
		t.assert(JSON.parse(stdout)[0].foo === '1');
	});
});

test('stdin', function (t) {
	t.plan(2);

	childProcess.exec('echo \'foo bar\n1   2\' | ./cli.js', {
		cwd: __dirname
	}, function (err, stdout) {
		t.assert(!err, err);
		t.assert(JSON.parse(stdout)[0].foo === '1');
	});
});
