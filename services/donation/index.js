const Service = require('dapp.js').service

class Donation extends Service {

  async balance (addr) {
    return this._call(addr, 'donation', 'checkContractBalance', [])
  }

  async donate (addr, amount, msg, from) {
    return this._send(addr, 'donation', 'make_donation', [msg], { from, value: amount })
  }

	async balanceOf (addr, owner) {
    return this._call(addr, 'donation', 'balanceOf', [owner])
  }
}

module.exports = {
  name: 'Donation Contract Example',
  api: Donation
}
