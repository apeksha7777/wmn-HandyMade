const SimpleStorage = artifacts.require("./SimpleBank.sol");

contract("SimpleBank", accounts => {
  it("...should store the value 89.", async () => {
    const simpleStorageInstance = await SimpleBank.deployed();

    // Set value of 89
    await simpleStorageInstance.set(89, { from: accounts[0] });

    // Get stored value
    const storedData = await simpleStorageInstance.get.call();

    assert.equal(storedData, 89, "The value 89 was not stored.");
  });
});
