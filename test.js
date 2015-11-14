import childProcess from 'child_process';
import test from 'ava';
import pify from 'pify';

test('main', async t => {
	const stdout = await pify(childProcess.execFile)('./cli.js', ['foo bar\n1   2']);
	t.is(JSON.parse(stdout)[0].foo, '1');
});

test('stdin', async t => {
	const stdout = await pify(childProcess.exec)('echo \'foo bar\n1   2\' | ./cli.js');
	t.is(JSON.parse(stdout)[0].foo, '1');
});
