const Donation = artifacts.require('./contracts/Donation.sol')

module.exports = function(deployer) {
  deployer.deploy(Donation, 'Thanks for donate!')
}
