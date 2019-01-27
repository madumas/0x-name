**0x-name** generates a short, easy to remember, but non-unique mnemonic for Ethereum addresses
This mnemonic can be used to easily reference Ethereum addresses when doing chain analysis and transaction traffic.

**Under no circumstances the mnemonic should be used to transact.** It is trivial to generate a valid Ethereum address from a 0x-name mnemonic.

For more information, visit https://0xna.me


## Usage

Use NPM to install the library:
```
npm install 0x-name
```

Then include it:

```
import zeroxName from '0x-name';
// or:
const zeroxName = require('0x-name');
```

Example:
```
var zeroxName = require("0x-name")
let name = zeroxName('0x96203a314504fb1a14d40c6bf9d08d3ebad3425f')
// name = TrueBawdyHabit
```
