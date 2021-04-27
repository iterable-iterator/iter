import test from 'ava';

import {iter} from '../../src/index.js';

test('array', (t) => {
	const it = iter([1, 2, 3]);
	t.deepEqual(it.next(), {value: 1, done: false});
	t.deepEqual(it.next(), {value: 2, done: false});
	t.deepEqual(it.next(), {value: 3, done: false});
	t.deepEqual(it.next(), {value: undefined, done: true});
});

test('string', (t) => {
	const it = iter('abc');
	t.deepEqual(it.next(), {value: 'a', done: false});
	t.deepEqual(it.next(), {value: 'b', done: false});
	t.deepEqual(it.next(), {value: 'c', done: false});
	t.deepEqual(it.next(), {value: undefined, done: true});
});
