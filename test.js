import { assertStrictEq, assertThrows, runTests, test } from './dev-dependencies.js';
import moduleUrl from './main.js';

test('default host', () => {
    const url = moduleUrl('ky');
    assertStrictEq(url, 'https://unpkg.com/ky');
});

test('default host, with file', () => {
    const url = moduleUrl('ky', { file : 'index.js' });
    assertStrictEq(url, 'https://unpkg.com/ky/index.js');
});

test('default host, with owner', () => {
    const url = moduleUrl('ky', { owner : 'sholladay' });
    assertStrictEq(url, 'https://unpkg.com/@sholladay/ky');
});

test('default host, with version', () => {
    const url = moduleUrl('ky', { version : '1' });
    assertStrictEq(url, 'https://unpkg.com/ky@1');
});

test('default host, with file and owner', () => {
    const url = moduleUrl('ky', { file : 'index.js', owner : 'sholladay' });
    assertStrictEq(url, 'https://unpkg.com/@sholladay/ky/index.js');
});

test('default host, with file and version', () => {
    const url = moduleUrl('ky', { file : 'index.js', version : '1' });
    assertStrictEq(url, 'https://unpkg.com/ky@1/index.js');
});

test('default host, with owner and version', () => {
    const url = moduleUrl('ky', { owner : 'sholladay', version : '1' });
    assertStrictEq(url, 'https://unpkg.com/@sholladay/ky@1');
});

test('github.com host', () => {
    assertThrows(() => {
        moduleUrl('ky', { host : 'github.com' });
    }, Error, 'Missing options required by host github.com: `owner`');
});

test('github.com host, with file', () => {
    assertThrows(() => {
        moduleUrl('ky', { file : 'index.js', host : 'github.com' });
    }, Error, 'Missing options required by host github.com: `owner`');
});

test('github.com host, with owner', () => {
    const url = moduleUrl('ky', { host : 'github.com', owner : 'sholladay' });
    assertStrictEq(url, 'https://github.com/sholladay/ky/raw/HEAD/main.js');
});

test('github.com host, with version', () => {
    assertThrows(() => {
        moduleUrl('ky', { host : 'github.com', version : '1' });
    }, Error, 'Missing options required by host github.com: `owner`');
});

test('github.com host, with file and owner', () => {
    const url = moduleUrl('ky', { file : 'index.js', host : 'github.com', owner : 'sholladay' });
    assertStrictEq(url, 'https://github.com/sholladay/ky/raw/HEAD/index.js');
});

test('github.com host, with file and version', () => {
    assertThrows(() => {
        moduleUrl('ky', { file : 'index.js', host : 'github.com', version : '1' });
    }, Error, 'Missing options required by host github.com: `owner`');
});

test('github.com host, with owner and version', () => {
    const url = moduleUrl('ky', { host : 'github.com', owner : 'sholladay', version : '1' });
    assertStrictEq(url, 'https://github.com/sholladay/ky/raw/1/main.js');
});

test('unknown host', () => {
    const url = moduleUrl('ky', { host : 'example.com' });
    assertStrictEq(url, 'https://example.com/ky');
});

test('unknown host, with file', () => {
    const url = moduleUrl('ky', { file : 'index.js', host : 'example.com' });
    assertStrictEq(url, 'https://example.com/ky/index.js');
});

test('unknown host, with owner', () => {
    const url = moduleUrl('ky', { host : 'example.com', owner : 'sholladay' });
    assertStrictEq(url, 'https://example.com/@sholladay/ky');
});

test('unknown host, with version', () => {
    const url = moduleUrl('ky', { host : 'example.com', version : '1' });
    assertStrictEq(url, 'https://example.com/ky@1');
});

test('unknown host, with file and owner', () => {
    const url = moduleUrl('ky', { file : 'index.js', host : 'example.com', owner : 'sholladay' });
    assertStrictEq(url, 'https://example.com/@sholladay/ky/index.js');
});

test('unknown host, with file and version', () => {
    const url = moduleUrl('ky', { file : 'index.js', host : 'example.com', version : '1' });
    assertStrictEq(url, 'https://example.com/ky@1/index.js');
});

test('unknown host, with owner and version', () => {
    const url = moduleUrl('ky', { host : 'example.com', owner : 'sholladay', version : '1' });
    assertStrictEq(url, 'https://example.com/@sholladay/ky@1');
});

runTests();
