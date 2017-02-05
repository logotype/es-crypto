# sha1-es
Cryptographic hash library producing a 160-bit (20-byte) hash value

[![npm](https://img.shields.io/npm/v/sha1-es.svg?maxAge=2592000)](https://www.npmjs.com/package/sha1-es) [![Dependency Status](https://api.travis-ci.org/logotype/es-crypto.svg?path=packages/sha1-es)](https://travis-ci.org/logotype/es-crypto?path=packages/sha1-es)

node
----

Import `SHA1` and call `.hash()` with a string (you might need to transpile the codebase from ES6 due to lack of support for modules and other features):

```javascript
import SHA1 from 'sha1-es';
const hash = SHA1.hash('abc');
console.log(hash);
```

Example output:

```bash
a9993e364706816aba3e25717850c26c9cd0d89d
```

Copyright and license
---------------------

Copyright © 2017 logotype

Author: Victor Norgren

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:  The above copyright
notice and this permission notice shall be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.