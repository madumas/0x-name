const codenamize = require('@codenamize/codenamize')

function isAddress (address) {
  // check if it has the basic requirements of an address
  return /^(0x)?[0-9a-f]{40}$/i.test(address)
}

function zeroxName (address) {
  let name = ''
  address = String(address).toLowerCase()

  if (address.substring(0, 2) !== '0x') {
    address = '0x' + address
  }

  if (isAddress(address)) {
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
