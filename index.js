const DApp = require('dapp.js')

async function run() {

  const client = new DApp.client({
    privateKey: 'a48e81f7413ebaee990234a0d5ca0d1907b125fb7fbcb395ffd87ece4eb2ad65',
    network: 'custom',
    provider: {
      type: 'web3/http',
      url: 'http://127.0.0.1:7545'
    }
  })
  client.addService('donation', __dirname + '/services/donation')

  const addr = '0x7655107fE6fD3347E220fB2445a7f00747333b84'
  const owner = '0xc840493fb3835a26de50c10D65d6556F2177b934'

  const donation = await client.service('donation')
  const value = process.argv[2] || 1

  await donation.donate(addr, value, 'i donating', owner)

  console.log('Total Balance:', await donation.balance(addr))

}

run()
