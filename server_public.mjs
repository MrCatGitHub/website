const _0x207360 = _0x5244; (function (_0x11bd4f, _0x5c2ffe) { const _0x5d6309 = _0x5244, _0x32d42a = _0x11bd4f(); while (!![]) { try { const _0x2eff40 = -parseInt(_0x5d6309(0x17e)) / 0x1 * (parseInt(_0x5d6309(0x193)) / 0x2) + parseInt(_0x5d6309(0x179)) / 0x3 + -parseInt(_0x5d6309(0x184)) / 0x4 * (parseInt(_0x5d6309(0x18d)) / 0x5) + parseInt(_0x5d6309(0x18b)) / 0x6 * (-parseInt(_0x5d6309(0x178)) / 0x7) + -parseInt(_0x5d6309(0x185)) / 0x8 + parseInt(_0x5d6309(0x1a2)) / 0x9 + -parseInt(_0x5d6309(0x189)) / 0xa * (-parseInt(_0x5d6309(0x19b)) / 0xb); if (_0x2eff40 === _0x5c2ffe) break; else _0x32d42a['push'](_0x32d42a['shift']()); } catch (_0x48a913) { _0x32d42a['push'](_0x32d42a['shift']()); } } }(_0x35c8, 0xa4a70), console[_0x207360(0x175)](_0x207360(0x17c))); function _0x35c8() { const _0x2068b6 = ['application/json', '537900lWDLhH', 'listen', '386226ETcFYn', 'F_OK', '40JeLXpG', '.css', '.jpg', '/index.html', '.svg', '192.168.178.30', '314wNychf', 'text/plain', '415\x20Unsupported\x20Media\x20Type\x0aNode.js\x20version:\x20', '.gif', 'image/svg+xml', './img/404.png', '404\x20Not\x20Found\x0aNode.js\x20version:\x20', 'startsWith', '429fzvKmX', '/script.js', 'image/jpeg', '/test.html', '/modern', 'Content-Type', 'Server\x20running\x20at\x20http://', '7256223nWVTAJ', 'end', 'log', 'image/webp', 'text/css', '105STCSdM', '2776992cmIPGX', 'text/html', '.js', 'Mr.\x20Cat\x27s\x20server\x20running\x20on\x20node.js', '.png', '6654wiWMRu', 'statusCode', '.jpeg', 'url', 'image/gif', '.json', '282680TarVRg', '4637616UzTHzk', 'image/png', 'setHeader']; _0x35c8 = function () { return _0x2068b6; }; return _0x35c8(); } import { createServer } from 'node:http'; import { readFile, access } from 'node:fs/promises'; import { constants } from 'node:fs'; import { extname } from 'node:path'; function _0x5244(_0xe7ee9b, _0x29e65d) { const _0x35c812 = _0x35c8(); return _0x5244 = function (_0x5244e5, _0x231ea7) { _0x5244e5 = _0x5244e5 - 0x175; let _0x5a4fc2 = _0x35c812[_0x5244e5]; return _0x5a4fc2; }, _0x5244(_0xe7ee9b, _0x29e65d); } const hostname = _0x207360(0x192), port = 0x50, nodeJsVer = 'v20.15.0', server = createServer(async (_0x55a918, _0x261f9d) => { const _0x1ab6b8 = _0x207360, _0x55d903 = _0x55a918['url'] === '/' ? _0x1ab6b8(0x190) : _0x55a918[_0x1ab6b8(0x181)]; if (_0x55d903 === _0x1ab6b8(0x19e) || _0x55d903 === _0x1ab6b8(0x19c)) { _0x261f9d[_0x1ab6b8(0x17f)] = 0x1a7, _0x261f9d[_0x1ab6b8(0x187)](_0x1ab6b8(0x1a0), _0x1ab6b8(0x194)), _0x261f9d[_0x1ab6b8(0x1a3)]('423\x20Locked\x0aNode.js\x20version:\x20' + nodeJsVer); return; } else { if (_0x55d903[_0x1ab6b8(0x19a)](_0x1ab6b8(0x19f))) { _0x261f9d['statusCode'] = 0x1f7, _0x261f9d[_0x1ab6b8(0x187)]('Content-Type', _0x1ab6b8(0x194)), _0x261f9d['end']('503\x20Service\x20Unavailable\x0aNode.js\x20version:\x20' + nodeJsVer); return; } } const _0x52e4b3 = '.' + _0x55d903, _0x40e836 = extname(_0x52e4b3); let _0x4f979f = ''; switch (_0x40e836) { case '.html': _0x4f979f = _0x1ab6b8(0x17a); break; case _0x1ab6b8(0x17b): _0x4f979f = 'application/javascript'; break; case _0x1ab6b8(0x18e): _0x4f979f = _0x1ab6b8(0x177); break; case _0x1ab6b8(0x183): _0x4f979f = _0x1ab6b8(0x188); break; case '.png': _0x4f979f = _0x1ab6b8(0x186); break; case _0x1ab6b8(0x18f): case _0x1ab6b8(0x180): _0x4f979f = _0x1ab6b8(0x19d); break; case _0x1ab6b8(0x196): _0x4f979f = _0x1ab6b8(0x182); break; case '.webp': _0x4f979f = _0x1ab6b8(0x176); break; case '.svg': _0x4f979f = _0x1ab6b8(0x197); break; default: _0x261f9d[_0x1ab6b8(0x17f)] = 0x19f, _0x261f9d['setHeader']('Content-Type', _0x1ab6b8(0x194)), _0x261f9d[_0x1ab6b8(0x1a3)](_0x1ab6b8(0x195) + nodeJsVer + '\x0a'); return; }try { await access(_0x52e4b3, constants[_0x1ab6b8(0x18c)]); const _0x5b71db = await readFile(_0x52e4b3); _0x261f9d[_0x1ab6b8(0x17f)] = 0xc8, _0x261f9d['setHeader'](_0x1ab6b8(0x1a0), _0x4f979f), _0x261f9d['end'](_0x5b71db); } catch (_0x423ec8) { if (_0x40e836 === _0x1ab6b8(0x17d) || _0x40e836 === _0x1ab6b8(0x18f) || _0x40e836 === _0x1ab6b8(0x180) || _0x40e836 === _0x1ab6b8(0x196) || _0x40e836 === '.webp' || _0x40e836 === _0x1ab6b8(0x191)) { const _0x50f6e9 = _0x1ab6b8(0x198); try { const _0x12b2e6 = await readFile(_0x50f6e9); _0x261f9d[_0x1ab6b8(0x17f)] = 0xc8, _0x261f9d[_0x1ab6b8(0x187)]('Content-Type', _0x1ab6b8(0x186)), _0x261f9d[_0x1ab6b8(0x1a3)](_0x12b2e6); } catch (_0x3037e9) { _0x261f9d['statusCode'] = 0x194, _0x261f9d[_0x1ab6b8(0x187)](_0x1ab6b8(0x1a0), _0x1ab6b8(0x194)), _0x261f9d[_0x1ab6b8(0x1a3)]('404\x20Not\x20Found\x0aNode.js\x20version:\x20' + nodeJsVer + '\x0a'); } } else _0x261f9d[_0x1ab6b8(0x17f)] = 0x194, _0x261f9d['setHeader']('Content-Type', _0x1ab6b8(0x194)), _0x261f9d[_0x1ab6b8(0x1a3)](_0x1ab6b8(0x199) + nodeJsVer + '\x0a'); } }); server[_0x207360(0x18a)](port, hostname, () => { const _0x2f4762 = _0x207360; console['log'](_0x2f4762(0x1a1) + hostname + ':' + port + '/\x20under\x20Node.js\x20version:\x20' + nodeJsVer); });