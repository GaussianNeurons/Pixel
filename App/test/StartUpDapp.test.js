const StartUpDapp = artifacts.require("./StartUpDapp.sol");

require('chai')
    .use(require('chai-as-promised'))
    .should();
contract('StartUpDapp', ([deployer, owner, funder]) => {
    let startUpDapp

    before(async () => {
        startUpDapp = await StartUpDapp.deployed()
    })

    describe('deployment', async() => {
        it('deploys successfully', async() => {
            const address = await startUpDapp.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })

    })

    describe('startups', async() => {
        let result, startupCount
        before(async () => {
            result = await startUpDapp.requestFunding('A startup idea', web3.utils.toWei('1', 'Ether'), {from: owner})
            startupCount = await startUpDapp.startupCount()

        })
        //Owner requests funding
        it('owner can request funding', async() => {
            // SUCCESS
            assert.equal(startupCount, 1)
            const event = result.logs[0].args
            assert.equal(event.owner, owner, 'Owner is correct')
            assert.equal(event.startupId.toNumber(), startupCount.toNumber(), 'id is correct')
            assert.equal(event.startupDescription, 'A startup idea', 'description is correct')
            assert.equal(event.startupAmount, '1000000000000000000', 'amount is correct')
            assert.equal(event.isActive, false, 'Startup is active')

            // FAILURE: owner must be approved
            await startUpDapp.requestFunding('', web3.utils.toWei('1', 'Ether'), {from: owner}).should.be.rejected;
            // FAILURE: Startup must have a positive fund amount
            await startUpDapp.requestFunding('A startup idea', 0, {from: owner}).should.be.rejected;
        })
        //lists all startups
        it('lists startups', async() => {
            const startup = await startUpDapp.startups(startupCount)
            assert.equal(startup.owner, owner, 'Owner is correct')
            assert.equal(startup.startupId.toNumber(), startupCount.toNumber(), 'id is correct')
            assert.equal(startup.startupDescription, 'A startup idea', 'description is correct')
            assert.equal(startup.startupAmount, '1000000000000000000', 'amount is correct')
            assert.equal(startup.isActive, false, 'Startup is active')
        })
        //funder approves a startup (funds startup)
        it('funder can fund startups', async() => {
            // Track the Owners balance before a transfer.
            let oldBorrowerBalance
            oldBorrowerBalance = await web3.eth.getBalance(owner)
            oldBorrowerBalance = new web3.utils.BN(oldBorrowerBalance)

            // SUCCESS - funder approves startup
            result = await startUpDapp.fundStartup(startupCount, {from: funder, value: web3.utils.toWei('1', 'Ether')})

            // Check logs
            assert.equal(startupCount, 1)
            const event = result.logs[0].args
            assert.equal(event.owner, funder, 'Owner is correct')
            assert.equal(event.startupId.toNumber(), startupCount.toNumber(), 'id is correct')
            assert.equal(event.startupDescription, 'A startup idea', 'description is correct')
            assert.equal(event.startupAmount, '1000000000000000000', 'amount is correct')
            assert.equal(event.isActive, true, 'Startup is active')

            //check that the owner recieved funds
            let newBorrowerBalance
            newBorrowerBalance = await web3.eth.getBalance(owner)
            newBorrowerBalance = new web3.utils.BN(newBorrowerBalance)

            let startupAmount
            startupAmount = web3.utils.toWei('1', 'Ether')
            startupAmount = new web3.utils.BN(startupAmount)

            //console.log(oldBorrowerBalance, newBorrowerBalance, ownerDifference)
            const expectedBalance = oldBorrowerBalance.add(startupAmount)
            assert.equal(newBorrowerBalance.toString(), expectedBalance.toString())

            // FAILURE: funder tries to fund a startup that does not exist
            await startUpDapp.fundStartup(99, {from: funder, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
            // FAILURE: funder tries to fund a startup without enough ether
            await startUpDapp.fundStartup(startupCount, {from: funder, value: web3.utils.toWei('0.5', 'Ether')}).should.be.rejected;
            // FAILURE: Deployer tries to fund a startup, i.e startup cannot be funded twice.
            await startUpDapp.fundStartup(startupCount, {from: deployer, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
            // FAILURE: funder tries to fund the same startup, i.e funder cannot be the owner
            await startUpDapp.fundStartup(startupCount, {from: funder, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
            
        })
   

    
    })
})