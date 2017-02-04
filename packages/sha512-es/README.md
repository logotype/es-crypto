# sha512-es
Cryptographic hash library producing a 512-bit (64-byte) hash value

[![Build Status](https://travis-ci.org/logotype/es-crypto.svg?branch=master)](https://travis-ci.org/logotype/es-crypto) [![NPM Version](https://badge.fury.io/js/sha512-es.svg)](http://badge.fury.io/js/sha512-es)

node
----

Import `SHA512` and call `.hash()` with a string (you might need to transpile the codebase from ES6 due to lack of support for modules and other features):

```javascript
import SHA512 from 'sha512-es';
const hash = SHA512.hash('abc');
console.log(hash);
```

Example output:

```bash
ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f
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