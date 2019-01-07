const web3 = require('web3')
const codenamize = require('@codenamize/codenamize')

function zeroxName (address) {
  let name = ''
  address = String(address).toLowerCase()

  if (address.substring(0, 2) !== '0x') {
    address = '0x' + address
  }

  if (web3.utils.isAddress(address)) {
    name = codenamize(
      {
        seed: address,
        adjectiveCount: 2,
        maxItemChars: 5,
        capitalize: true,
        separator: ''
      })
  }

  return name
}

module.exports = zeroxName
